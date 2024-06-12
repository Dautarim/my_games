import { json } from "express"
import conexaoDB from "../database/cnx.js"

class GamesRepository {

    findAll(){
        const comand = "SELECT * FROM db_games.games;"
        return new Promise((resolve, reject)=>{
            conexaoDB.query(comand, (error, result)=>{
                if(error){return reject(error)}
                const rows = JSON.parse(JSON.stringify(result)) //Tratar o JSON antes de retornar
                resolve(rows) }) }) }

    findById(id){
        const comand = `SELECT * FROM db_games.games where id=?;`  
        return new Promise((resolve, reject)=>{
            conexaoDB.query(comand,id,(error, result)=>{
                if(error){ return reject("Sem Resposta...") }
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row) }) }) }

    create(data) {
        const comand = "INSERT INTO games SET ?;"
        return new Promise((resolve,reject)=>{
            conexaoDB.query(comand,data,(error,result)=>{
                if(error){reject("DEU RUIM ❌ "+error)}
                const row = JSON.parse(JSON.stringify(data))
                return resolve(row) }) }) }

    update(data,id){
        const comand = "UPDATE games SET ? WHERE id = ?;"
        return new Promise((resolve, reject)=>{
            conexaoDB.query(comand,[data,id],(error)=>{
                if(error){reject("DEU RUIM ❌ "+error)}
                const row = JSON.parse(JSON.stringify(data))
                return resolve(row) }) }) }

    delete(id){
        const comand = "DELETE FROM games WHERE id=?"
        return new Promise((resolve, reject)=>{
            conexaoDB.query(comand, id,(error)=>{
                if(error){reject(error)}
                return resolve("Feito") }) }) }

}
export default new GamesRepository()