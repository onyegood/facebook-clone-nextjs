import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKuVmuZUeQ8W4L7S8bn6ZZvpFH8bMF2Y8",
  authDomain: "facebook-clone-5afba.firebaseapp.com",
  projectId: "facebook-clone-5afba",
  storageBucket: "facebook-clone-5afba.appspot.com",
  messagingSenderId: "205455531005",
  appId: "1:205455531005:web:54cd03803a9bce8f1fd794"
};

const app = !firebase.getApps.length ? firebase.initializeApp(firebaseConfig) : firebase.getApp();
const db = app.firestore();

const storage = firebase.storage();

export { db, storage }
