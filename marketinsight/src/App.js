import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ywphesVPm0JYv3fmIHTy6Dp7uzCifN4",
  authDomain: "marketinsight-c6c67.firebaseapp.com",
  projectId: "marketinsight-c6c67",
  storageBucket: "marketinsight-c6c67.appspot.com",
  messagingSenderId: "867196264404",
  appId: "1:867196264404:web:f83ff1550b82e8be524041",
  measurementId: "G-HXNKYDC346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default App;
