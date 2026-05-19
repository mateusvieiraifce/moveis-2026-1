import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  function teste(){
   Alert.alert("ola mundo") 
  }
  return (
    <View style={styles.container}>
      <Text>Seja bem vindo ao react</Text>
      <Button title='entrar' onPress={teste}></Button>
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
});
