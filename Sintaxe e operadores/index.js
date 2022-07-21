/*
function comparacao(a,b) {
    const comparacao1 = saoIguais(a,b)
    const comparacao2 = maiorMenor(a,b)

    return `${comparacao1} ${comparacao2}`
}

function saoIguais(a,b){
    let frase = `Os números ${a} e ${b}`;
    let simNao = 'não'

    if (a === b){
        simNao = ""
    }

    return `${frase} ${simNao} são iguais.`
}

function maiorMenor(a,b){
    const soma = a + b;
    let menor = 'menor'
    let menor2 = 'menor'

    if (soma > 10){
        menor = 'maior'
    }
    if (soma > 20){
        menor2 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${menor} que 10 e ${menor2} que 20`
}

console.log(comparacao(5,6))*/