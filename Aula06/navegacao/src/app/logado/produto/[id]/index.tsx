import { Link, useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"

import { useEffect, useState } from "react";
import api from "../../../service/api";

export default function Products() {
  const { id } = useLocalSearchParams()

  const [idTela, setIdTela] = useState();
  const [produtos, setProdutos] = useState([])
  const navigate = useRouter();


  async function deleteProduto(idProduto){
    let rota = `produto/delete/${idProduto}`;
    console.log(rota);
    api.get(rota).then(
      (response)=>{
        Alert.alert("IFCE","Produto excluído com sucesso!!")
        navigate.replace("/logado/produto/"+idProduto)
      }
    ).catch((error)=>{
      Alert.alert("IFCE","Erro ao excluir o produto!!")
      console.log(error)
    })
  }
  async function loadData() {

    api.get("produto/all").then(
      (response) => {
        setProdutos(response.data.produto);
      }
    ).catch((error) => {
      console.log(error)
    })


  }

  useEffect(() => {

    loadData();
  }, [id])

  
 
  
  return (<View style={styles.container}>


    <Text style={{ color: "#fff", fontWeight: "bold" }}> Produtos {id}</Text>
    <Link href="/logado/"> voltar </Link>
    <Link href={`/logado/produto/${id}/new`}> novo </Link>
    {produtos.map((item) => (
      <View key={item.id}>
        
        <TouchableOpacity onPress={(a)=>{

          let rota = `/logado/produto/${item.id}/update`
          console.log(rota)
          navigate.navigate(rota)

        }} onLongPress={(b)=>{
          Alert.alert("IFCE","Deseja excluir o item? ",

            [
              { text: "Confirmar", onPress:()=>{

                deleteProduto(item.id)
              }},
              { text: "Cancelar", onPress:()=>{
                
              }},
              
            ],
          )  
        }} >
        <Text>{item.nome}</Text>  
        </TouchableOpacity>
      </View>      
      
    )
    )}

  </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff"
  },
});
