import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./pages/home"
import Detail from "./pages/detail"

export type StackParamList = {
  Home: undefined
  Detail: {
    nome: string
    idade: string | number
  }
}

const Stack = createNativeStackNavigator<StackParamList>()
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: "Detalhes" }}
      />
    </Stack.Navigator>
  )
}
