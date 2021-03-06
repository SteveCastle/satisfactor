import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";

import "./index.css";
import { FireBaseProvider } from "./Firebase";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var firebaseConfig = {
  apiKey: "AIzaSyCT9zQ95wW9tTsZdnnPuuztpk9XIG6ndxU",
  authDomain: "orbital-215105.firebaseapp.com",
  databaseURL: "https://orbital-215105.firebaseio.com",
  projectId: "orbital-215105",
  storageBucket: "orbital-215105.appspot.com",
  messagingSenderId: "257796709311",
  appId: "1:257796709311:web:46ed3bc7fd5b85932c5f0a",
  measurementId: "G-STLEK73SRM"
};

const defaultProject = firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FireBaseProvider value={defaultProject}>
    <App />
  </FireBaseProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
