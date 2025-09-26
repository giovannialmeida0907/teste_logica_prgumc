let listatimes = ["Santos", "Vasco", "Botafogo", "Palmeiras"]

//acesar item array

console.log(listatimes[0]);
console.log(listatimes[1]);
console.log(listatimes[2]);
console.log(listatimes[3])

//adicionar itens no array
listatimes.push("Flamengo")
listatimes.push("Sport")
console.log(listatimes)


//Verificar o tamanho da lista
console.log(listatimes.length)

//Adicionar itemna primeira posição
listatimes.unshift("Bahia")
listatimes.unshift("Ponte preta")
console.log(listatimes)

//remover um item no inicio da lista
listatimes.shift()
console.log(listatimes)

//remover um item no final da lista
listatimes.pop()
console.log(listatimes)

//encontrar a posição de um elemento

console.log(listatimes.indexOf("Vasco"))

let listanomes = ["Giovanni", "Gustavo", "Natasha", "moisés"]

//apagar elementos usando a posição (posição, qunt. de elementos apagados apartir da posi.)
listanomes.splice(0,1)
console.log(listanomes)


//sustiuir elemento a partie da posição
listanomes.splice(1,2, "Robson", "marcos")
console.log(listanomes)



//add itens apartir de uma posição
listanomes.splice(2,0, "Jose", "kevin" )
console.log(listanomes)