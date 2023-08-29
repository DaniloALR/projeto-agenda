const form = document.getElementById('form')
let linhas = ''

let listaContato = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome')
    const numero = document.getElementById('numero')

    if(listaContato.includes(nome.value) || listaContato.includes(numero.value)){
        alert("O nome ou número digitado já foi registrado")
    } else {
        let linha = "<tr>"
        linha += `<td>${nome.value}</td>`
        linha += `<td>${numero.value}</td>`
        linha += "</tr>"
    
        linhas += linha
        listaContato += linhas
    
        const tabela = document.querySelector('tbody')
        tabela.innerHTML = linhas
    }

    nome.value = ''
    numero.value = ''
})
