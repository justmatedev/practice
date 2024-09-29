import { View, Text, FlatList } from "react-native"
import React, { useEffect, useState } from "react"
import CardHorizontalFood from "./food"

export interface FoodProps {
  id: string
  name: string
  price: number
  time: string
  delivery: number
  rating: number
  image: string
  restaurantId: string
}

const TrendingFoods = () => {
  const [foods, setFoods] = useState<FoodProps[]>([])

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.16.1:3000/foods")
      const data = await response.json()
      setFoods(data)
    }
    getFoods()
  }, [])

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
    />
  )
}

export default TrendingFoods
