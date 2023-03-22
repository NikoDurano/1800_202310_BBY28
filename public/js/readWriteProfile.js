//Ready
//PET PROFILE CREATE/EDIT VARIBLES
/* let nameBox = document.getElementById("nameBox");
let ageBox = document.getElementById("ageBox");

let insertButton = document.getElementById("insertButton") */
//update
//PET PROFILE CREATE/EDIT UPDATE
async function updatePetProfileDoc() {
  let nameBox = document.getElementById("nameBox");
  let ageBox = document.getElementById("ageBox");

  //let insertButton = document.getElementById("insertButton")

  const user = firebase.auth().currentUser;

  const ref = db
    .collection("users")
    .doc(user.uid)
    .collection("petInfo")
    .doc(user.uid);

  ref
    .update({
      namePet: nameBox.value,
      agePet: ageBox.value,
    })
    .then(() => {
      alert("works");
      window.location.href = "tabPetProfile.html";
    })
    .catch((error) => {
      alert("error" + error);
    });
}
//insertButton.addEventListener("click", updatePetProfileDoc);

//USER PROFILE CREATE/EDIT UPDATE
function updateUserProfileDoc() {
  let userNameBox = document.getElementById("userNameBox");

  //let nextButton = document.getElementById("userSubmitBtn")

  const user = firebase.auth().currentUser;
  const ref = db.collection("users").doc(user.uid);

  if (userNameBox.value != "") {
    ref.update({
      userName: userNameBox.value,
    });
  }

  ref
    .update({})
    .then(() => {
      alert("works");
      window.location.href = "petProfileCreator1.html";
    })
    .catch((error) => {
      alert("error" + error);
    });
}
function editUserProfileDoc() {
  let userNameBox = document.getElementById("userNameBox");

  //let nextButton = document.getElementById("userSubmitBtn")

  const user = firebase.auth().currentUser;
  const ref = db.collection("users").doc(user.uid);

  if (userNameBox.value != "") {
    ref.update({
      userName: userNameBox.value,
    });
  }

  ref
    .update({})
    .then(() => {
      alert("works");
    })
    .catch((error) => {
      alert("error" + error);
    });
}

async function updatePetProfile1Doc() {
  let nameBox = document.getElementById("petNameBox");
  let ageBox = document.getElementById("ageNameBox");

  /* document.forms["weight"].weightPet.options; */
  const radioButtons2 = document.querySelectorAll('input[name="weight"]');
  const radioButtons = document.querySelectorAll('input[name="Type"]');

  const user = firebase.auth().currentUser;
  const ref = db
    .collection("users")
    .doc(user.uid)
    .collection("petInfo")
    .doc(user.uid);

  let weight;
  for (const radioButton2 of radioButtons2) {
    if (radioButton2.checked) {
      weight = radioButton2.value;

      ref.update({
        weightPet: weight,
      });
      break;
    }
  }
  let type;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      type = radioButton.value;

      ref.update({
        typePet: type,
      });
    }
  }
  if (nameBox.value != "") {
    ref.update({
      namePet: nameBox.value,
    });
  }
  if (ageBox.value != "") {
    ref.update({
      agePet: ageBox.value,
    });
  }
  ref
    .update({})
    .then(() => {
      window.location.href = "petProfileCreator2.html";
    })
    .catch((error) => {
      alert("error" + error);
    });
}

async function updatePetProfile2Doc() {
  document.forms["coat"].coatLength.options;
  document.forms["face"].flatFace.options;
  document.forms["heart"].heartProb.options;
  document.forms["lungs"].lungProb.options;
  document.forms["brain"].brainProb.options;

  //let insertButton = document.getElementById("insertButton")

  const user = firebase.auth().currentUser;

  const ref = db
    .collection("users")
    .doc(user.uid)
    .collection("petInfo")
    .doc(user.uid);

  ref
    .update({
      coatType: this.coatLength.value,
      flatFace: this.flatFace.value,
      heartProblem: this.heartProb.value,
      lungProblem: this.lungProb.value,
      brainProblem: this.brainProb.value,
    })
    .then(() => {
      alert("works");
      window.location.href = "vetProfileCreator.html";
    })
    .catch((error) => {
      alert("error" + error);
    });
}

