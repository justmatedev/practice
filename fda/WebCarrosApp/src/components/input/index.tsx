import { StyleSheet, TextInput, TextInputProps } from "react-native"
import React from "react"

interface InputProps extends TextInputProps {}

const Input = ({ ...rest }: InputProps) => {
  return <TextInput style={styles.input} {...rest} />
}

export default Input

const styles = StyleSheet.create({
  input: {
    backgroundColor: "tranparent",
    borderWidth: 1,
    height: 40,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
})
