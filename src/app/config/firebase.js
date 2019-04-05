import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRlRx89_sSvvMIMSlZ8TyS0mg5QBMICxU",
    authDomain: "event-236515.firebaseapp.com",
    databaseURL: "https://event-236515.firebaseio.com",
    projectId: "event-236515",
    storageBucket: "event-236515.appspot.com",
    messagingSenderId: "286076729459"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;