/* async function updateTracker2Doc() {
    let tempBox = document.getElementById("currentTempBox");
    document.forms["weathercond"].weathercond.options;

    //let insertButton = document.getElementById("insertButton")

    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).collection("symptomLog").doc(user.uid)

    ref.update({
        currenttemp: tempBox.value,
        weathercond: this.weathercond.value,
    }
    )
        .then(() => {
            alert("Weather form submitted");
        })
        .catch((error) => {
            alert("error" + error);
        });
}

async function updateTracker3Doc() {
    document.forms["panting"].panting.options;
    document.forms["drooling"].drooling.options;
    document.forms["agitation"].agitation.options;
    document.forms["dizziness"].dizziness.options;
    document.forms["lethargy"].lethargy.options;

    //let insertButton = document.getElementById("insertButton")

    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).collection("symptomLog").doc(user.uid)

    ref.update({
        panting: this.panting.value,
        drooling: this.drooling.value,
        agitated: this.agitation.value,
        dizziness: this.dizziness.value,
        lethargy: this.lethargy.value,
    }
    )
        .then(() => {
            alert("Behavior form submitted");
        })
        .catch((error) => {
            alert("error" + error);
        });
}

async function updateTracker4Doc() {
    document.forms["gums"].gums.options;
    document.forms["heartrate"].heartrate.options;
    document.forms["tongue"].tongue.options;
    document.forms["diarrhea"].diarrhea.options;
    document.forms["vomit"].vomit.options;

    //let insertButton = document.getElementById("insertButton")

    const user = firebase.auth().currentUser;
    //PROBLEM CANT FIND USER ID
    const ref = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).collection("symptomLog").doc(user.uid)

    ref.update({
        gums: this.gums.value,
        heartrate: this.heartrate.value,
        tongue: this.tongue.value,
        diarrhea: this.diarrhea.value,
        vomit: this.vomit.value,
    }
    )
        .then(() => {
            alert("Behavior form submitted");
        })
        .catch((error) => {
            alert("error" + error);
        });
}
 */
function temperature() {
    const user = firebase.auth().currentUser;

    //---old code--------
    // const ref = db
    //     .collection("users")
    //     .doc(user.uid)
    //     .collection("petInfo")
    //     .doc(user.uid)
    //     .collection("symptomLog")
    //     .doc(user.uid);

    const ref = db
        .collection("users")
        .doc(user.uid)
        .collection("petInfo")
        .doc(user.uid)
        .collection("symptomLog");

    const radioButtons = document.querySelectorAll('input[name="wheel"]');

    let temp;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            temp = radioButton.value;
            break;
        }
    }
    console.log(temp);

    //original code
    // ref
    //     .update({
    //         temperature: temp
    //     })
    //     .then(() => {
    //         alert("works");
    //         window.location.href = "symptom3Behavior.html";
    //     })
    //     .catch((error) => {
    //         alert("error" + error);
    //     });

    localStorage.setItem("temperature", temp);
    console.log(
        "Temperature in local storage is: " +
            localStorage.getItem("temperature")
    );

    window.location.href = "symptom3Behavior.html";
}

function behavioral() {
    const user = firebase.auth().currentUser;

    // const ref = db
    //     .collection("users")
    //     .doc(user.uid)
    //     .collection("petInfo")
    //     .doc(user.uid)
    //     .collection("symptomLog")
    //     .doc(user.uid);

    const ref = db
        .collection("users")
        .doc(user.uid)
        .collection("petInfo")
        .doc(user.uid)
        .collection("symptomLog");

    let checkboxes = document.querySelectorAll(
        'input[name="behavior"]:checked'
    );

    let arrbehavioral = [];
    checkboxes.forEach((checkbox) => {
        arrbehavioral.push(checkbox.value);
    });

    //original code
    // ref
    //     .update({
    //         arrBehavior: arrbehavioral
    //     })
    //     .then(() => {
    //         alert("works");
    //         window.location.href = "symptom4Physical.html";
    //     })
    //     .catch((error) => {
    //         alert("error" + error);
    //     });

    localStorage.setItem("arrBehavior", JSON.stringify(arrbehavioral));

    var behavior = JSON.parse(localStorage.getItem("arrBehavior"));

    console.log("arrBehavior in local storage is: " + behavior);

    window.location.href = "symptom4Physical.html";
}

// Centers the tempwheel on 9 degrees on full screen
function defaultScroll() {
    document.querySelector("#tempWheel").scrollLeft = 1820;
}
defaultScroll();