// Import the functions you need from the SDKs you need
import * as firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj_vJI_NFbVjLde5u_od0cZAGQ9ZnH46U",
  authDomain: "fir-auth-2b924.firebaseapp.com",
  projectId: "fir-auth-2b924",
  storageBucket: "fir-auth-2b924.appspot.com",
  messagingSenderId: "1049217545472",
  appId: "1:1049217545472:web:90684dbefdb9e777aaefe5"
};


// Initialize Firebase
let app;
if (firebase.apps.length ===0){
    app= firebase.initializeApp(firebaseConfig);
} else {
    app =firebase.app()
}
const auth =firebase.auth()
export {auth};
