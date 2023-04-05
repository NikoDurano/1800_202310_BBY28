function insertNameFromFirestore(){
    // to check if the user is logged in:
    firebase.auth().onAuthStateChanged(user =>{
        if (user){
           console.log(user.uid); // let me to know who is the user that logged in to get the UID
           currentUser= db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).collection("vetInfo").doc(user.uid);
           currentUser.get().then(userDoc=>{
               //get the user name
               var vetName= userDoc.data().nameVet;
               var vetAddress = userDoc.data().addressVet;
               var vetNumber = userDoc.data().phoneNumberVet;
               console.log(vetName);
               console.log(vetAddress);
               console.log(vetNumber);
               //$("#name-goes-here").text(userName); //jquery
               document.getElementById("name").innerText= vetName;
               document.getElementById("address").innerText="Address: " + vetAddress;
               document.getElementById("number").innerText= "Phone Number: "+vetNumber;


           })    
       }    
    })
}
insertNameFromFirestore();


function notWorking(){
    alert("This functions is not implemented yet")

}
