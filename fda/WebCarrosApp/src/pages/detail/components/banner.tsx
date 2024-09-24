import { Dimensions, Image, StyleSheet, View } from "react-native"
import React from "react"

const { width: widthScreen } = Dimensions.get("window")

const Banner = ({ url }: { url: string }) => {
  return (
    <View>
      <Image source={{ uri: url }} style={styles.cover} resizeMode="cover" />
    </View>
  )
}

export default Banner

export function BannerLoading() {
  return <View style={styles.loading}></View>
}

const styles = StyleSheet.create({
  cover: {
    width: widthScreen / 1.15,
    height: 330,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 8,
    marginTop: 8,
  },
  loading: {
    width: widthScreen - 16,
    height: 330,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: "#ddd",
  },
})
