import React, { useContext, useState, useEffect } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import * as fb from "firebase";

const FireBaseContext = React.createContext({});
export const FireBaseProvider = FireBaseContext.Provider;

export const useRoom = id => {
  const firebase = useContext(FireBaseContext);
  const [value, loading, error] = useDocument(
    firebase
      .firestore()
      .collection("rooms")
      .doc(id),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );
  return [value, loading, error];
};

export const useRooms = () => {
  const firebase = useContext(FireBaseContext);
  const [value, loading, error] = useCollection(
    firebase
      .firestore()
      .collection("rooms")
      .orderBy("name"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );
  return [value, loading, error];
};

export const useRecordSentiment = id => {
  const [currentSentiment, setSentiment] = useState(50);
  const firebase = useContext(FireBaseContext);
  console.log(firebase.auth().currentUser);
  const userName = firebase.auth().currentUser.uid;

  const roomRef = firebase
    .firestore()
    .collection("rooms")
    .doc(id);

  useEffect(() => {
    const updateFunction = v =>
      roomRef.update({
        [`people.${userName}.name`]: "Mr Name",
        [`people.${userName}.sentiments`]: fb.firestore.FieldValue.arrayUnion({
          value: v,
          time: new Date()
        })
      });
    const interval = setInterval(() => {
      updateFunction(currentSentiment);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSentiment, roomRef, userName]);

  return [currentSentiment, setSentiment];
};

export const useAuth = () => {
  const firebase = useContext(FireBaseContext);
  const [user, initialising, error] = useAuthState(firebase.auth());
  const login = () => {
    firebase.auth().signInWithEmailAndPassword("test@test.com", "password");
  };
  const logout = () => {
    firebase.auth().signOut();
  };
  return [user, initialising, error, login, logout];
};
