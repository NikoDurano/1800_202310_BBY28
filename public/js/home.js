function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            currentUser = db.collection("users").doc(user.uid);


            currentUser.get().then(userDoc=>{
                //get the user name
                var userName = userDoc.data().userName;
                console.log(userName);
                //$("#name-goes-here").text(userName); //jquery
                document.getElementById("name-goes-here").innerText=userName;
    

 

            }) 
           
            document.getElementById("name-goes-here").innerText = userName;    
            //method #2:  insert using jquery
            //$("#name-goes-here").text(userName); //using jquery
            //method #3:  insert using querySelector
            //document.querySelector("#name-goes-here").innerText = userName

        } else {
            // No user is signed in.
        }
    });
}
getNameFromAuth(); //run the function

