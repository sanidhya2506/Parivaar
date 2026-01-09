import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDwiFkOBL4Lzm0LR33n5Y9lEkbU9obJ8sY",
    authDomain: "parivaar-5e119.firebaseapp.com",
    projectId: "parivaar-5e119",
    storageBucket: "parivaar-5e119.firebasestorage.app",
    messagingSenderId: "714328873624",
    appId: "1:714328873624:web:dd7cb9b0fd304399b7ceed",
    measurementId: "G-8T92KN5NCM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);