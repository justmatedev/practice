import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  badge: {
    width: "100%",
    alignItems: "center",
  },
  band: {},
  image: {
    width: 160,
    height: 160,
  },
  background: {
    width: "100%",
    backgroundColor: "#19191c",
    height: 400,
    borderRadius: 18,
    overflow: "hidden",
  },
  company: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  id: {
    color: "#fff",
    fontSize: 16,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    paddingTop: 54,
    paddingBottom: 0,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  name: { color: "#fff", fontSize: 22, fontWeight: "bold", marginTop: 24 },
  email: { color: "#cecece", fontSize: 22 },
  motiView: {
    marginTop: -32,
  },
})
