import { useFirebaseApp, useFirestoreCollection } from "reactfire";
import "firebase/performance";

export const useRooms = () => {
  const firebaseApp = useFirebaseApp();
  // create a document reference
  const roomRef = firebaseApp.firestore().collection("rooms");

  // subscribe to the doc. just one line!
  return useFirestoreCollection(roomRef);
};

export const usePeople = () => {
  const firebaseApp = useFirebaseApp();
  // create a document reference
  const peopleRef = firebaseApp.firestore().collection("people");

  // subscribe to the doc. just one line!
  return useFirestoreCollection(peopleRef);
};

export const useSentiment = () => {
  const firebaseApp = useFirebaseApp();
  // create a document reference
  const sentimentRef = firebaseApp.firestore().collection("sentiment");

  // subscribe to the doc. just one line!
  return useFirestoreCollection(sentimentRef);
};
