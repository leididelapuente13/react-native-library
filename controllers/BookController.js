import { createBook, deleteBook, readBook, readBooks } from "../models/firebase";

const addBook = async (collectionName, data)=>{
    await createBook(collectionName, data);
}

const getBooks = async (collectionName)=>{
    return await readBooks(collectionName);
}

const getBook = async (id, collectionName)=>{
    return await readBook(id, collectionName);
}

const removeBook = async(id, collectionName)=>{
    await deleteBook(collectionName, id);
}

export {addBook, getBooks, getBook, removeBook}