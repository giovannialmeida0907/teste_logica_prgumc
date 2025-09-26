let produto = {
    
    nome: "Nitendo Switch",
    fabricante: "Nintendo",
    preco: 2500,
    varsao: "v.2"
}

//verifiar elemento do objeto (objeto.elemento ou objeto[elemento])

console.log(produto.nome);

//add elemento ao objeto

produto.armaznamento = "250 Gb"
produto['MemoriaRAM'] = "8 gb"
console.log(produto);

//delete elmento

delete produto.armaznamento
//ou (delete produto['memoriaRAM'])
console.log(produto)


