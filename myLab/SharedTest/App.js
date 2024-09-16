import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./src/screens/Home"
import CarDetails from "./src/screens/CarDetails"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
