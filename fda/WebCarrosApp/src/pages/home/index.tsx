import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useCallback, useEffect, useState } from "react"
import Header from "../../components/header"
import Input from "../../components/input"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../../services/firebaseConnection"
import { CarProps } from "../../types/car.type"
import CarItem from "../../components/carlist"

const Home = () => {
  const [searchInput, setSearchInput] = useState("")
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCars()
  }, [])

  const loadCars = async () => {
    const carsRef = collection(db, "cars")
    const queryRef = query(carsRef, orderBy("created", "desc"))

    getDocs(queryRef).then((snapshot) => {
      let listCars = [] as CarProps[]

      snapshot.forEach((doc) => {
        listCars.push({
          id: doc.id,
          name: doc.data().name,
          year: doc.data().year,
          city: doc.data().city,
          km: doc.data().km,
          price: doc.data().price,
          uid: doc.data().uid,
          images: doc.data().images,
        })
      })

      setCars(listCars)
      setLoading(false)
    })
  }

  const debounce = (func: (...args: string[]) => void, delay: number) => {
    let timeout: NodeJS.Timeout | null = null

    return (...args: string[]) => {
      if (timeout) {
        clearInterval(timeout)
      }
      timeout = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }

  const handleInputChange = (text: string) => {
    setSearchInput(text)
    delayedApiCall(text)
  }

  const delayedApiCall = useCallback(
    debounce(async (newText: string) => fetchSearchCar(newText), 800),
    []
  )

  const fetchSearchCar = async (newText: string) => {
    if (newText === "") {
      await loadCars()
      setSearchInput("")
      return
    }
    setCars([])
    const q = query(
      collection(db, "cars"),
      where("name", ">=", newText.toUpperCase()),
      where("name", "<=", newText.toUpperCase() + "\uf8ff")
    )

    const querySnapshot = await getDocs(q)
    let listcars = [] as CarProps[]
    querySnapshot.forEach((doc) => {
      listcars.push({
        id: doc.id,
        name: doc.data().name,
        year: doc.data().year,
        km: doc.data().km,
        price: doc.data().price,
        uid: doc.data().uid,
        city: doc.data().city,
        images: doc.data().images,
      })
    })
    setCars(listcars)
  }

  return (
    <>
      <Header />

      <View style={styles.container}>
        <View style={styles.inputArea}>
          <Input
            placeholder="Procurando algum carro?..."
            value={searchInput}
            onChangeText={(text) => handleInputChange(text)}
          />
        </View>

        {loading && (
          <ActivityIndicator
            style={{ marginTop: 14 }}
            size="large"
            color="#000"
          />
        )}

        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarItem
              data={item}
              widthScreen={cars.length <= 1 ? "100%" : "49%"}
            />
          )}
          style={styles.list}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingBottom: 14 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f5f8",
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
    alignItems: "center",
  },
  inputArea: {
    width: "100%",
    marginTop: 14,
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  list: {
    flex: 1,
    marginTop: 4,
    paddingTop: 14,
  },
})
