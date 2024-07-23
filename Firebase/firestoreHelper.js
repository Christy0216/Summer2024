import { addDoc, deleteDoc, setDoc, doc, collection } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    const docId = await addDoc(collection(database, collectionName), data);
    console.log(docId);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function deleteFromDB(id, collectionName) {
  try {
    await deleteDoc(doc(database, collectionName, id));
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

export async function addWarningToGoal(id, collectionName) {
  try {
    await setDoc(
      doc(database, collectionName, id),
      {
        warning: true,
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error updating document with warning: ", error);
  }
}
