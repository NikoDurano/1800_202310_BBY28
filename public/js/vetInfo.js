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
               document.getElementById("tabVetVetName").innerText= "Name: " + vetName;
               document.getElementById("tabVetVetAddress").innerText= "Address: " + vetAddress;
               document.getElementById("tabVetVetNumber").innerText= "Number: " + vetNumber;


           })    
       }    
    })
}
insertNameFromFirestore();