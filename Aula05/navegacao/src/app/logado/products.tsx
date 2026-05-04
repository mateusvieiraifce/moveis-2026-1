import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Products(){
    return (<View style={styles.container}>
             <Text style={{ color:"#fff", fontWeight:"bold"  }}> Produtos</Text>  
                <Link href="/"> voltar </Link>
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
   