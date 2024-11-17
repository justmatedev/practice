import { ScrollView, Text, View } from "react-native"
import Header from "../components/header"
import Constants from "expo-constants"
import Banner from "../components/banner"
import Search from "../components/search"
import Section from "../components/section"
import TrendingFoods from "../components/trending"
import Restaurants from "../components/restaurants"
import RestaurantVerticalList from "../components/list"

// https://youtu.be/aABUs_L4AZg
// npx json-server db.json

const statusBarHeight = Constants.statusBarHeight
export default function Index() {
  return (
    <ScrollView
      className="bg-slate-200 flex-1"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log("cliclo no veja mais")}
        size="text-2xl"
      />
      <TrendingFoods />

      <Section
        name="Famosos no DevFood"
        label="Veja mais"
        action={() => console.log("cliclo no veja mais2")}
        size="text-2xl"
      />
      <Restaurants />

      <Section
        name="Restaurants"
        label="Veja todos"
        action={() => console.log("cliclo no veja mais3")}
        size="text-xl"
      />
      <RestaurantVerticalList />
    </ScrollView>
  )
}
