import { Link, router, useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native"

import { useEffect, useState } from "react";
import api from "../../../service/api";

export default function UpdateProdutcts() {

  const [idTela, setIdTela] = useState();
  const [produtos, setProdutos] = useState()
  const [preco, setPreco] = useState("")
  const [descricao, setDescricao] = useState("")
  const [nome, setNome] = useState("")
  const navigate = useRouter();

 const { id } = useLocalSearchParams()

  async function loadData() {
    
    if (id == -1){
      setProdutos(null);
      setPreco("")
      setDescricao("")
      setNome("")
      return;
    }
    api.get(`produto/byid/${id}`).then(
      (response) => {
        setProdutos(response.data.produtos);
        setPreco(response.data.produtos.preco.toString())
        setDescricao(response.data.produtos.descricao)
        setNome(response.data.produtos.nome)
        setIdTela(response.data.produtos.id);
      }
    ).catch((error) => {
      console.log(error)
    })


  }


  useEffect(() => {
    loadData();
  }, [id])
  

  async function updateProduto(){

    const body = {
      nome: nome,
      descricao: descricao,
      preco: parseFloat(preco)
    }
    if (id == -1){
      api.post(`produto/create`,JSON.stringify(body)).then(
        (response)=>{
          Alert.alert("IFCE","Produto criado com sucesso!!")
          console.log(response.data.produto.id)
         navigate.replace("/logado/produto/"+response.data.produto.id)
        }
      ).catch((error)=>{
        Alert.alert("IFCE","Erro ao criar o produto!!")
        console.log(error)
      })  
      return;
    }
    else {
    api.post(`produto/update/${id}`,JSON.stringify(body)).then(
      (response)=>{
        Alert.alert("IFCE","Produto atualizado com sucesso!!")
        navigate.replace("/logado/produto/"+id)
      }
    ).catch((error)=>{
      Alert.alert("IFCE","Erro ao atualizar o produto!!")
      console.log(error)
    })  
    }
  } 
 
  
  return (<View style={styles.container}>


    <Text style={{ color: "#000", fontWeight: "bold" }}> Produtos {id}</Text>
    <Link href="/logado/produto/1"> voltar </Link>
    <Text style={{ color: "#000", fontWeight: "bold" }}> Nome</Text>
    <TextInput style={{ color: "#000", fontWeight: "bold", borderColor: "#000", borderWidth: 1, width: '80%' }} value={nome} 
    onChangeText={(text)=>{
      setNome(text)
    }} />
    

    <Text style={{ color: "#000", fontWeight: "bold" }}> Descrição </Text>
    <TextInput style={{ color: "#000", fontWeight: "bold", borderColor: "#000", borderWidth: 1, width: '80%' }} value={descricao} 
    onChangeText={(text)=>{
      setDescricao(text)
    }} />

    <Text style={{ color: "#000", fontWeight: "bold" }}> Preço:</Text>

    <TextInput style={{ color: "#000", fontWeight: "bold", borderColor: "#000", borderWidth: 1, width: '80%' }} value={preco} 
    onChangeText={(text)=>{
      setPreco(text)
    }} />
    
    <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10 }} onPress={()=>{
        updateProduto();
    }} >
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20,}}>Salvar</Text>
      </TouchableOpacity>

       <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, margin: 10 }} onPress={()=>{
        router.navigate("/logado/produto/"+id);
    }} >
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20,}}>Cancelar</Text>
      </TouchableOpacity>

  </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    color: "#000"
  },
});
