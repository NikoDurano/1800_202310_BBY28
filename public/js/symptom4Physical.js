function physical() {
  const user = firebase.auth().currentUser;

  const ref = db
    .collection("users")
    .doc(user.uid)
    .collection("petInfo")
    .doc(user.uid)
    .collection("symptomLog")
    .doc(user.uid);

  let checkboxes = document.querySelectorAll('input[name="Physical"]:checked');

  let arrPhysicals = [];
  checkboxes.forEach((checkbox) => {
    arrPhysicals.push(checkbox.value);
  });

  ref
    .update({
      arrPhysical: arrPhysicals,
    })
    .then(() => {
      alert("works");
      getValues();
    })
    .catch((error) => {
      alert("error" + error);
    });
}

function getValues() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid);
      currentuserSymptom = db
        .collection("users")
        .doc(user.uid)
        .collection("petInfo")
        .doc(user.uid)
        .collection("symptomLog")
        .doc(user.uid);

      currentuserSymptom.get().then((userDoc) => {
        const arrayBehavior = userDoc.data().arrBehavior;
        const arrayPhysical = userDoc.data().arrPhysical;

        const temperature = userDoc.data().temperature;

        currentuserPet = db
          .collection("users")
          .doc(user.uid)
          .collection("petInfo")
          .doc(user.uid);

        currentuserPet.get().then((userDoc) => {
          const age = userDoc.data().agePet;
          const coat = userDoc.data().coatType;
          const size = userDoc.data().weightPet;
          const type = userDoc.data().typePet;

          const flat = userDoc.data().flatFace;
          const brain = userDoc.data().brainProblem;
          const heart = userDoc.data().heartProblem;
          const lung = userDoc.data().lungProblem;

          let thresholdLower = 49;
          let thresholdUpper = 75;

          let petStats = 0;
          let weather = petWeight(temperature, coat, size);

          petStats += petAge(age);

          petStats += petWeight(temperature, coat, size);

          petStats += petTemperature(temperature);

          petStats += petPreConditions(flat, brain, heart, lung);

          petStats += petSymptoms(arrayBehavior, arrayPhysical);

          console.log("Total: " + petStats);

          if (type == "cat") {
            if (
              arrayBehavior.includes("panting") ||
              arrayPhysical.includes("skin") ||
              arrayPhysical.includes("heartrate") ||
              arrayPhysical.includes("tongue") ||
              arrayPhysical.includes("vomit")
            ) {
              highRisk();
              if (weather >= 3) {
                warningThree();
              }
            } else if (
              thresholdLower <= petStats &&
              petStats <= thresholdUpper
            ) {
              midRisk();
              if (weather >= 3) {
                warningTwo();
              }
            } else {
              lowRisk();
              if (weather >= 3) {
                warningOne();
              }
            }
          } else {
            if (
              arrayPhysical.includes("skin") ||
              arrayPhysical.includes("heartrate") ||
              arrayPhysical.includes("tongue") ||
              arrayPhysical.includes("vomit")
            ) {
              highRisk();
              if (weather >= 3) {
                warningThree();
              }
            } else if (
              thresholdLower <= petStats &&
              petStats <= thresholdUpper
            ) {
              midRisk();
              if (weather >= 3) {
                warningTwo();
              }
            } else {
              lowRisk();
              if (weather >= 3) {
                warningOne();
              }
            }
          }
        });
      });
    }
  });
}

function warningOne() {
  const warningCon = document.getElementById("warningOne");
  warningCon.classList.add("show");
}
function warningTwo() {
  const warningCon = document.getElementById("warningTwo");
  warningCon.classList.add("show");
}
function warningThree() {
  const warningCon = document.getElementById("warningThree");
  warningCon.classList.add("show");
}

function lowRisk() {
  const close1 = document.getElementById("close1");
  const modelCon1 = document.getElementById("modelCon1");

  close1.addEventListener("click", () => {
    modelCon1.classList.remove("show");
  });
  modelCon1.classList.add("show");
}

