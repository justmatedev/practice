import {
  DimensionValue,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"
import { CarProps } from "../../types/car.type"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamList } from "../../routes"

interface CarItemProps {
  data: CarProps
  widthScreen: DimensionValue
}

const CarItem = ({ data, widthScreen }: CarItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()

  const handleNavigate = () => {
    navigation.navigate("detail", { id: data.id })
  }

  return (
    <Pressable
      style={[styles.container, { width: widthScreen }]}
      onPress={handleNavigate}
    >
      <Image
        style={styles.cover}
        source={{ uri: data.images[0].url }}
        resizeMode="cover"
      />

      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.text}>
        {data.year} - {data.km} Km
      </Text>
      <Text style={[styles.title, { marginTop: 14 }]}>{data.price}</Text>

      <View style={styles.divisor}></View>
      <Text style={[styles.text, { marginTop: 4 }]}>{data.city}</Text>
    </Pressable>
  )
}

export default CarItem

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 4,
    borderRadius: 4,
    marginBottom: 14,
  },
  cover: {
    width: "100%",
    height: 140,
    borderRadius: 4,
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 6,
  },
  text: {
    marginBottom: 4,
    fontSize: 12,
  },
  divisor: {
    width: "100%",
    height: 1,
    backgroundColor: "#d9d9d9",
  },
})
