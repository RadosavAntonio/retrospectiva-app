// import firebase from 'firebase'
// ES Modules:
import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB3OJDI0Mkq08AzAgwUY0w0ofuT1VOE1sU",
  authDomain: "retrospective-app-2382f.firebaseapp.com",
  projectId: "retrospective-app-2382f",
  storageBucket: "retrospective-app-2382f.appspot.com",
  messagingSenderId: "477030038909",
  appId: "1:477030038909:web:a323a64040b8e412bbe014"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export const db = firebase.firestore()
// export const storage = firebase.storage()
export const ts = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const GitHubProvider = new firebase.auth.GithubAuthProvider()
