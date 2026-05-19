import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native"

import { useEffect, useState } from "react";
import api from "../../../service/api";

export default function Products() {

  const [idTela, setIdTela] = useState();
  const [produtos, setProdutos] = useState([])

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
  }, [])

  const { id } = useLocalSearchParams()
 
  return (<View style={styles.container}>


    <Text style={{ color: "#fff", fontWeight: "bold" }}> Produtos {id}</Text>
    <Link href="/"> voltar </Link>
    {produtos.map((item) => (
      <Text key={item.id}>{item.id} - {item.nome}
      
      </Text>
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
