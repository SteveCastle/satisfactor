import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var firebaseConfig = {
  apiKey: "AIzaSyCT9zQ95wW9tTsZdnnPuuztpk9XIG6ndxU",
  authDomain: "orbital-215105.firebaseapp.com",
  databaseURL: "https://orbital-215105.firebaseio.com",
  projectId: "orbital-215105",
  storageBucket: "orbital-215105.appspot.com",
  messagingSenderId: "257796709311",
  appId: "1:257796709311:web:57c068f72331a3502c5f0a",
  measurementId: "G-FBFK159M9H"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
