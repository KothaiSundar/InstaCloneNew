
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCpiHjUTKXaA-C29SKRNXvKshzudXn-1jw",
  authDomain: "instagram-clone-34621.firebaseapp.com",
  projectId: "instagram-clone-34621",
  storageBucket: "instagram-clone-34621.appspot.com",
  messagingSenderId: "82357130044",
  appId: "1:82357130044:web:454af6eb08a92ffaab8439"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth();