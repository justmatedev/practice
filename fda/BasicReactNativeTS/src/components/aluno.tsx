import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamList } from "../routes"

interface AlunoProps {
  nome: string
  idade: string | number
}

const Aluno = ({ nome, idade }: AlunoProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Detail", { nome: nome, idade: idade })
      }
    >
      <Text>Bem vindo: {nome}</Text>
      <Text>idade: {idade}</Text>
    </Pressable>
  )
}

export default Aluno

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
})
