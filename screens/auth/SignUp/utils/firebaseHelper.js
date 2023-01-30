// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const getFirebaseApp =()=>{
    const firebaseConfig = {
        apiKey: "AIzaSyBcMouh0NwCzvUC5RNehMNc9FBdQEByPo0",
        authDomain: "mbplanify-de5e9.firebaseapp.com",
        projectId: "mbplanify-de5e9",
        storageBucket: "mbplanify-de5e9.appspot.com",
        messagingSenderId: "845275013758",
        appId: "1:845275013758:web:4ecf3fcc273fc3b2fa2e2f",
      };
    return initializeApp(firebaseConfig);      
}