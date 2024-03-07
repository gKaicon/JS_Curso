function calculaTabuada() {
    let txtnum = document.getElementById('num')
    let divRes = document.getElementById('res')
    var elementoSelect = divRes.querySelector('select');
    if (txtnum.value.length == 0) {
        window.alert(`Insira um valor no campo Número`)
    }
    else {
        if (elementoSelect) { //se tiver um select na minha div ele remove
            elementoSelect.remove()
        }
        let num = Number(txtnum.value)
        let select = document.createElement('select')
        select.setAttribute('id', 'tabuada')
        select.setAttribute('size', '12')
        for (var i = 0; i < 11; i++) {
            let res = num * i
            let linhaRes = document.createElement('option')
            linhaRes.innerHTML = `${num} x ${i} = ${res}`
            select.appendChild(linhaRes)
        }
        divRes.appendChild(select)
    }
}