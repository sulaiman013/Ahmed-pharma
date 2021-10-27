import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitialization = () => {
    return initializeApp(firebaseConfig);
};

export default firebaseInitialization;