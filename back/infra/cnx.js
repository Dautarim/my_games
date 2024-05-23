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

export default conexaoDB