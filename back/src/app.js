import express from "express"
import cors from "cors"
import gameControl from "./app/controllers/gamesController.js"

const app = express()
app.use(cors())
app.use(express.json()) //Isso é indica ao servidor que a comunicação é por json

app.get("/games",gameControl.index)// Get
app.get("/games/:id",gameControl.show)//Get id
app.post("/games",gameControl.store)//Post
app.put("/games/:id",gameControl.update)//Put
app.delete("/games/:id",gameControl.delete)//Delete

export default app


