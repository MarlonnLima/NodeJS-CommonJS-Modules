# CommonJS Modules
## Instalação

Para instalar o projeto use:
```
git clone https://github.com/MarlonnLima/NodeJS-CommonJS-Modules.git
```

Dentro da pasta de instalação execute o comando <code>npm run start</code> para iniciar o projeto.
## O projeto
Esse projeto foi feito para testar os módulos common JS. Basicamente cada arquivo é um módulo podemos exportar e importar esses dados 

Exemplo de exportação:
```js
const ENV = "PRODUCTION"

const client = {
    device: "web",
}

module.exports = {
    ENV,
    client
}
```

Exportação padrão(Default Exports):
```js
exports.connectToDatabase = async (dataName) => {
    console.log("Conectando ao banco: " + dataName)
}
```

Exemplo Importação:

```js
const config = require("./services/config")
const db = require("./services/database")
```