async function updateVetProfileCreator() {
  let vetName = document.getElementById("vetNameInput");
  let vetPhone = document.getElementById("vetPhoneInput");
  let vetLocation = document.getElementById("vetLocationInput");

  const user = firebase.auth().currentUser;
  //PROBLEM CANT FIND USER ID
  const ref = db
    .collection("users")
    .doc(user.uid)
    .collection("petInfo")
    .doc(user.uid)
    .collection("vetInfo")
    .doc(user.uid);
  ref
    .update({
      nameVet: vetName.value,
      phoneNumberVet: vetPhone.value,
      addressVet: vetLocation.value,
    })
    .then(() => {
      alert("works");
      window.location.href = "tabPetProfile.html";
    })
    .catch((error) => {
      alert("error" + error);
    });
}

async function profileEdit1() {
  let nameBox = document.getElementById("petNameBox");
  let ageBox = document.getElementById("ageNameBox");

  /* document.forms["weight"].weightPet.options; */
  const radioButtons2 = document.querySelectorAll('input[name="weight"]');
  const radioButtons = document.querySelectorAll('input[name="Type"]');

  const user = firebase.auth().currentUser;
  const ref = db
    .collection("users")
    .doc(user.uid)
    .collection("petInfo")
    .doc(user.uid);

  let weight;
  for (const radioButton2 of radioButtons2) {
    if (radioButton2.checked) {
      weight = radioButton2.value;

      ref.update({
        weightPet: weight,
      });
      break;
    }
  }
  let type;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      type = radioButton.value;

      ref.update({
        typePet: type,
      });
    }
  }
  if (nameBox.value != "") {
    ref.update({
      namePet: nameBox.value,
    });
  }
  if (ageBox.value != "") {
    ref.update({
      agePet: ageBox.value,
    });
  }
  ref
    .update({})
    .then(() => {
      alert("works");
    })
    .catch((error) => {
      alert("error" + error);
    });
}

async function profileEdit2() {
  document.forms["coat"].coatLength.options;
  document.forms["face"].flatFace.options;
  document.forms["heart"].heartProb.options;
  document.forms["lungs"].lungProb.options;
  document.forms["brain"].brainProb.options;

  //let insertButton = document.getElementById("insertButton")

  const user = firebase.auth().currentUser;

  const ref = db
    .collection("users")
    .doc(user.uid)
    .collection("petInfo")
    .doc(user.uid);

  ref
    .update({
      coatType: this.coatLength.value,
      flatFace: this.flatFace.value,
      heartProblem: this.heartProb.value,
      lungProblem: this.lungProb.value,
      brainProblem: this.brainProb.value,
    })
    .then(() => {
      alert("works");
    })
    .catch((error) => {
      alert("error" + error);
    });
}

async function profileEdit3() {
  let vetName = document.getElementById("vetNameInput");
  let vetPhone = document.getElementById("vetPhoneInput");
  let vetLocation = document.getElementById("vetLocationInput");

  const user = firebase.auth().currentUser;

  const ref = db
    .collection("users")
    .doc(user.uid)
    .collection("petInfo")
    .doc(user.uid)
    .collection("vetInfo")
    .doc(user.uid);
  if (vetName.value != "") {
    ref.update({
      nameVet: vetName.value,
    });
  }
  if (vetPhone.value != "") {
    ref.update({
      phoneNumberVet: vetPhone.value,
    });
  }
  if (vetLocation.value != "") {
    ref.update({
      addressVet: vetLocation.value,
    });
  }
  ref
    .update({})
    .then(() => {
      alert("works");
    })
    .catch((error) => {
      alert("error" + error);
    });
}

