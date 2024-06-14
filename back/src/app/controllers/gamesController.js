
import gamesRepository from "../repositories/gamesRepository.js"

class GamesController {

    async index(req,res) {
        const rows = await gamesRepository.findAll()
        res.json(rows)} //Listar dados

    async show (req, res) {
        const row = await gamesRepository.findById(req.params.id)
        const finalData = row[0]
            res.json(finalData)
    } //mostrar um dado

    async delete (req,res){ 
        const id = req.params.id
        await gamesRepository.delete(id)
            res.status(200).json("Eliminado")
    } //criar dados

    async store(req,res){
        const data = req.body
        const row = await gamesRepository.create(data)
            res.status(201).json("Criado ✅" + row)
    }//Deletar

    async update(req,res){
        const id = req.params.id
        const data = req.body
        const row = await gamesRepository.update(data,id)
            res.status(201).json("Atualizado ✅" + row)
    }//atualizar dados

}
//Pesquisar "PADÃO SINGLETON"
export default new GamesController()