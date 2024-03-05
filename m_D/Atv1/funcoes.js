function carregar() {
    var agora = new Date()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = agora.getHours()
    msg.innerHTML = `<h2>Agora são ${hora}</h2>`
    if(hora >= 0 && hora <=12){
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(196, 169, 34)';
        msg.innerHTML += `<h2>Bom dia</h2>`
    }
    else if(hora > 12 && hora <=18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(42, 73, 186)';
        msg.innerHTML += `<h2>Boa Tarde</h2>`
    }
    else{
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(46, 46, 46)';
        msg.innerHTML += `<h2>Boa noite</h2>`
    }
}