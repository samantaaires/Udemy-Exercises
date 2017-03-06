const produto = {
    nome: 'Caneta Bic preta',
    preco: 1.90,
    desconto: 0.05
}
console.log('oi')
clone = (objeto) => {
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'caneta azul'

console.log(produto, novoProduto)