


//Ready

let userNameBox = document.getElementById("userNameBox");


let nextButton = document.getElementById("userSubmitBtn")


//update
    function updateUserProfileDoc(){
    const user = firebase.auth().currentUser;
    const ref =db.collection("users").doc(user.uid);

        ref.update({
            name:userNameBox.value,
 
        }
    )
    .then(()=>{
        alert("works");
        window.location.href ="petProfileCreator.html"
    })
    .catch((error)=>{
        alert("error" +error);
    });
    } 



    nextButton.addEventListener("click", updateUserProfileDoc);



















