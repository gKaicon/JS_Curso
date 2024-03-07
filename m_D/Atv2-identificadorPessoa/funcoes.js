function verificar(){
    var data = new Date();
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    if(Number(anoNasc.value) == 0 || Number(anoNasc.value) > anoAtual){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    }
    else{
        var rSex = document.getElementsByName('radioSex')
        var idade = anoAtual - Number(anoNasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('class', 'rounded')

        if (rSex[0].checked) {
            genero = "Homem"
            if (idade > 0 && idade < 11) {
                img.setAttribute ('src','cmenino.jpg')
            } else if (idade < 21){
                img.setAttribute ('src','rapaz.jpg')
            }
            else if (idade < 50){
                img.setAttribute ('src','homi.jpg')
            }
            else{
                img.setAttribute ('src','veio.jpg')
            }
        }
        else if (rSex[1].checked) {
            genero = "Mulher"
            if (idade > 0 && idade < 11) {
                img.setAttribute ('src','cmenina.jpg')
            } else if (idade < 21){
                img.setAttribute ('src','moca.jpg')
            }
            else if (idade < 50){
                img.setAttribute ('src','muie.jpg')
            }
            else{
                img.setAttribute ('src','veia.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `O Sexo é ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}