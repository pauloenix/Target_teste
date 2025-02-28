function fibonacci(number = 20){

    let N = []
    N[0] = 0
    N[1] = 1
    for (let i = 2; i < number; i++) {
        N[i] = N[i - 2] + N[i -1]
    }
    return N.toString()
}
showResults(fibonacci)
showResults('RESPOSTA DO TESTE 2:')
showResults(fibonacci())
