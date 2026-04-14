import { StatusBar } from "expo-status-bar";
import { View , Text, Button, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function Home() {

    return (
       <View style={styles.container}>
         <Text>Seja bem vindo ao react Index</Text>
         <Link href="/user"> Usuarios</Link>     
         <Link href="/products"> Produtos</Link>       
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
   
