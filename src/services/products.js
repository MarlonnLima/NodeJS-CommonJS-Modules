// Todas as funções que lidam com o produto
const productType = {
    version: "digital",
    tax: "x1"
}


async function getFullName(codeID, productName) {
    return codeID + "--" + productName
}

async function getProductLabel(productName) { 
    console.log("Product " + productName)
}

module.exports = {
    getFullName,
    getProductLabel,
    productType
}