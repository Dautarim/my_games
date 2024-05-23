import express from "express"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json()) //Isso é indica ao servidor que a comunicação é por json

const games = [
    {id: 1, titulo: "Arena Blackout", nota: 10, dificuldade: "hard", tamanho: "1.2Gb"},
    {id: 2, titulo: "Beach bugui", nota: 8, dificuldade: "easy", tamanho: "300Mb"},
    {id: 3, titulo: "Briscola", nota: 8, dificuldade: "easy", tamanho: "194Mb"},
    {id: 4, titulo: "Shadow Fight", nota: 7, dificuldade: "medium", tamanho: "312Mb"},
    {id: 5, titulo: "Asphalt 8", nota: 9, dificuldade: "easy", tamanho: "590Mb"},
    {id: 6, titulo: "Free Fire", nota: 8.9, dificuldade: "easy", tamanho: "890Gb"},
    {id: 7, titulo: "Fortnite", nota: 10, dificuldade: "medium", tamanho: "1.5Gb"},
    {id: 8, titulo: "Subwai surf", nota: 9, dificuldade: "easy", tamanho: "150Mb"}
]
function filterID(id){return games.filter(e => e.id == id)} //filtrador por id
function filtraPos(id){return games.findIndex(e => e.id == id)} //Retorna a posição do elemento

//ROUTES Get
app.get("/games",(req,res)=> res.send(games))
app.get("/games/:id",(req,res)=> res.send(filterID(req.params.id)))
//Delete
app.delete("/games/:id&:qd",(req,res)=>{ 
    const elim = filterID(req.params.id)
    const qnt = req.params.qd
    const pos = filtraPos(req.params.id)
    console.log(pos)
        games.splice(pos,qnt)
            res.status(200).json({message:"Eliminado ✅", elim}) })
//Post
app.post("/games",(req,res)=>{
    const {id, titulo,nota,dificuldade,tamanho} = req.body
    const elemem = {id: id, titulo: titulo, nota: nota, dificuldade: dificuldade, tamanho: tamanho}
        games.push(elemem)
            res.status(201).send(elemem) })
//Put
app.put("/games/:id",(req,res)=>{
    const {id, titulo,nota,dificuldade,tamanho} = req.body
    const oelemento = filterID(req.params.id)
        oelemento[0].id = id
        oelemento[0].titulo = titulo
        oelemento[0].nota = nota
        oelemento[0].dificuldade = dificuldade
        oelemento[0].tamanho = tamanho
            res.status(200).json({oelemento})
})
export default app

/*
INSERÇÃO NO BD

INSERT INTO `db_games`.`games` (`titulo`, `nota`, `dificuldade`, `tamanho`) VALUES ('Arena Blackout', '9.3', '8.38', '1.2Gb');
INSERT INTO `db_games`.`games` (`titulo`, `nota`, `dificuldade`, `tamanho`) VALUES ('Beach bugui', '7.4', '7.04', '300Mb');
*/