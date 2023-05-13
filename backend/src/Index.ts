import express from "express"
import mongo from "./db/mongo"
import cors from 'cors'
import UserRouter from "./User"

const app = express()

mongo()

app.use(cors())
app.use(express.json())

app.use("/api/user", UserRouter)

app.get("/", (req, res) => {
    res.send("hi")
})

app.listen(4000)
