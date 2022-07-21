function comparacao(a,b){
    const saoIguais = a === b
    const soma = a + b

    let c = (a ===b)? 'são iguais' : 'não são iguais'
    const frase1 = `Os números ${a} e ${b} ${c}.`

    let d = (soma > 10)? 'maior que 10,' : 'menor que 10,'
    const frase2 = `Sua soma é ${soma}, que é ${d}`

    let e = (soma > 20)? 'maior que 20' : 'menor que 20'
    const frase3 = `e ${e}`

    return frase1 + frase2 + frase3
}

console.log(comparacao(5,5))