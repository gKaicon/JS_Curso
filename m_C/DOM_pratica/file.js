var a = document.getElementById('area')
//ao invés de adicionar na tag o que será feito, adicionamos por meio de eventos
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrou)
a.addEventListener('mouseout', saiu)

function clicar() {
    a.innerText = "Clicou!"
    a.style.background = 'red'
}
function entrou() {
    a.innerText = "Entrou"
    a.style.background = 'yellow'
}
function saiu() {
    a.innerText = "Saiu"
    a.style.background = 'green'
}

function soma() {
    var txt1 = document.getElementById('txt1')
    var txt2 = document.querySelector('input#txt2')
    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)
    var s = n1 + n2
    var res = document.querySelector('div#res')
    res.innerHTML = 'A soma é ' + s
}