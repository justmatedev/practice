import { FlatList, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { CarImageProps } from "../../../types/car.type"
import Banner from "./banner"

interface BannerListProps {
  images: CarImageProps[]
  handleOpenImage: (imageUrl: string) => void
}

const BannerList = ({ images, handleOpenImage }: BannerListProps) => {
  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleOpenImage(item.url)}
        >
          <Banner url={item.url} />
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default BannerList

const styles = StyleSheet.create({})
