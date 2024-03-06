function contar() {
    var itxt = document.getElementById('inicio')
    var ftxt = document.getElementById('fim')
    var incrementtxt = document.getElementById('incremento')

    if (itxt.value.length == 0 || ftxt.value.length == 0 || incrementtxt.value.length == 0) {
        window.alert(`Não foi possível realizar a contagem`)
        divRes.innerHTML = 'Impossível Contar!'
    } else {
        divRes.innerHTML = '\nContando: \n'
        var i = Number(itxt.value)
        var f = Number(ftxt.value)
        var increment = Number(incrementtxt.value)
        var divRes = document.getElementById('res')

        if(increment <= 0){
            increment = 1
            window.alert('Passo inválido, contaremos de 1 em 1')
        }     
        // i menor f
        if (i < f) {
            for (var k = i; k <= f; k += increment) {
                divRes.innerHTML += `${k}  \u{1F449}`
            }
        }
        //f menor i
        if (i > f) {
            for (var k = i; k >= f; k -= increment) {
                divRes.innerHTML += `${k}  \u{1F449}`
            }
        }

        divRes.innerHTML += `\u{1F3C1}`
    }

}