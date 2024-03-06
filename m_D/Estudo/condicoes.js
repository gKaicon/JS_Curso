//condição simples
var vel = 59.5
console.log(`A velocidade do seu carro é ${vel} km/h`)
if (vel > 60) {
    console.log(`Você ultrapassou o limite de velocidade permitida.\nMULTADO!!`)
}
console.log(`Sempre use cinto de segurança`)
// Condição composta
var pais = 'EUA'
console.log(`Vivendo em ${pais}`)
if (pais == 'Brasil' || pais == 'BR') {
    console.log(`Você é Brasileiro`)
}
else {
    console.log(`Você é Gringo`)
}
// Condição em função
function verificacaoMulta() {
    var txtvel = document.getElementById('txtVel')
    var res = document.querySelector('div#res')
    var vel = Number(txtvel.value)
    res.innerHTML = `<p><strong>Sua velocidade é ${vel} km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong></p>`
    }
    res.innerHTML += `<p>Use cinto de segurança</p>`
}

//Condições alinhadas
var idade = 18
if (idade < 16) {
    console.log(`não vota`)
} else if (idade < 18 || idade < 65) {
    console.log(`voto opcional`)
}
else {
    console.log(`voto obrigatório`)
}
// -- 
var agora = new Date().getHours()
var hora = agora;
console.log(`agora são ${hora}`)
if (hora < 12) {
    console.log(`Bom dia`)
}
else if (hora <= 18) {
    console.log(`Boa Tarde`)
}
else {
    console.log(`Boa Noite`)
}

//condições multiplas
var diaSem = new Date().getDay()

switch (diaSem) {
    case 0:
        console.log(`Domingo`)
        break;
    case 1:
        console.log(`Segunda`)
        break;
    case 2:
        console.log(`Terça`)
        break;
    case 3:
        console.log(`Quarta`)
        break;
    case 4:
        console.log(`Quinta`)
        break;
    case 5:
        console.log(`Sexta`)
        break;
    case 6:
        console.log(`Sábado`)
        break;
    default:
        console.log(`Dia indefindo`)
        break;
}