import firebase from "firebase";
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyADDZlV_0uIea8l7vnXUQTCcglIGsYj1_8",
  authDomain: "auth-test-b4594.firebaseapp.com",
  databaseURL: "https://auth-test-b4594.firebaseio.com",
  projectId: "auth-test-b4594",
  storageBucket: "auth-test-b4594.appspot.com",
  messagingSenderId: "218485155605"
};
const fire = firebase.initializeApp(config);
export default fire;
