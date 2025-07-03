import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACwsA6qXueOqy1OcaB9R3Ew8X3KHb3UH0",
  authDomain: "notion-clone-1ed00.firebaseapp.com",
  projectId: "notion-clone-1ed00",
  storageBucket: "notion-clone-1ed00.firebasestorage.app",
  messagingSenderId: "570558943486",
  appId: "1:570558943486:web:88955e2caeaa3bc10255af",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
