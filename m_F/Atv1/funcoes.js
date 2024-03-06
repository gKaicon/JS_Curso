var vetHTML = []
var num = document.querySelector('input#n')
var selectArray = document.querySelector('select#array')
var divRes = document.querySelector('div#res')

function isList(n, vet) {
    if (vet.indexOf(n) != -1) {
        return true
    }
    else {
        return false
    }
}

function tam(vet) {
    return vet.length;
}

function maior(vet) {
    let maior = vet[0]
    for (let index = 0; index < vet.length; index++) {
        if (vet[index] > maior) {
            maior = vet[index]
        }
    }
    return maior
}

function menor(vet) {
    let menor = vet[0]
    for (let index = 0; index < vet.length; index++) {
        if (vet[index] < menor) {
            menor = vet[index]
        }
    }
    return menor
}

function soma(vet) {
    let soma = 0
    for (let index = 0; index < vet.length; index++) {
        soma += vet[index]
    }
    return soma
}

function media(vet) {
    return soma(vet) / vet.length
}

function adicionar() {
    divRes.innerHTML = ''
    if (!isList(Number(num.value), vetHTML)) {
        vetHTML.push(Number(num.value))//adicionar no array js
        //Adicionando uma linha no select
        var sizeSelect = selectArray.getAttribute('size')
        selectArray.size +=1
        //criar a linha(option) para adicionar no select
        var linha = document.createElement('option')
        linha.innerHTML = `Número : ${Number(num.value)} adicionado`
        selectArray.appendChild(linha); //Colocar a option no array
        num.value = ''
    }
    else{
        window.alert('Valor inválido, pois o mesmo já foi inserido')
    }
}

function finalizar() {
    if (vetHTML.length == 0) {
        window.alert('Não há valores para analise')
    } else {
        divRes.innerHTML = ('<p>Soma: ' + soma(vetHTML)+'</p>')
        divRes.innerHTML += ('<p>Média: ' + media(vetHTML)+'</p>')
        divRes.innerHTML += ('<p>Maior: ' + maior(vetHTML)+'</p>')
        divRes.innerHTML += ('<p>Menor: ' + menor(vetHTML)+'</p>')
    }
}

