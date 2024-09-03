import React, { useState } from "react"
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native"

// Expressão regular para detectar URLs
const urlRegex = /(\b(https?:\/\/|www\.)\S+\.\S+|\b\S+\.\S{2,})/gi

const App = () => {
  const [note, setNote] = useState("")

  // Função para dividir o texto e aplicar estilos aos links
  const renderTextWithLinks = (text) => {
    // Divide o texto em partes: links e texto normal
    const parts = text.split(urlRegex)

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        // Estiliza o texto que é um link
        return (
          <Text key={index} style={styles.link}>
            {part}
          </Text>
        )
      }
      // Estiliza o texto normal
      return <Text key={index}>{part}</Text>
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite suas anotações aqui..."
        value={note}
        onChangeText={setNote}
        multiline
      />
      <ScrollView style={styles.outputContainer}>
        <Text style={styles.output}>{renderTextWithLinks(note)}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    height: 150,
  },
  outputContainer: {
    marginTop: 20,
    maxHeight: 150,
  },
  output: {
    fontSize: 16,
  },
  link: {
    textDecorationLine: "underline",
    color: "blue",
  },
})

export default App
