import AsyncStorage from "@react-native-async-storage/async-storage"
import { CarProps } from "../types/car.type"

const key = "@webcars"

const useStorage = () => {
  const getItem = async () => {
    try {
      const cars = await AsyncStorage.getItem(key)
      return (cars && JSON.parse(cars)) || []
    } catch (error) {
      console.log(error)
      return []
    }
  }
  const saveItem = async (newCar: CarProps) => {
    try {
      let cars = await getItem()

      let findCar = cars.find((car: { id: string }) => car.id === newCar.id)

      if (findCar) {
        return
      }

      cars.push(newCar)

      await AsyncStorage.setItem(key, JSON.stringify(cars))
      console.log("carro salvo")
    } catch (error) {
      console.log(error)
    }
  }
  const removeItem = async (id: string): Promise<CarProps[] | []> => {
    try {
      let cars = await getItem()

      let updatedCarList = cars.filter((car: { id: string }) => {
        return car.id !== id
      })

      await AsyncStorage.setItem(key, JSON.stringify(updatedCarList))
      return updatedCarList
    } catch (error) {
      console.log(error)
      return []
    }
  }

  return {
    getItem,
    saveItem,
    removeItem,
  }
}

export default useStorage
