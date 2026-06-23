import { db } from "../../../config/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const getCategories = async () => {
  const snapshot = await getDocs(collection(db, "categories"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};