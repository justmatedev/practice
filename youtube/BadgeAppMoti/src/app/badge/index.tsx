import {
  Text,
  View,
  ImageBackground,
  Image,
  useWindowDimensions,
} from "react-native"
import { styles } from "./styles"

import { MotiView } from "moti"

export function Badge() {
  const dimensions = useWindowDimensions()
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.motiView}
        from={{
          opacity: 0,
          translateY: -dimensions.height,
          rotateZ: "50deg",
          rotateY: ["180deg", "360deg"],
        }}
        animate={{
          opacity: 1,
          translateY: 0,
          rotateZ: "0deg",
          rotateY: "0deg",
        }}
        transition={{
          // translateY: { duration: 5000 }
          type: "spring",
          damping: 20,
          rotateZ: {
            damping: 15, //How quickly a spring slows down
            mass: 3, //The weight of the spring
          },
        }}
      >
        <View style={styles.badge}>
          <Image style={styles.band} source={require("@/assets/band.png")} />

          <ImageBackground
            style={styles.background}
            source={require("@/assets/header.png")}
          >
            <View style={styles.header}>
              <Text style={styles.company}>Nome da empresa</Text>
              <Text style={styles.id}>#1234567</Text>
            </View>

            <View style={styles.content}>
              <Image
                style={styles.image}
                source={{ uri: "https://github.com/justmatedev.png" }}
              />
              <Text style={styles.name}>JustMate</Text>
              <Text style={styles.email}>justmatedev@gmail.com</Text>
            </View>
          </ImageBackground>
        </View>
      </MotiView>
    </View>
  )
}
