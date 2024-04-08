import { useState } from "react";
import { Button, ScrollView, Text, TextInput, View, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { addBook } from "../controllers/BookController";

export const BookManagement = () => {

  const navigation = useNavigation();

  const initialState = {
    nombre: "",
    autor: "",
    editorial: "",
    numeropaginas: "",
    precio: "",
  };

  const [state, setState] = useState(initialState);

  const handleOnChange = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveBook = async () => {
    try {
      await addBook('books', {...state})
      setState(initialState);
      Alert.alert("Exito", "Libro guardado exitosamente");
      navigation.navigate('Home')
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agregar Libro</Text>
      <View>
        <TextInput
          placeholder="nombre"
          style={styles.input}
          onChangeText={(value) => {
            handleOnChange(value, "nombre");
          }}
          value={state.nombre}
        />
      </View>
      <View>
        <TextInput
          placeholder="autor"
          style={styles.input}
          onChangeText={(value) => {
            handleOnChange(value, "autor");
          }}
          value={state.autor}
        />
      </View>
      <View>
        <TextInput
          placeholder="editorial"
          style={styles.input}
          onChangeText={(value) => {
            handleOnChange(value, "editorial");
          }}
          value={state.editorial}
        />
      </View>
      <View>
        <TextInput
          placeholder="numero de paginas"
          style={styles.input}
          onChangeText={(value) => {
            handleOnChange(value, "numeropaginas");
          }}
          value={state.numeropaginas}
        />
      </View>
      <View>
        <TextInput
          placeholder="precio"
          style={styles.input}
          onChangeText={(value) => {
            handleOnChange(value, "precio");
          }}
          value={state.precio}
        />
      </View>
      <View>
        <Button title="Enviar" style={styles.button} onPress={saveBook} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 20,
    gap: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
    borderColor: "lightgrey",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 10,
    outlineColor: "transparent",
    outlineStyle: "none",
  },
});
