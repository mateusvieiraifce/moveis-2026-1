import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

  function olaMundo(){
    Alert.alert("ola mundo" +login + senha);
  
  }
  return (
    <View style={styles.container}>
      <Text style={styles.branco}>Ola mundo</Text>
      <Text style={styles.branco}>Seja bem vindo</Text>
      
      <Text style={styles.branco}>Login</Text>
      <TextInput style={{ borderColor:"#000", width:400,
        borderWidth:1,  height:35, fontSize:20}} onChangeText={setLogin}> 
      </TextInput>

      <Text style={styles.branco}>Senha</Text>

      <TextInput style={{ borderColor:"#000", width:400,
        borderWidth:1,  height:35, fontSize:20}} onKeyPress={setSenha}> 
      </TextInput>

      <Button title='Entrar' onPress={{olaMundo}}>  </Button>

      <StatusBar style="auto" />
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

  branco:{
    color:'#000',
    fontWeight:'bold',
    fontSize:20,
  }

});
