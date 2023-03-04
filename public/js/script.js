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