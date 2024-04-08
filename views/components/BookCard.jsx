import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const BookCard = ({ book }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Book Details", { bookId: book.id });
        console.log(book.id);
      }}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{book.nombre}</Text>
        <Text>Autor: {book.autor}</Text>
        <Text>Editorial: {book.editorial}</Text>
        <Text>N. Paginas: {book.numeropaginas}</Text>
        <Text>Precio: {book.precio}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    marginTop: 15,
    backgroundColor: "#fefefe",
    padding: 14,
    display: "flex",
    gap: 2,
  },
  title: {
    textAlign: "center",
    fontWeight: 500,
    marginBottom: 10,
  },
});
