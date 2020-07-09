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
    var lista = document.getElementById('lista')

    titulo.disabled = true
    texto.disabled = false
    lista.disabled = false
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

    titulo.disabled = true
    texto.disabled = true
}

function lista() {
    var escrita = document.getElementById('numA')
    var texto = escrita.value

    var nota = document.getElementById('quadro')
    var lista = document.createElement('ul')
    var escrita = document.createElement('li')
    escrita.innerHTML = texto
    nota.appendChild(lista)
    lista.appendChild(escrita)

    var titulo = document.getElementById('titulo')
    var texto = document.getElementById('texto')
    var lista = document.getElementById('lista')

    titulo.disabled = true
    if (texto.disabled === false) {
        texto.disabled = false
    }
}

function novaNota() {
    var nota = document.getElementById('quadro')
    var escrita = document.createElement('hr')
    nota.appendChild(escrita)

    var titulo = document.getElementById('titulo')
    var texto = document.getElementById('texto')
    var lista = document.getElementById('lista')

    titulo.disabled = false
    texto.disabled = true
    lista.disabled = true
}