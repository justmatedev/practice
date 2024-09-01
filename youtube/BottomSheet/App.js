import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"

export default function App() {
  // Defina os snap points
  const snapPoints = [10, 50, "50%"]

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Open up App.js to start working on your app!</Text>
        <BottomSheet
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: "lightblue" }}
          // enablePanDownToClose={true}
        >
          <BottomSheetView>
            <Text>Awesome 🎉</Text>
            <Button title="close" onPress={() => {}} />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
