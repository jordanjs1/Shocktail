// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwVVVJCmtHrHMaQ-pPqM76c81Kt4sMPEY",
    authDomain: "shocktail-9d3bd.firebaseapp.com",
    databaseURL: "https://shocktail-9d3bd.firebaseio.com",
    projectId: "shocktail-9d3bd",
    storageBucket: "shocktail-9d3bd.appspot.com",
    messagingSenderId: "1034410380423",
    appId: "1:1034410380423:web:c12a1a55ac4e8839"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// SIGN UP
// -------
// When #sign-up button is clicked:
$("#sign-up").on("click", function (event) {
    event.preventDefault();

    // get email and password values of text inputs
    var username = $("#su-username").val().trim()
    var password = $("#su-password").val().trim()


    $.post("/api/users",
        {
            username: username,
            password: password
        }).then(function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });



    // pass email and password to Firebase's sign up function
    firebase.auth().createUserWithEmailAndPassword(username, password)
        .then(function (response) {
            // response only comes if sign up succeeds
            console.log("SIGN UP: ", response);
            // redirect page to "redirect.html" file


            // When new user is created, sets their email to database at path defined by their user ID
            database.ref("/" + response.user.uid).set({
                email: response.user.email,
                password: password


            })
                .then(function () {
                    // After it's done setting to database, redirect to other page
                    window.location = "/";
                })
        })
        .catch(function (error) {
            // If email is already taken, error message indicating this will be logged to console (you could display it to the HTML instead)
            console.log(error.message);
        });
})

// SIGN IN
// -------
// When #sign-up button is clicked, pulls values of text inputs and passes them to Firebase's createUserWithEmailAndPassword function
$("#login").on("click", function (event) {
    event.preventDefault();

    // get email and password values of text inputs
    var username = $("#si-username").val().trim()
    var password = $("#si-password").val().trim()

    // pass email and password to Firebase's sign in function
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then(function (res) {
            // response only comes if sign in succeeds
            console.log("SIGN IN: ", res);
            // redirect page to "redirect.html" file
            window.location = "/pref";
        })
        .catch(function (error) {
            // Dynamically responds with appropriate error message (e.g. "Email format invalid", "Incorrect password", "User does not exist", etc.)
            console.log(error.message);
        });
})