function toggleMode() {
    const html = document.documentElement

    // if(body.classList.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    html.classList.toggle('light')

    //TROCAR A IMAGEM 
    // pegar a tag img e substituir a img
    const img = document.querySelector('#profile img')
    
    // Substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode adicionar a imagem light
        img.setAttribute('src', './assets/foto-perfil.jpg')
    } else {
        // se tiver sem o light mode manter a imagem normal
        img.setAttribute('src', './assets/foto-perfil.jpg')
    }

    const alt = document.querySelector('#profile img')
    if(html.classList.contains('light')){
        img.setAttribute('alt', 'Imagem versao light mode')
    } else {
        img.setAttribute('alt', 'Imagem versao dark mode')
    }
}


