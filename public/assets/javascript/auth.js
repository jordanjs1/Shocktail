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

  // FIREBASE AUTH EVENT LISTENER
  // ----------------------------
  // When this page loads, this event will automatically be triggered; it checks to see if there is a user logged in to the Firebase app that's configured on line 31.
  firebase.auth().onAuthStateChanged(function (user) {

    // If there's a user logged in:
    if (user) {

      // log user info to the console
      console.log("user is signed in!");
      console.log("USER: ", user);

      // access logged in user's data
      database.ref("/" + user.uid).once("value").then(function (snapshot) {
        // log all user's info to console
        console.log(snapshot.val());
        // Set text content of header to be user's email that's stored in realtime db
        $("#user").text(snapshot.val().email);
      });

    } else {
      // if no user logged in, then redirect them back to sign in page
      window.location = "pref.html";
    }
  });

  // If #sign-out button is clicked:
  $("#sign-out").on("click", function () {

    // Execute Firebase sign out function.
    firebase.auth().signOut()
      .then(function () {
        // Sign-out successful.
      }).catch(function (error) {
        // An error happened.
      });
  })