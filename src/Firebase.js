import React, { useContext, useState, useEffect } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import * as fb from "firebase";

const FireBaseContext = React.createContext({});
export const FireBaseProvider = FireBaseContext.Provider;

// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

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
  const [prevSentiment, setPrevSentiment] = useState(0);
  const [currentSentiment, setSentiment] = useState(50);
  const firebase = useContext(FireBaseContext);
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
      setPrevSentiment(currentSentiment);
      if (prevSentiment !== currentSentiment) {
        updateFunction(currentSentiment);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSentiment, roomRef, userName, prevSentiment]);

  return [currentSentiment, setSentiment];
};

export const useAuth = () => {
  const firebase = useContext(FireBaseContext);
  const [user, initialising, error] = useAuthState(firebase.auth());
  const login = () => {
    var provider = new fb.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  const logout = () => {
    firebase.auth().signOut();
  };
  return [user, initialising, error, login, logout];
};
