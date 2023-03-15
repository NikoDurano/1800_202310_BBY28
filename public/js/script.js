/* // Function to read the quote of the day from Firestore "quotes" collection
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
readQuote("thisOne");        //calling the function */


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
                var userWeight = userDoc.data().weightPet;
                console.log(userName);
                console.log(userAge);
                //$("#name-goes-here").text(userName); //jquery
                document.getElementById("petNameBold").innerText=userName;
                if(userAge == "1"){
                document.getElementById("petAge").innerText=userAge +" year old";

                }else{
                document.getElementById("petAge").innerText=userAge +" years old";

                }
                document.getElementById("petWeight").innerText=userWeight;

 

            })  
        }    
     })
}
insertNameFromFirestore();





function insertVetFromFirestore(){
    // to check if the user is logged in:
    firebase.auth().onAuthStateChanged(user =>{
        if (user){
           console.log(user.uid); // let me to know who is the user that logged in to get the UID
           currentuserVet = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).collection("vetInfo").doc(user.uid);
            
           currentuserVet.get().then(userDoc=>{
               //get the user name
               var vetName= userDoc.data().nameVet;
               var vetAddress = userDoc.data().addressVet;
               var vetPhone = userDoc.data().phoneNumberVet;
               //$("#name-goes-here").text(userName); //jquery
               document.getElementById("vetNAME").innerText=vetName;
               document.getElementById("vetADDRESS").innerText=vetAddress;
               document.getElementById("vetNUMBER").innerText=vetPhone;
           }) 
       }    
    })
}
insertVetFromFirestore();

function insertConditionFromFirestore(){
    // to check if the user is logged in:
    firebase.auth().onAuthStateChanged(user =>{
        if (user){
           console.log(user.uid); // let me to know who is the user that logged in to get the UID
           currentuser = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid);
            
           currentuser.get().then(userDoc=>{
               //get the user name
               var coat= userDoc.data().coatType;
               var face = userDoc.data().flatFace;
               var brain = userDoc.data().brainProblem;
               var heart = userDoc.data().heartProblem;
               var lungs = userDoc.data().lungProblem;
               //$("#name-goes-here").text(userName); //jquery
               document.getElementById("coat").innerText="Coat Type: "+ coat;
               document.getElementById("face").innerText="Flat Face Breed: "+face;
               document.getElementById("brain").innerText="Existing Neurological Issues: "+brain;
               document.getElementById("heart").innerText="Existing Heart Issues: "+heart;
               document.getElementById("lung").innerText="Existing Respiratory Issues: "+lungs;

           }) 
       }    
    })
}
insertConditionFromFirestore();














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