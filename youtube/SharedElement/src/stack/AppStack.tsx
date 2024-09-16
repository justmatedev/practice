import { createSharedElementStackNavigator } from "react-navigation-shared-element"
import { AppStackParams } from "../types"
import HomeScreen from "../screens/HomeScreen"
import DetailScreen from "../screens/DetailScreen"

const App = createSharedElementStackNavigator<AppStackParams>()

export const AppStack = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="HomeScreen" component={HomeScreen} />
      <App.Screen
        name="DetailsScreen"
        component={DetailScreen}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params
          //   return [`${item.title}`]
          //   return [item.title, item.id]
          return [
            item.title,
            {
              id: item.id,
              animation: "fade",
              resize: "stretch",
              //   align: "left-top",
            },
          ]
        }}
      />
    </App.Navigator>
  )
}
