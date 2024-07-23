import { addDoc, deleteDoc, doc, collection } from "firebase/firestore";
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
