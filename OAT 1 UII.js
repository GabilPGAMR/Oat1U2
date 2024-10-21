function consultaFipe(){
    var codigoFipe = document.getElementById('fipe').value
    var tabelaFipe = document.getElementById("tblcep").querySelector("tbody")
    
    var url = ` https://brasilapi.com.br/api/fipe/preco/v1/${codigoFipe}`
    
    fetch(url)
    .then(response => {
        console.log(response)
        if (!response.ok) {
            throw new Error("CEP não encontrado!")
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        mostrarEndereco(data)/*leitura do JSON data*/
    })
    .catch(error => {
        console.error('Erro:', error)
    })
}


