import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyByzj22IndmPDTOuoESK720kFVa25GaKWI",
  authDomain: "sreez-db-3025d.firebaseapp.com",
  databaseURL: "https://sreez-db-3025d.firebaseio.com",
  projectId: "sreez-db-3025d",
  storageBucket: "sreez-db-3025d.appspot.com",
  messagingSenderId: "169535448469",
  appId: "1:169535448469:web:108e3aad32792acee8029c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
