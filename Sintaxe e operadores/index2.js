function comparacao (a,b){
    let soma = a+b
    if (a ===b && soma >10 && soma > 20){
        return `Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20"`
    } else if (a=== b && soma > 10 && soma < 20){
        return `Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20"`
    } else if (a===b && soma < 10){
        return `Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20"`
    } else if (a===b && soma === 10){
        return `Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é igual a 10 e menor que 20"`
    } else if (a === b && soma === 20){
        return `Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e igual 20"` 
    } else if (a != b && soma >10 && soma > 20){
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20"`
    } else if (a!= b && soma > 10 && soma < 20){
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20"`
    } else if (a!= b && soma < 10){
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20"`
    } else if (a!=b && soma === 10){
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é igual a 10 e menor que 20"`
    } else if (a != b && soma === 20){
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e igual 20"` 
    }
}

console.log(comparacao(9.5,9.5))