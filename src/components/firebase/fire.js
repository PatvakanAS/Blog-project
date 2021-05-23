import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAim4I-lC--jSQ9Nl89ozLog-7aRgI_694",
  authDomain: "blog-7387c.firebaseapp.com",
  projectId: "blog-7387c",
  storageBucket: "blog-7387c.appspot.com",
  messagingSenderId: "1031817338635",
  appId: "1:1031817338635:web:bc8eb93702efc915b3cc0e"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;