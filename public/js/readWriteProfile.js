


//Ready
//PET PROFILE CREATE/EDIT VARIBLES
/* let nameBox = document.getElementById("nameBox");
let ageBox = document.getElementById("ageBox");

let insertButton = document.getElementById("insertButton") */


//update
//PET PROFILE CREATE/EDIT UPDATE
 async function updatePetProfileDoc(){
    let nameBox = document.getElementById("nameBox");
    let ageBox = document.getElementById("ageBox");
    
    //let insertButton = document.getElementById("insertButton")

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
        window.location.href = "tabPetProfile.html"
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 
//insertButton.addEventListener("click", updatePetProfileDoc);


//USER PROFILE CREATE/EDIT UPDATE
function updateUserProfileDoc() {
    let userNameBox = document.getElementById("userNameBox");


    //let nextButton = document.getElementById("userSubmitBtn")


    const user = firebase.auth().currentUser;
    const ref = db.collection("users").doc(user.uid);

    ref.update({
        userName: userNameBox.value,

    }
    )
        .then(() => {
            alert("works");
            window.location.href = "petProfileCreator1.html"
        })
        .catch((error) => {
            alert("error" + error);
        });
}

async function updatePetProfile1Doc(){
    let nameBox = document.getElementById("userNameBox");
    
    //let insertButton = document.getElementById("insertButton")

    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref =db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid)

        ref.update({
            namePet:nameBox.value,
        }
    )
    .then(()=>{
        alert("works");
        window.location.href = "tabPetProfile.html"
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 

















