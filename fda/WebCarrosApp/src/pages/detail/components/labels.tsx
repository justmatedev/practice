import { StyleSheet, Text, View } from "react-native"
import React, { ReactNode } from "react"

interface LabelProps {
  label: string
  name?: string
}

const Label = ({ name, label }: LabelProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{label}</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

export default Label

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    color: "#444",
  },
  title: {
    color: "#000",
    fontWeight: "500",
  },
})
