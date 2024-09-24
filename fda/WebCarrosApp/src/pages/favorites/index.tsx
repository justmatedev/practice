import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParamList } from "../../routes"
import { CarProps } from "../../types/car.type"
import CarItem from "../../components/carlist"
import useStorage from "../../hooks/useStorage"

const Favorites = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()

  const [cars, setCars] = useState<CarProps[]>([])
  const { getItem, removeItem } = useStorage()
  const isFocused = useIsFocused()

  useEffect(() => {
    async function loadFavoriteCars() {
      const listCars = await getItem()
      setCars(listCars)
    }
    loadFavoriteCars()
  }, [useIsFocused])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#000" />
        </Pressable>
        <Text style={styles.title}>Meus Favoritos</Text>
      </View>

      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarItem data={item} widthScreen="100%" />}
        contentContainerStyle={{ paddingBottom: 14 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5f8",
    paddingHorizontal: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
  },
  list: {
    flex: 1,
    marginTop: 4,
    paddingTop: 14,
  },
})
