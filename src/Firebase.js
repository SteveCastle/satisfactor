import React, { useContext } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

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
