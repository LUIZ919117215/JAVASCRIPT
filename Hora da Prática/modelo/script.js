function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let data2 = new Date()
    let hora = data.getHours()
    let min = data2.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} hora.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.jpeg'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.jpeg'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //boa noide
        img.src = 'noite.jpeg'
        document.body.style.backgroundColor = '#515154'
    }
}

