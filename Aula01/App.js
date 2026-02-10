import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import  { useState } from "react";

export default function App() {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function handleButtonPress() {
  
    const alturaEmMetros = parseFloat(altura) / 100; // Convertendo cm para metros
    const imc = parseFloat(peso) / (alturaEmMetros * alturaEmMetros);
    alert("IMC: "+ imc.toFixed(2));
}
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Peso (Kg)</Text>
      <TextInput  keyboardType="number-pad"  style={styles.input} placeholder="Digite o Peso aqui em KG" onChangeText={setPeso}>
      </TextInput>
      <Text style={styles.text}> Altura(cm)</Text>
      <TextInput keyboardType="number-pad"  style={styles.input} placeholder="Digite a altura aqui em cm" onChangeText={setAltura}>
      </TextInput>

      
      <Button title="Calcular" 
      onPress={handleButtonPress} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 33, 153, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  text:{fontSize: 20, fontWeight: 'bold'},
  input:{
    backgroundColor:"#fff", 
        color: "#000",
        width: "95%",
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
  }
});
