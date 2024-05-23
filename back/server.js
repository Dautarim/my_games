import conexaoDB from "./infra/cnx.js"
import app from "./src/app.js"

const port = 3003
//Conectar ao db
conexaoDB.connect((error) => { if (error) {console.log("DEU RUIM ❌: "+error)}
else { app.listen(port,() => console.log("SERVIDOR CONECTADO E ONLINE ✅"))}})