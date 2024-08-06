import {
  addDoc,
  deleteDoc,
  setDoc,
  doc,
  collection,
  getDocs,
} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    const docId = await addDoc(collection(database, collectionName), data);
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

export async function readAllDocs(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(database, collectionName));
    let newArray = [];
    if (!querySnapshot.empty) {
      querySnapshot.forEach((docSnapshot) => {
        newArray.push(docSnapshot.data());
      });
      console.log("All documents: ", newArray);
      return newArray;
    }
  } catch (error) {
    console.error("Error reading all documents: ", error);
  }
}
