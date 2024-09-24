import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import React from "react"

interface ModalBannerProps {
  closeModal: () => void
  imageUrl: string
}

const ModalBanner = ({ imageUrl, closeModal }: ModalBannerProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.buttonText}>Fechar</Text>
      </Pressable>
      <TouchableWithoutFeedback>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default ModalBanner

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.9)",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeButton: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingHorizontal: 14,
    position: "absolute",
    top: 100,
    zIndex: 99,
    borderRadius: 4,
  },
  buttonText: { fontSize: 16 },
})
