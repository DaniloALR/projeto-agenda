const form = document.getElementById('form')
let linhas = ''

let listaNome = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = document.getElementById('nome')
    const numero = document.getElementById('numero')

    if(listaNome.includes(nome.value)){
        alert("O nome digitado já foi registrado")
    } else {
        let linha = "<tr>"
        linha += `<td>${nome.value}</td>`
        linha += `<td>${numero.value}</td>`
        linha += "</tr>"
    
        linhas += linha
        listaNome += linhas
    
        const tabela = document.querySelector('tbody')
        tabela.innerHTML = linhas
    }

    nome.value = ''
    numero.value = ''
})
