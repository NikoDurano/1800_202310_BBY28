// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0ckezpw8hbjuoljUWDAUOiVKe87V6hTg",
    authDomain: "bby-28-hawtpaw.firebaseapp.com",
    projectId: "bby-28-hawtpaw",
    storageBucket: "bby-28-hawtpaw.appspot.com",
    messagingSenderId: "913241136631",
    appId: "1:913241136631:web:cb7f56fe0528ad075de2f2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("petCardTemplate");

    db.collection(collection).get()   //the collection called "hikes"
        .then(allHikes=> {
            //var i = 1;  //Optional: if you want to have a unique ID for each hike
            allHikes.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;       // get value of the "name" key
                var details = doc.data().details;  // get value of the "details" key
								var hikeCode = doc.data().code;    //get unique ID to each hike to be used for fetching right image
                var hikeLength = doc.data().length; //gets the length field
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-length').innerHTML = hikeLength +"km";
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; //Example: NV01.jpg

                //Optional: give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery, Example: "hikes-go-here"
                document.getElementById(collection + "-go-here").appendChild(newcard);

                //i++;   //Optional: iterate variable to serve as unique ID
            })
        })
}

displayCardsDynamically("hikes");  //input param is the name of the collection

function processForm(){
    document.getElementById("submit").addEventListener( "click", () => {
        //Page 2: Get the Temperature value input
        let temp = document.getElementById("temp").value;

        //Page 2: Get the weather value from the radio buttons
        let weather = "n/a";
        if (document.getElementById("normal").checked){
            weather = document.getElementById("normal").value;
        } else if (document.getElementById("heatwave").checked){
            weather = document.getElementById("heatwave").value;
        } else 
            weather = document.getElementById("coldsnap").value;

        //Get the boxes that were checked
        // let message = "";
        // if (document.getElementById("bus").checked)
            // message += document.getElementById("bus").value + " "; //"Bus" string 
        // if (document.getElementById("car").checked)
            // message += document.getElementById("car").value + " "; //"Car" string 
        // if (document.getElementById("walk").checked)
            // message += document.getElementById("walk").value + " "; //"Walk" string 
        // if (document.getElementById("bike").checked)
            // message += document.getElementById("bike").value; //"Bike" string//Get the boxes that were checked
      

    } );
}
processForm();