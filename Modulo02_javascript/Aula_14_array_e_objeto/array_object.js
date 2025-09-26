let listaProdutos = [

    { nome: "Playstation 4", Fabricante: "Sony", Valor: 2300 },
    { nome: "Xbox one", Fabricante: "Microsoft", Valor: 2500 },
    { nome: "Nintendo Wii-U", Fabricante: "Nintendo", Valor: 2000 },
    { nome: "Notebook Gamer", Fabricante: "Positivo", Valor: 1890 },
    { nome: "Sega Saturn", Fabricante: "Sega", Valor: 1200 }

]

//acessar produtos 

console.log(listaProdutos[0]);
console.log(listaProdutos[1]);


//percorrer lista
listaProdutos.forEach((produtos ) =>{

    console.log(produtos);
    
})


// format?  (formatar o resultado da busca estetica)
listaProdutos.forEach((produtos ) =>{

    console.log(`0 ${produtos.nome} da ${produtos.Fabricante} é R$ ${produtos.Valor}`)
    
})


//filtros para os array 

let listaProdutoscaros = listaProdutos.filter(produtos => produtos.Valor > 2000)

console.log(listaProdutoscaros);
