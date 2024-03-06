let pessoa = {
    nome: 'Gabriel',
    sexo: 'm',
    peso: 74.5,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}
pessoa.engordar(2)
console.log(pessoa)