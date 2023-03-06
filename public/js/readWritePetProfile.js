


//Ready
//PET PROFILE CREATE/EDIT VARIBLES
let nameBox = document.getElementById("nameBox");
let ageBox = document.getElementById("ageBox");

let insertButton = document.getElementById("insertButton")


//update
//PET PROFILE CREATE/EDITE UPDATE
 async function updateDoc(){
    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref =db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid)

        ref.update({
            namePet:nameBox.value,
            agePet:ageBox.value,
        }
    )
    .then(()=>{
        alert("works");
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 
insertButton.addEventListener("click", updateDoc);









