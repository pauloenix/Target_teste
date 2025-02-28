function showResults(resultado) {
    const body = document.getElementById('root')
    const div = document.createElement('div')
    div.innerText = `${resultado}`
    body.appendChild(div)
    

}
//        teste 1
function teste1(){

    let indice = 13; let soma = 0; let K = 0;
    while (K < indice) 
    {
        K += 1
        soma += K
    }
    return soma
}
showResults(teste1)
showResults('RESPOSTA DO TESTE 1:')
showResults(teste1())
