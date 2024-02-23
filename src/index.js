import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PopUp from "./components/PopUp";
import Header from "./components/Header";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeG7BWiXXRh_qo8T6ligUCDIJQz4xibuM",
  authDomain: "mohamedsefyaniportfolio.firebaseapp.com",
  projectId: "mohamedsefyaniportfolio",
  storageBucket: "mohamedsefyaniportfolio.appspot.com",
  messagingSenderId: "459317818195",
  appId: "1:459317818195:web:78d309dbd9c4444b4867a6",
  measurementId: "G-0698RGWW7G",
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <PopUp />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
