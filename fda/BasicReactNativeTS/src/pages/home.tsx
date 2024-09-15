import { StatusBar } from "expo-status-bar"
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"

import { useState } from "react"
import Aluno from "../components/aluno"

interface AlunoProps {
  nome: string
  idade: string | number
}
export default function Home() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [alunos, setAlunos] = useState<AlunoProps[]>([
    {
      nome: "lucas1",
      idade: 19,
    },
    {
      nome: "lucas2",
      idade: 192,
    },
  ])

  const handleAdd = () => {
    if (!nome || !idade) {
      return
    }

    let aluno = {
      nome,
      idade,
    }

    setAlunos((values) => [...values, aluno])
    setNome("")
    setIdade("")
    setShowInput(false)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>React native</Text>

      <Pressable onPress={() => setShowInput(!showInput)}>
        <Text>{showInput ? "x" : "+"}</Text>
      </Pressable>

      {showInput && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome..."
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o Idade..."
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />
          <Pressable style={styles.button} onPress={handleAdd}>
            <Text style={{ textAlign: "center" }}>Cadastrar</Text>
          </Pressable>
        </View>
      )}

      <FlatList
        data={alunos}
        renderItem={({ item }) => <Aluno nome={item.nome} idade={item.idade} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 28,
  },
  input: {
    backgroundColor: "#ddd",
    color: "#000",
    padding: 5,
    borderRadius: 10,
    margin: 5,
  },
  button: {
    backgroundColor: "#00de00",
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
  },
})
