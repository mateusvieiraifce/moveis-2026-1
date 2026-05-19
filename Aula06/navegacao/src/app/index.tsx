import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet, TextInput,  TouchableOpacity,  Image, Alert } from "react-native";
import { Link, useRouter } from "expo-router";
import api from "./service/api";
import { useState } from "react";
export default function Home() {

  const [user,setUser] = useState("")
  const [pass,setPass] = useState("");

  const router = useRouter();
  async function login(){
    
    const body = {
      "email":user,
      "senha":pass
    }

    const resp = api.post("usuario/login",JSON.stringify(body)).then( (respose)=>{
        console.log(respose.data.token);
        Alert.alert("IFCE","LOGIN SUCSSO!!")
        router.replace("/logado")

    } ).catch((error)=>{
      Alert.alert("IFCE","erro ao fazer o login")
      console.log(error);

    })

    
  }

  return (
    <View style={styles.container}>
      <Text>Seja bem vindo ao react Index</Text>

      <Image source={require("../../assets/logo.png")} style={{ width: 100, height: 100, marginVertical:20 }} />
      <TextInput placeholder="Login" style={{ borderWidth: 1, width: '80%', marginVertical: 10, padding: 5 }} onChangeText={setUser} />
      
      <TextInput placeholder="Senha" secureTextEntry style={{ borderWidth: 1, width: '80%', marginVertical: 10, padding: 5 }} onChangeText={setPass} />

      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }} onPress={login} >
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

