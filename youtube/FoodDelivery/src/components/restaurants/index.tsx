import { View, Text, FlatList } from "react-native"
import React, { useEffect, useState } from "react"
import RestaurantItem from "./horizontal"

export interface RestaurantsProps {
  id: string
  name: string
  image: string
}

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.16.1:3000/restaurants")
      const data = await response.json()
      setRestaurants(data)
    }
    getFoods()
  }, [])
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
    />
  )
}

export default Restaurants
