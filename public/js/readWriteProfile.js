


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
    let nameBox = document.getElementById("petNameBox");
    let ageBox = document.getElementById("ageNameBox");
    
    document.forms["weight"].weightPet.options;

    //let insertButton = document.getElementById("insertButton")

    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref =db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid)

        ref.update({
            namePet:nameBox.value,
            agePet:ageBox.value,
            weightPet:this.weightPet.value
        }
    )
    .then(()=>{
        alert("works");
        window.location.href = "petProfileCreator2.html"
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 

async function updatePetProfile2Doc(){
    document.forms["coat"].coatLength.options;
    document.forms["face"].flatFace.options;
    document.forms["heart"].heartProb.options;
    document.forms["lungs"].lungProb.options;
    document.forms["brain"].brainProb.options;

    //let insertButton = document.getElementById("insertButton")

    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref =db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid)

        ref.update({

            coatType: this.coatLength.value,
            flatFace: this.flatFace.value,
            heartProblem: this.heartProb.value,
            lungProblem: this.lungProb.value,
            brainProblem: this.brainProb.value


        }
    )
    .then(()=>{
        alert("works");
        window.location.href = "vetProfileCreator.html"
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 

async function updateVetProfileCreator() {

    let vetName = document.getElementById("vetNameInput");
    let vetPhone = document.getElementById("vetPhoneInput");
    let vetLocation = document.getElementById("vetLocationInput");


    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).collection("vetInfo").doc(user.uid);
        ref.update({
            
            nameVet: vetName.value,
            phoneNumberVet: vetPhone.value,
            addressVet: vetLocation.value

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















