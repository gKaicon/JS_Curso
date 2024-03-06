let vet = []
vet.push(8)//colocar no fim
vet.push(7)
console.log(vet)
console.log(`O vetor tem tamanho ${vet.length}`)//tamanho
vet.sort()//ordena
console.log(vet)
vet.push(4)
vet.push(6)
vet.push(3)
vet.push(15)
vet.push(78)
for (let index = 0; index < vet.length; index++) {
    console.log(vet[index]);
}
for (let pos in vet) {
    console.log(vet[pos])
}

vet.indexOf(78)//retorna ou a chave daquele valor no array, ou -1, caso ele não exista