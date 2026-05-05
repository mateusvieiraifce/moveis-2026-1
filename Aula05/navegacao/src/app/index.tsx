import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet, TextInput,  TouchableOpacity,  Image } from "react-native";
import { Link } from "expo-router";

export default function Home() {

  return (
    <View style={styles.container}>
      <Text>Seja bem vindo ao react Index</Text>

      <Image source={require("../../assets/logo.png")} style={{ width: 100, height: 100, marginVertical:20 }} />
      <TextInput placeholder="Login" style={{ borderWidth: 1, width: '80%', marginVertical: 10, padding: 5 }} />
      
      <TextInput placeholder="Senha" secureTextEntry style={{ borderWidth: 1, width: '80%', marginVertical: 10, padding: 5 }} />

      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20,}}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  branco: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

