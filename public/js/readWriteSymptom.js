async function updateTracker2Doc(){
    let tempBox = document.getElementById("currentTempBox");
    document.forms["weathercond"].weathercond.options;

    //let insertButton = document.getElementById("insertButton")

    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref =db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).collection("symptomLog").doc(user.uid)

        ref.update({
            currenttemp: tempBox.value,
            weathercond: this.weathercond.value,
        }
    )
    .then(()=>{
        alert("Weather form submitted");
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 

async function updateTracker3Doc(){
    document.forms["panting"].panting.options;
    document.forms["drooling"].drooling.options;
    document.forms["agitation"].agitation.options;
    document.forms["dizziness"].dizziness.options;
    document.forms["lethargy"].lethargy.options;

    //let insertButton = document.getElementById("insertButton")

    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref =db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).collection("symptomLog").doc(user.uid)

        ref.update({
            panting: this.panting.value,
            drooling: this.drooling.value,
            agitated: this.agitation.value,
            dizziness: this.dizziness.value,
            lethargy: this.lethargy.value,
        }
    )
    .then(()=>{
        alert("Behavior form submitted");
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 