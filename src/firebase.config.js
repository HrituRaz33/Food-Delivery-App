import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-NotY3QqzzpQ0dAQ8x7qFjAxmtvypMBg",
    authDomain: "food-delivery-app-9c6ee.firebaseapp.com",
    databaseURL: "https://food-delivery-app-9c6ee-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-9c6ee",
    storageBucket: "food-delivery-app-9c6ee.appspot.com",
    messagingSenderId: "882368373357",
    appId: "1:882368373357:web:54a08a7aa621f4775c5564"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage }