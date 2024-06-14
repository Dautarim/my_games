import express from "express"
import cors from "cors"
import router from "./router.js"

const app = express()
app.use(cors())//pra remover o bloqueio a acesso por outros dominios
app.use(express.json()) //Isso é indica ao servidor que a comunicação é por json
app.use(router) //Usar o aquivo das rotas

export default app


