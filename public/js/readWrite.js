//Ready
let namePet = document.getElementById("nameBox");
let agePet = document.getElementById("ageBox");


let insertButton = document.getElementById("insertButton")

//Insert
async function addDocument_CustomID(){
    var ref = db.collection("users").doc(user.uid).collection("petInfo").doc(namePet.value);


        ref.set({
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

insertButton.addEventListener("click", addDocument_CustomID);

