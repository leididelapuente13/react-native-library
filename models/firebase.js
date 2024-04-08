// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKMmyH-RhvnxaSZTHl5J7nX0zjm5Dirdk",
  authDomain: "library-42d55.firebaseapp.com",
  projectId: "library-42d55",
  storageBucket: "library-42d55.appspot.com",
  messagingSenderId: "1007673308539",
  appId: "1:1007673308539:web:c442d089cb3f47babcf9de",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const createBook = async (collectionName, data) => {
  await addDoc(collection(db, collectionName), data);
};

const readBooks = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));

  const books = [];

  querySnapshot.forEach((book) => {
    books.push({ id: book.id, ...book.data() });
  });

  return books;
};

const readBook = async (id, collectionName)=>{
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
  return docSnap.data();
}

const deleteBook = async (id, collectionName)=>{
  await deleteDoc(doc(db, collectionName, id));
}

export { createBook, readBooks, readBook, deleteBook};
