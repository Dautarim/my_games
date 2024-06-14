import { Router } from "express"
import gameControl from "./app/controllers/gamesController.js"
const router = Router()

router.get("/games",gameControl.index)// Get
router.get("/games/:id",gameControl.show)//Get id
router.post("/games",gameControl.store)//Post
router.put("/games/:id",gameControl.update)//Put
router.delete("/games/:id",gameControl.delete)//Delete

export default router 