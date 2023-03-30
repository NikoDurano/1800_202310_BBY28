const mainCon = document.getElementById("mainCon");

// const functions = require('firebase-functions');

// exports.myFunction = functions.firestore
//   .document('my-collection/{docId}')
//   .onWrite((change, context) => { /* ... */ });

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, so we can access their UID
        const ref = db
            .collection("users")
            .doc(user.uid)
            .collection("petInfo")
            .doc(user.uid)
            .collection("symptomLog")
            .doc(user.uid);

        var name = "BOB";//default name

        currentUser = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid); // will to to the firestore and go to the document of the user
        currentUser.get().then(userDoc => {
                //get the user name
                var userName = userDoc.data().namePet;
                name = userName;
        });

        ref.get().then((ss) => {
            //programatically create the symptom log entries.
            //each entry is a div which contains the temperature and symptoms of the pet.

            let logEntry = document.createElement("div");
            let petName = document.createElement("span");
            let behaviors = document.createElement("div");
            let physicals = document.createElement("div");
            let temp = document.createElement("span");

            //------------DELETE LATER----------------------
            let myBreak = document.createElement("br");

            logEntry.setAttribute("data-id", user.uid);
            petName.setAttribute("id", "petName");
            temp.setAttribute("id", "temp");
            behaviors.setAttribute("id", "behaviors");
            physicals.setAttribute("id", "physicals");

            petName.textContent = name;
            temp.textContent = ss.data().temperature;
            behaviors.textContent = "Behaviors:";
            physicals.textContent = "Physical Symptoms:"

            petName.style = "Border: 3px solid black;";

            //for every behavior within the arrBehavior array.
            ss.data().arrBehavior.forEach((element, index) => {
                let idName = "behavior" + index;
                //create a span to represent each behavior i.e. `drooling`
                let curBehavior = document.createElement("span");
                
                //------delete later, this is for temporary styling----------------------------
                let myBreak = document.createElement("br");

                curBehavior.setAttribute("id", idName);
                curBehavior.textContent = element;

                behaviors.appendChild(myBreak);
                behaviors.appendChild(curBehavior);
            });

            ss.data().arrPhysical.forEach((element, index) => {
                let idName = "physical" + index;
                //create a span to represent each behavior i.e. `drooling`
                let curPhysical = document.createElement("span");
                //------delete later, this is for temporary styling----------------------------
                let myBreak = document.createElement("br");

                curPhysical.setAttribute("id", idName);
                curPhysical.textContent = element;

                physicals.appendChild(myBreak);
                physicals.appendChild(curPhysical);
            });

            logEntry.appendChild(petName);
            logEntry.appendChild(myBreak);
            logEntry.appendChild(temp);
            logEntry.appendChild(behaviors);
            logEntry.appendChild(physicals);
            mainCon.appendChild(logEntry);

            //document.getElementById('temperature').innerHTML = "Temperature: " + ss.data().temperature;
        });

        // Rest of your code here...
    } else {
        // User is not signed in, handle this case as needed
        alert("no user signed in");
    }
});

//goober method, use if all else fails.
// const id = "DIpd08YeFEOtoT1J8BxFoe0NFIm1";
// const ref = db
//     .collection("users")
//     .doc(id)
//     .collection("petInfo")
//     .doc(id)
//     .collection("symptomLog")
//     .doc(id);
