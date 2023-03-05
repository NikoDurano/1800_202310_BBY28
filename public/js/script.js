// Function to read the quote of the day from Firestore "quotes" collection
// Input param is the String representing the day of the week, aka, the document name
function readQuote(Hello) {

         //CHANGE "test" TO COLLECTION NAME
    db.collection("test").doc(Hello)  
                                                        //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(tuesdayDoc => {                                                               //arrow notation
           console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
                          //CHANGE "quote-goes-here" TO ID OF SPAN          CHANGE "Hello" TO KEY VALUE PAIR
           document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().Hello;      //using javascript to display the data on the right place
           
           //Here are other ways to access key-value data fields
           //$('#quote-goes-here').text(tuesdayDoc.data().quote);         //using jquery object dot notation
           //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);      //using json object indexing
		       //document.querySelector("#quote-goes-here").innerHTML = tuesdayDoc.data().quote;
      })
}
 //CHANGE "thisOne" TO DOCUMENT NAME
readQuote("thisOne");        //calling the function


function insertNameFromFirestore(){
     // to check if the user is logged in:
     firebase.auth().onAuthStateChanged(user =>{
         if (user){
            console.log(user.uid); // let me to know who is the user that logged in to get the UID
            currentUser = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid); // will to to the firestore and go to the document of the user
            currentUser.get().then(userDoc=>{
                //get the user name
                var userName= userDoc.data().namePet;
                var userAge = userDoc.data().agePet;
                console.log(userName);
                console.log(userAge);
                //$("#name-goes-here").text(userName); //jquery
                document.getElementById("petInfo").innerText=userName +", "+ userAge;
 

            })    
        }    
     })
}
insertNameFromFirestore();

//Ready
                           // get the user object from the Firebase authentication database
let namePet = document.getElementById("nameBox");
let agePet = document.getElementById("ageBox");
let insertButton = document.getElementById("insertButton")

//update needs fix
async function updatePetInfo(){

    var ref = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid);

        ref.update({
            namePet:namePet.value,
            agePet:agePet.value,
        }
    )
    .then(()=>{
        alert("works");
    })
    .catch((error)=>{
        alert("error" +error);
    });

}

insertButton.addEventListener("click", updatePetInfo); 






/* // Function to read the quote of the day from Firestore "quotes" collection
// Input param is the String representing the day of the week, aka, the document name
function readQuote(day) {


    db.collection("quotes").doc(day)  
                                                        //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(tuesdayDoc => {                                                               //arrow notation
           console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
           document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
           
           //Here are other ways to access key-value data fields
           //$('#quote-goes-here').text(tuesdayDoc.data().quote);         //using jquery object dot notation
           //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);      //using json object indexing
		       //document.querySelector("#quote-goes-here").innerHTML = tuesdayDoc.data().quote;
      })
}
readQuote("tuesday");        //calling the function */