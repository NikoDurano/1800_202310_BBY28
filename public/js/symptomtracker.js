// Creates Dropdown from List of Pets
function populateDropdown(collection, documentId) {
    const dropdown = document.getElementById("my-dropdown");
    let options = [];

    db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid)
        .get()
        .then((doc) => {
            options.push({
                id: doc.id,
                value: doc.data().namePet,
            });

            options.forEach((option) => {
                const el = document.createElement("option");
                el.value = option.id;
                el.textContent = option.namePet;
                dropdown.appendChild(el);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}
populateDropdown("users", "petInfo");


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