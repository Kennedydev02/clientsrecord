import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBB_7co2nbGc14Ft8zX5dLjClBCYWXtuMY",
  authDomain: "your-project-id.firebaseapp.com", // You'll need to add your Firebase project details
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app; 