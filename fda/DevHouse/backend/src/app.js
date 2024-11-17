import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import path from "path"
import routes from "./routes"

// mongoDB
// ip: 200.79.187.163
// Username: justmatedev
// Password: 7bcfHHsBtjsiInBO

class App {
  constructor() {
    this.server = express()

    mongoose.connect(
      "mongodb+srv://justmatedev:7bcfHHsBtjsiInBO@devhousecluster.zidil.mongodb.net/?retryWrites=true&w=majority&appName=devhouseCluster"
      // { useNewUrlParser: true, useUnifiedTopology: true }
    )

    this.middleware()
    this.routes()
  }

  middleware() {
    this.server.use(cors())

    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    )
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
