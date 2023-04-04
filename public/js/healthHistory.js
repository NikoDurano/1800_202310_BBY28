const entries = document.getElementById("entries");

// const functions = require('firebase-functions');

// exports.myFunction = functions.firestore
//   .document('my-collection/{docId}')
//   .onWrite((change, context) => { /* ... */ });

//sessionStorage.setItem("lastname", "reee");
// let personName = sessionStorage.getItem("lastname");
// entries.innerHTML = "Session storage test" + personName;

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         // User is signed in, so we can access their UID
//         const ref = db
//             .collection("users")
//             .doc(user.uid)
//             .collection("petInfo")
//             .doc(user.uid)
//             .collection("symptomLog")
//             .doc(user.uid);

//         var name = "BOB";//default name

//         currentUser = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid);
//         currentUser.get().then(userDoc => {
//                 //get the pet's name
//                 name = userDoc.data().namePet;
//         });

//         ref.get().then((ss) => {
//             //programatically create the symptom log entries.
//             //each entry is a div which contains the temperature and symptoms of the pet.

//             let logEntry = document.createElement("div");
//             let petName = document.createElement("span");
//             let behaviors = document.createElement("div");
//             let physicals = document.createElement("div");
//             let temp = document.createElement("span");
//             let date =  document.createElement("span");//doc.data().last_updated.toDate().toLocaleDateString();

//             //------------DELETE LATER----------------------
//             let myBreak = document.createElement("br");

//             logEntry.setAttribute("data-id", user.uid);
//             petName.setAttribute("id", "petName");
//             temp.setAttribute("id", "temp");
//             behaviors.setAttribute("id", "behaviors");
//             physicals.setAttribute("id", "physicals");
//             date.setAttribute("id", "date");

//             petName.textContent = name;
//             temp.textContent = "Temperature: " + ss.data().temperature;
//             behaviors.textContent = "Behaviors:";
//             physicals.textContent = "Physical Symptoms:"
//             date.textContent =  ss.data().last_updated.toDate().toLocaleDateString();

//             petName.style = "Border: 3px solid black;";

//             //for every behavior within the arrBehavior array.
//             ss.data().arrBehavior.forEach((element, index) => {
//                 let idName = "behavior" + index;
//                 //create a span to represent each behavior i.e. `drooling`
//                 let curBehavior = document.createElement("span");

//                 //------delete later, this is for temporary styling----------------------------
//                 let myBreak = document.createElement("br");

//                 curBehavior.setAttribute("id", idName);
//                 curBehavior.textContent = element;

//                 behaviors.appendChild(myBreak);
//                 behaviors.appendChild(curBehavior);
//             });

//             ss.data().arrPhysical.forEach((element, index) => {
//                 let idName = "physical" + index;
//                 //create a span to represent each behavior i.e. `drooling`
//                 let curPhysical = document.createElement("span");
//                 //------delete later, this is for temporary styling----------------------------
//                 let myBreak = document.createElement("br");

//                 curPhysical.setAttribute("id", idName);
//                 curPhysical.textContent = element;

//                 physicals.appendChild(myBreak);
//                 physicals.appendChild(curPhysical);
//             });

//             logEntry.appendChild(petName);
//             logEntry.appendChild(myBreak);
//             logEntry.appendChild(temp);
//             logEntry.appendChild(behaviors);
//             logEntry.appendChild(physicals);
//             logEntry.appendChild(date);
//             entries.appendChild(logEntry);

//             //document.getElementById('temperature').innerHTML = "Temperature: " + ss.data().temperature;
//         });

//         // Rest of your code here...
//     } else {
//         // User is not signed in, handle this case as needed
//         alert("no user signed in");
//     }
// });


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const uid = user.uid;
        const petInfoRef = db
            .collection("users")
            .doc(uid)
            .collection("petInfo")
            .doc(uid);
        const symptomLogRef = petInfoRef.collection("symptomLog").orderBy("last_updated", "desc");

        var name = "BOB"; //default name

        petInfoRef.get().then((userDoc) => {
            //get the user name
            name = userDoc.data().namePet;
        });

        // Listen for changes to the symptomLog subcollection
        symptomLogRef.onSnapshot((snapshot) => {
            // Clear the current journal log
            //entries.innerHTML = "";

            // Create a new journal log for each document in the snapshot
            snapshot.forEach((doc) => {
                const data = doc.data();

                // Create the journal log entry
                let logEntry = document.createElement("div");
                let petName = document.createElement("span");
                let behaviors = document.createElement("div");
                let physicals = document.createElement("div");
                let temp = document.createElement("span");
                let date = document.createElement("span");

                let myBreak = document.createElement("br");

                logEntry.setAttribute("data-id", doc.id);
                petName.setAttribute("id", "petName");
                temp.setAttribute("id", "temp");
                behaviors.setAttribute("id", "behaviors");
                physicals.setAttribute("id", "physicals");
                date.setAttribute("id", "date");

                petName.textContent = name;
                temp.textContent = "Temperature: " + data.temperature;
                behaviors.textContent = "Behaviors:";
                physicals.textContent = "Physical Symptoms:";
                date.textContent = data.last_updated
                    .toDate().toDateString() + " " + data.last_updated
                    .toDate().toLocaleTimeString();
                    //.toLocaleDateString();
                    console.log(data.arrBehavior.length);

                    if(data.arrBehavior.length == 0){
                        let idName = "behavior";
                        let curBehavior = document.createElement("span");
                        let myBreak = document.createElement("br");
    
                        curBehavior.setAttribute("id", idName);
                        curBehavior.textContent = "none";
    
                        behaviors.appendChild(myBreak);
                        behaviors.appendChild(curBehavior);
                    }

                    if(data.arrPhysical.length == 0){
                        let idName = "physical";
                        let curPhysical = document.createElement("span");
                        let myBreak = document.createElement("br");
    
                        curPhysical.setAttribute("id", idName);
                        curPhysical.textContent = "none";
    
                        physicals.appendChild(myBreak);
                        physicals.appendChild(curPhysical);
                    }
                data.arrBehavior.forEach((element, index) => {
                        let idName = "behavior" + index;
                        let curBehavior = document.createElement("span");
                        let myBreak = document.createElement("br");
    
                        curBehavior.setAttribute("id", idName);
                        curBehavior.textContent = element;
    
                        behaviors.appendChild(myBreak);
                        behaviors.appendChild(curBehavior);
                    
                });

                data.arrPhysical.forEach((element, index) => {
                    let idName = "physical" + index;
                    let curPhysical = document.createElement("span");
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
                logEntry.appendChild(date);
                entries.appendChild(logEntry);
            });
        });

    } else {
        alert("no user signed in");
    }
});
