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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
