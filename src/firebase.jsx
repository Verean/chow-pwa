import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBpejbIFGJQRNt1SMv2I6WjKFjmqbwOfzA",
    authDomain: "chow-pwa.firebaseapp.com",
    databaseURL: "https://chow-pwa.firebaseio.com",
    projectId: "chow-pwa",
    storageBucket: "",
    messagingSenderId: "109026742168"
  };
  var fire = firebase.initializeApp(config);
  export default fire;