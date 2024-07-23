import { addDoc, collection } from "firebase/firestore";
import { database } from "firebase/firestore";

export async function writeToDB(data, collectionName) {
  try {
    await addDoc(collection(database, collectionName), data);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
