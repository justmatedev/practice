import { StatusBar } from "expo-status-bar"
import React from "react"
import { Text, View } from "react-native"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center red">
      <StatusBar style="auto" />
      <Text className="bg-green-400 rounded-md p-2 shadow">
        Open up App.js to start working on your app!
      </Text>
    </View>
  )
}
