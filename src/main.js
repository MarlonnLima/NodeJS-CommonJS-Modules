const {getFullName, productType} = require("./services/products")
const config = require("./services/config")
const db = require("./services/database")

async function main() {
    console.log("Olá meu nome é system")
    console.log(await getFullName(45, "Batata Doce"))
    console.log(config.ENV)
    console.log(config.client.device)
    db.connectToDatabase("MySQL")
    db.disconnectDatabase()
}

main();