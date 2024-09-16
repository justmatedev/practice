import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { Books } from "../constants"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackParams } from "../types"
import { SharedElement } from "react-navigation-shared-element"

type Props = NativeStackScreenProps<AppStackParams, "HomeScreen">

const Home = ({ navigation, route }: Props) => {
  const safeAreaInsets = useSafeAreaInsets()
  return (
    <SafeAreaView edges={["left", "right"]}>
      <Text>Homesad</Text>
      <FlatList
        data={Books}
        contentContainerStyle={{
          marginTop: safeAreaInsets.top,
          alignItems: "center",
          paddingBottom: safeAreaInsets.bottom * 2,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={styles.renderItem}
            onPress={() => navigation.navigate("DetailsScreen", { item })}
          >
            <SharedElement id={item.title}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </SharedElement>
            <SharedElement id={item.id}>
              <Text style={styles.title}>{item.title}</Text>
            </SharedElement>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  renderItem: {
    alignSelf: "center",
    width: Dimensions.get("screen").width * 0.6,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("screen").width * 0.5,
    height: Dimensions.get("screen").height * 0.3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
})
