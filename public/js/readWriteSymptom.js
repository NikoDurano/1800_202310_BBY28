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
        alert("Tracker form submitted");
        window.location.href = "home.html"
    })
    .catch((error)=>{
        alert("error" +error);
    });
} 