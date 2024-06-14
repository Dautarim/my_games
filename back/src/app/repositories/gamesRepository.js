
import {queryFunction} from "../database/cnx.js"

class GamesRepository {

    findAll(){
        const comand = "SELECT * FROM db_games.games;"
        return queryFunction(comand,"Dados não encontrados") }

    findById(id){
        const comand = `SELECT * FROM db_games.games where id=?;`  
        return queryFunction(comand,id,"Solicitação NÃO encontada") }

    create(data) {
        const comand = "INSERT INTO games SET ?;"
        return queryFunction(comand,data,"ERRO: Dado não cadastrado") }

    update(data,id){
        const comand = "UPDATE games SET ? WHERE id = ?;"
        return queryFunction(comand,[data,id],"ERRO: Não foi possivel atualizar") }

    delete(id){
        const comand = "DELETE FROM games WHERE id=?"
        return queryFunction(comand,id,"ERRO: Dado não deletado") }

}
export default new GamesRepository()