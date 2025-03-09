// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEl6rCElUOS6Cmi6k6BugIG0-WvmSq_kg",
  authDomain: "zoomo-repair-queue.firebaseapp.com",
  projectId: "zoomo-repair-queue",
  storageBucket: "zoomo-repair-queue.firebasestorage.app",
  messagingSenderId: "921129027848",
  appId: "1:921129027848:web:2191d84c49bad9e7c104bd",
  measurementId: "G-KYVVH92TPB", // Optional, can be removed if not using analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (database)
const db = getFirestore(app);

// Export Firestore for use in other components
export { db };