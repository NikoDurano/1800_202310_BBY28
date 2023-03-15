(function(global) {
    "use strict";
  
    
    /*
    * WeatherForecastWidget - encapsulates data retrieval and display for the Weather Forecast Widget
    * initConfig - configuration instance passed from the attach function
    */
   var WeatherForecastWidget=function(initConfig) {

        //the root HTML tag selector
        this.rawSelector=initConfig.selector;
        if ((!initConfig.location) && localStorage) {
            initConfig.location=localStorage.getItem("loc");
        }
        if (!initConfig.location) initConfig.location="_auto_";

        //Initialize the widget using the container parameters
        this.config={
            "location":initConfig.location, //initial location
            "title":initConfig.title || (initConfig.location!=="_auto_" && initConfig.location),
            "unitGroup":initConfig.unitGroup || "us", //initial location
            "key":initConfig.apiKey, //api key
            "hourly":false,
            // "forecastDays":initConfig.forecastDays || 5, //DEFAULT CODE
            "forecastDays":initConfig.forecastDays, 
            "showTitle":!(initConfig.showTitle===false), 
            "showCurrent":!(initConfig.showCurrent===false)
        }

        //weather forecast data populated by the Weather API calls
        this.dailydata=null;
        this.hourlydata=null;
        this.error=null;
        var me=this;

        //setLocation - updates the location and triggers a data reload
        this.setLocation=function(location) {
            if (!location) location="_auto_";
            me.config.location=location;
            me.dailydata=null;
            me.hourlydata=null;
            me.loadForecastData();
        }
      
        this.init=function(stylesheets) {

            if (!stylesheets || stylesheets.length==0) {
                me.loadForecastData();
                return;
            }
            var link = document.createElement( 'link' );
            link.rel  = 'stylesheet';
            link.href = stylesheets.pop();

            document.head.appendChild( link );
            link.onload = function() { 
               me.init(stylesheets);
            };
        }


        //constructs Weather API request and then loads the weather forecast data from the Weather API
        this.loadForecastData=function() {
            //for now abandon loading data if an error has been recorded
            if ( me.error) return;


            if ((me.config.hourly && me.hourlydata) || (!me.config.hourly && me.dailydata)) return;

            //endpoint
            var uri=(initConfig.root || "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/");
            uri+='forecast?';
            //parameters
            uri+="unitGroup="+me.config.unitGroup+"&contentType=json&locationMode=single&iconSet=icons1&location="+me.config.location+"&key="+me.config.key;
           
           
            uri+="&aggregateHours=12" 
            // uri+="&aggregateHours=24"     --- may be useful
           
            var request = new XMLHttpRequest();
            request.open('GET', uri, true);

            request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var rawResult = JSON.parse(this.response);
                me.dailydata=rawResult;
                if (!rawResult || rawResult.errorCode) {
                    me.showError("Error loading data", rawResult.message);
                    if (rawResult) console.log("Error loading data (1):"+rawResult.message);
                    return;
                }

                me.processValues(rawResult);
                if (me.config.hourly) {
                    me.hourlydata=rawResult;
                } else {
                    me.dailydata=rawResult;
                }
                 //refresh the display
                 me.refresh();
            } else {
                // We reached our target server, but it returned an error

            }
            };

            request.onerror = function() {
            // There was a connection error of some sort
            };

            request.send();


            
        }
        //checks the forecast values and create Date instances for the data time values
        this.processValues=function(data) {
            var forecastValues=me.getForecastValues(data);
            if (!forecastValues) return;
            var current=new Date();
            var offset=current.getTimezoneOffset()*60000;
            forecastValues.forEach(function(d) {
                d.datetime=new Date(d.datetime+offset );
            });
        }

        //extracts the array of forecast values representing each time period in the data
        this.getForecastValues=function(data) {
            if (!data) {
               throw "No data available for "+me.config.location;
            }
            var location=data.location;

            if (!location) {
                throw "No locations found in data for "+me.config.location;
            }

            if (location.address) {
                if (localStorage) localStorage.setItem("loc", location.address);
                me.config.location=location.address;
            }
            var forecastValues=location.values;
            forecastValues=forecastValues.filter(function(d) {
                return d && (d.temp || d.temp===0);
            });
            return forecastValues;
        }

        this.refresh=function() {

            me.loadForecastData();
            //var skycons = new Skycons();

            var root=document.querySelector(me.rawSelector);
           
             me.setHtml(root,null, "<div class='visualcrossing-wx-widget'>"+
             "<div class='title'></div>"+
             "<div class='content'>"+
                 "<div class='current'>"+
                     //"<img class='icon' src=''></img>"+
                     "<i class='icon wi'></i>"+
                     "<div class='summary'>"+
                         "<div class='temp'>-</div>"+
                     "</div>"+
                 "</div>"+
                //  "<div class='forecast'></div>"+  --------------DEFUALT CODE DO NOT DELETE------------
             "</div>"+
            "<a class='credit' href='https://www.visualcrossing.com/weather-data' title='Visual Crossing Weather Data' target='_blank'>Visual Crossing Weather</a>"+
            "</div>");

            var location=me.dailydata.location;
            var currentConditions=location.currentConditions;
            var widgetElement=root.querySelector(".visualcrossing-wx-widget");

            if (me.config.showTitle) {
                me.setHtml(widgetElement, ".title", me.config.title || location.address);
            } else {
                me.toggleClass(widgetElement, ".title","hidden");
            }

            if (me.config.showCurrent) {

               
                if (currentConditions) {
                    //skycons.add(widgetElement.querySelector(".current .icon"), currentConditions.icon);
                    //widgetElement.querySelector(".current .icon").setAttribute("src", "icons1/"+currentConditions.icon+".svg");
                    me.toggleClass(widgetElement, ".current .icon","wi-forecast-io-"+currentConditions.icon);

                    var current=widgetElement.querySelector(".current .summary");
                    me.setHtml(current, ".temp", me.formatTemp(currentConditions.temp, true));
                    me.setHtml(current, ".precip", currentConditions.precip);
                }
            } else {
                me.toggleClass(widgetElement, ".current","hidden");
            }
          

            

            var values=location.values;
            var maxValues=me.config.forecastDays*2;
            var forecast=widgetElement.querySelector(".forecast");
           

            for (var i=0;i<values.length;i++) {
                var d=values[i];
                var nextd=(i<values.length-1)?values[i+1]:null;

                if (maxValues && i>=maxValues) break;
                
                var formattedDate= me.formatDate(d);
                var nextformattedDate=nextd && me.formatDate(nextd);

                forecast.insertAdjacentHTML('beforeend', "<div class='period'>"+
                "<div class='date'></div>"+
                "<i class='wi icon'></i>"+
                "<div class='maxt'></div>"+
                "</div>");
                var periodElement=forecast.lastElementChild;
                

                
                var collapseNext=false;
               
                var isDay=false;
                
                
                if (nextd && nextformattedDate===formattedDate) {
                    isDay=true;
                    collapseNext=true;
                    i++;
                }
                


                me.setHtml(periodElement, ".date", formattedDate);
                //periodElement.querySelector(".icon").setAttribute("src", "icons1/"+d.icon+".svg");
                me.toggleClass(periodElement, ".icon","wi-forecast-io-"+d.icon);

                if (d.maxt) {
                   me.setHtml(periodElement, ".maxt", me.formatTemp(d.maxt));
                } else {
                   me.setHtml(periodElement, ".maxt", me.formatTemp(d.temp));
                   
                }
               

            }  
            //skycons.play();

          
        }
        this.getCompassDirection=function(degrees) {
            var wdir=Math.round(degrees/22.5);
            if (wdir<0) wdir+=16;
            if (wdir>15) wdir-=16;
            return ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][wdir];
        }
       
        this.formatTemp=function(value, showUnit) {
            if (!value && value!==0) return "-";
            value=Math.round(value);
            if (!showUnit) return value;
            return value+(me.config.unitGroup==="us"?"F":"C");
        }
        this.formatPrecip=function(value) {
            if (!value && value!==0) return "-";
            return value+(me.config.unitGroup==="us"?"\"":"mm");
        }
        this.formatDate=function(value) {
            var today=new Date();
            var date=new Date(value.datetime);
            if (today.getDate()===date.getDate()) return "Today";
            return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][ date.getDay()];
            //return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][ date.getDay()]+" "+date.getDate();
            //return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][ date.getDay()];
        }
        this.toggleClass=function(element, selector, className) {
            var el=element.querySelector(selector);
            el && (el.classList.toggle(className));
        }
        this.setHtml=function(element, selector, content) {
            element=selector?element.querySelector(selector):element;
            element && (element.innerHTML = content);
            
        }
    }
    

   

    /*
    * Attach the widget code to the widgets on the page
    * For each widget config found, create an instance of the widget object
    */

    var attach=function(config) {

        var instance=new WeatherForecastWidget(config );
        instance.init(["https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.css","https://www.visualcrossing.com/widgets/forecast-simple/css/weather-icons.min.css"]);
        //instance.loadForecastData();
        return instance;
    }
    /*
    * look for the global scope weatherWidgetConfig
    * This is an array of widget config (one for each widget on the page)
    */
    if (!window.weatherWidgetConfig) {
        console.error("No weather widget configuration found!");
    } else {
        window.weatherWidgetConfig.forEach(function(config) {
            attach(config);
        })
    }
   
    
    
    global.WeatherForecastDisplay=WeatherForecastWidget;

})(this);