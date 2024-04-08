import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { getBook, removeBook } from "../controllers/BookController";
import { useNavigation } from "@react-navigation/native";

export const BookDetails = ({ route }) => {
  const [book, setBook] = useState({});
  const navigation = useNavigation();

  const { bookId } = route.params;

  const showBook = async (id, collectionName) => {
    try {
      setBook(await getBook(id, collectionName));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (bookId) {
      showBook(bookId, "books");
    }
  }, [route.params]);

  const handleDelete = async () => {
    try {
      console.log(bookId);
      removeBook("books", bookId);
      Alert.alert("Exito", "Exito al eliminar el libro");
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.nombre}</Text>
      <Text>Autor: {book.autor}</Text>
      <Text>Editorial: {book.editorial}</Text>
      <Text>Numero de paginas: {book.numeropaginas}</Text>
      <Text>Precio: {book.precio}</Text>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <Button
            title="eliminar"
            color="darkred"
            onPress={() => {
              handleDelete();
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Editar" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 19,
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 17,
  },
  buttonWrapper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  buttonContainer: {
    width: 100,
  },
});