function midRisk() {
  const close1 = document.getElementById("close2");
  const modelCon1 = document.getElementById("modelCon2");

  close1.addEventListener("click", () => {
    modelCon1.classList.remove("show");
  });
  modelCon1.classList.add("show");
}

function highRisk() {
  const close1 = document.getElementById("close3");
  const modelCon1 = document.getElementById("modelCon3");

  close1.addEventListener("click", () => {
    modelCon1.classList.remove("show");
  });
  modelCon1.classList.add("show");
}

function petAge(age) {
  let ageValue = 3;

  if (0 <= age && age <= 10) {
    console.log("Age Value: " + ageValue);
    return ageValue;
  } else {
    ageValue = 3 + (age - 11);

    console.log("Age Value: " + ageValue);
    return ageValue;
  }
}

function petWeight(temperature, coat, size) {
  let sizeValue = 0;

  if (size == "Obese") {
    sizeValue += 1;
    if (temperature >= 19) {
      sizeValue += 3;

      if (coat == "long") {
        sizeValue += 3;
      }
    }
  } else if (
    (size == "Thin" && temperature <= 11) ||
    (size == "Overweight" && temperature >= 19) ||
    (coat == "short" && temperature <= 11) ||
    (coat == "long" && temperature >= 19)
  ) {
    sizeValue = 3;
  } else {
    sizeValue = 0;
  }

  console.log("Weight Value: " + sizeValue);
  return sizeValue;
}

function petTemperature(temperature) {
  let temperatureValue = 0;

  if (temperature < 0) {
    temperatureValue = 25;
  } else if (1 <= temperature && temperature <= 10) {
    temperatureValue = 20 - 2 * (temperature - 1);
  } else if (11 <= temperature && temperature <= 19) {
    temperatureValue = 0;
  } else if (20 <= temperature && temperature <= 29) {
    temperatureValue = 2 + 2 * (temperature - 20);
  } else {
    temperatureValue = 25;
  }

  console.log("Temperature Value: " + temperatureValue);
  return temperatureValue;
}

function petPreConditions(flat, brain, heart, lung) {
  let preConditionsValue = 0;

  if (flat == "yes") {
    preConditionsValue += 3;
  }
  if (brain == "yes") {
    preConditionsValue += 3;
  }
  if (heart == "yes") {
    preConditionsValue += 3;
  }
  if (lung == "yes") {
    preConditionsValue += 3;
  }
  console.log("PreConditions Value: " + preConditionsValue);
  return preConditionsValue;
}

function petSymptoms(behavior, physical) {
  let symptomsValue = 0;

  if (behavior.includes("drooling")) {
    symptomsValue += 25;
  }
  if (behavior.includes("agitation")) {
    symptomsValue += 25;
  }
  if (behavior.includes("dizziness")) {
    symptomsValue += 25;
  }
  if (behavior.includes("lethargy")) {
    symptomsValue += 25;
  }
  if (physical.includes("diarrhea")) {
    symptomsValue += 25;
  }

  console.log("Symptoms Value: " + symptomsValue);
  return symptomsValue;
}

function writeTrackerLog() {
    console.log("Tracker Entries")
    let temperature = document.getElementById("title").value;
    let Level = document.getElementById("level").value;
    let Season = document.getElementById("season").value;
    console.log(Title, Level, Season, Description, Flooded, Scrambled);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var userEmail = userDoc.data().email;
                    db.collection("reviews").add({
                        hikeDocID: hikeDocID,
                        userID: userID,
                        title: Title,
                        level: Level,
                        season: Season,
                        description: Description,
                        flooded: Flooded,
                        scrambled: Scrambled,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(() => {
                        window.location.href = "thanks.html"; //new line added
                    })
                })
        } else {
            console.log("No user is signed in");
            window.location.href = 'review.html';
        }
    });
}