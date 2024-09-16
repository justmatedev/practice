import { NavigationContainer } from "@react-navigation/native"

import { AppStack } from "./src/stack/AppStack"

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}
