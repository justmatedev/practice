import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../pages/home"
import Detail from "../pages/detail"
import Favorites from "../pages/favorites"

export type StackParamList = {
  home: undefined
  detail: undefined
  favorites: undefined
}
const Stack = createNativeStackNavigator<StackParamList>()

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="favorites" component={Favorites} />
    </Stack.Navigator>
  )
}
