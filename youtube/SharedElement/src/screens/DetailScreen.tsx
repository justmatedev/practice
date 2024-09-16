import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackParams } from "../types"
import { SharedElement } from "react-navigation-shared-element"

type Props = NativeStackScreenProps<AppStackParams, "DetailsScreen">

const DetailScreen = ({ navigation, route }: Props) => {
  const { item } = route.params
  return (
    <View>
      <SharedElement id={item.title}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </SharedElement>
      <SharedElement id={item.id}>
        <Text onPress={navigation.goBack} style={styles.text}>
          {item.title}
        </Text>
      </SharedElement>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("screen").width,
    aspectRatio: "1/1",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
})
