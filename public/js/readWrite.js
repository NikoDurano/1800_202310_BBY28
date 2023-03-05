


//Ready
let namePet = document.getElementById("nameBox");
let agePet = document.getElementById("ageBox");


let insertButton = document.getElementById("insertButton")

//Insert
 async function updateDoc(){
    //PROBLEM CANT FIND USER ID
    const ref =db.collection("users").doc(users.uid).collection("petInfo").doc(namePet.value)
        ref.update({
            NameOfPet:namePet.value,
            AgeOfPet:agePet.value,
        }
    )
    .then(()=>{
        alert("works");
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 

//insertButton.addEventListener("click", updateDoc);



