novaNota()

function titulo() {
    var escrita = document.getElementById('numA')
    var texto = escrita.value

    var nota = document.getElementById('quadro')
    var titulo = document.createElement('h2')
    titulo.innerHTML = texto
    nota.appendChild(titulo)

    var titulo = document.getElementById('titulo')
    var texto = document.getElementById('texto')
    // var lista = document.getElementById('listaB')

    titulo.disabled = true
    texto.disabled = false
    // lista.disabled = false
}

function escrever() {
    var escrita = document.getElementById('numA')
    var texto = escrita.value

    var nota = document.getElementById('quadro')
    var escrita = document.createElement('p')
    escrita.innerHTML = texto
    nota.appendChild(escrita)

    var titulo = document.getElementById('titulo')
    var texto = document.getElementById('texto')
    // var lista = document.getElementById('listaB')

    titulo.disabled = true
    texto.disabled = true
    // if (lista.disabled === false) {
    //     lista.disabled = false
    // }
}

// function lista() {
//     var escrita = document.getElementById('numA')
//     var texto = escrita.value

//     var nota = document.getElementById('lista')
//     var escrita = document.createElement('li')
//     escrita.innerHTML = texto
//     nota.appendChild(escrita)

//     var titulo = document.getElementById('titulo')
//     var texto = document.getElementById('texto')
//     // var lista = document.getElementById('listaB')

//     titulo.disabled = true
//     // lista.disabled = true
//     if (texto.disabled === false) {
//         texto.disabled = false
//     }
// }

function novaNota() {
    var nota = document.getElementById('quadro')
    var escrita = document.createElement('hr')
    nota.appendChild(escrita)

    var titulo = document.getElementById('titulo')
    var texto = document.getElementById('texto')
    var lista = document.getElementById('listaB')

    titulo.disabled = false
    texto.disabled = true
    lista.disabled = true
}