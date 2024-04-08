import { ScrollView } from "react-native";
import { BookCard } from "./BookCard";
import { StyleSheet } from "react-native";
import { getBooks } from "../../controllers/BookController";
import { useEffect, useState } from "react";

export const BookList = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBoooks = async ()=>{
        try {
            const booksList = await getBooks('books');
            setBooks(booksList);
        } catch (error) {
            console.error(error); 
        }
    }
    fetchBoooks();
  }, [books]);
  return (
    <ScrollView style={styles.container}>
      {books && books.map((book) => <BookCard book={book} key={book.id} />)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
