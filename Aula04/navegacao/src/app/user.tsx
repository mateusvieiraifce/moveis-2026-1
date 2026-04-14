import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function User(){
    return (<View style={styles.container}>
             <Text style={{ color:"#fff", fontWeight:"bold"  }}> Usuario</Text>  
                <Link href="/products"> Produtos </Link>
           </View>
         )

} 

const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: 'red',
       alignItems: 'center',
       justifyContent: 'center',
       color:"#fff"
     },
   });
   