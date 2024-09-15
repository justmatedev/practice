import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { RouteProp, useRoute } from "@react-navigation/native"

type RouteDetailParams = {
  Detail: {
    nome: string
    idade: string | number
  }
}
type DetailRouteProps = RouteProp<RouteDetailParams, "Detail">

const Detail = () => {
  const route = useRoute<DetailRouteProps>()
  return (
    <View>
      <Text>Detail</Text>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Idade: {route.params?.idade}</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})
