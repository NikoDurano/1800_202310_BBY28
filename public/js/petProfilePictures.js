var ImageFile;
function listenFileSelect() {
      // listen for file selection
      var fileInput = document.getElementById("petPic"); // pointer #1
      const image = document.getElementById("petPicHere"); // pointer #2

			// When a change happens to the File Chooser Input
      fileInput.addEventListener('change', function (e) {
          ImageFile = e.target.files[0];   //Global variable
          var blob = URL.createObjectURL(ImageFile);
          image.src = blob; // Display this image
      })
}
listenFileSelect();

var test =  document.getElementById("petPic"); 
test.addEventListener('change',function(){

    alert ("SAVE POST is triggered");
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
                console.log("Post document added!");
                uploadPic(user.uid);

        } else {
            // No user is signed in.
                          console.log("Error, no user signed in");
        }
    });


})
/* function savePost() {
    alert ("SAVE POST is triggered");
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
                console.log("Post document added!");
                uploadPic(user.uid);

        } else {
            // No user is signed in.
                          console.log("Error, no user signed in");
        }
    });
} */

function uploadPic(postDocID) {
    console.log("inside uploadPic " + postDocID);
    var storageRef = storage.ref("images/pets/" + postDocID + ".jpg");
    const user = firebase.auth().currentUser;

    storageRef.put(ImageFile)   //global variable ImageFile
       
                   // AFTER .put() is done
        .then(function () {
            console.log('Uploaded to Cloud Storage.');
            storageRef.getDownloadURL()

                 // AFTER .getDownloadURL is done
                .then(function (url) { // Get URL of the uploaded file
                    console.log("Got the download URL.");
                    db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid).update({
                            "picPet": url // Save the URL into users collection
                        })

                         // AFTER .update is done
                        .then(function () {
                            console.log('Added pic URL to Firestore.');
                        })
                })
        })
        .catch((error) => {
             console.log("error uploading to cloud storage");
        })
}


function petPic(){
    // to check if the user is logged in:
    firebase.auth().onAuthStateChanged(user =>{
        if (user){
           console.log(user.uid); // let me to know who is the user that logged in to get the UID
           currentuser = db.collection("users").doc(user.uid).collection("petInfo").doc(user.uid);
            
           currentuser.get().then(userDoc=>{
               //get the user name
                var pic= document.getElementById("petPicHere");
                var pet = userDoc.data().picPet
               //$("#name-goes-here").text(userName); //jquery
               pic.src = pet;


           }) 
       }    
    })
}
petPic();
