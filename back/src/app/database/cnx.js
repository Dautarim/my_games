import mysql from "mysql"
import 'dotenv/config'

const passwordDBuser = process.env.PWDBUSER
const conexaoDB = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: passwordDBuser,
    database: "db_games" 
})

//Isso se chama JSDOCS, pesquisar depois
/**
 * Função que faz as operações direto com o db
 * @param {string} comand 
 * @param {string = id | [data , id]} values 
 * @param {string} rejectMessage 
 * @returns Um objeto da promisse
 */
export const queryFunction = (comand, values = '', rejectMessage)=>{
    return new Promise((resolve, reject)=>{
        conexaoDB.query(comand,values,(error, result)=>{
            if(error){ return reject(rejectMessage) }
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row) }) }) }

//Conectar ao db
conexaoDB.connect()
export default conexaoDB