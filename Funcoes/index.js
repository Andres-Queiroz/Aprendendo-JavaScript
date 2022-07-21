/*function soma (a,b){
    if (a > 0 && b > 0){
        let c = a + b;
        console.log(c)
    }
}

function parametro (parametro1, parametro2){
    console.log(parametro1,"e", parametro2, "estão sendo mostrados")
}

soma(5,3)
parametro("parametro1","parametro2")*/

//Calculadora

function calculadora (){
    const operador = prompt('Escolha uma Operação:\n 1 - Soma(+) \n 2 - Subtração (*)\n 3 - Multiplicação (*)\n 4 - Divisão real(/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)')

    if (!operador || operador >= 7){
        alert("Operação Inválida")
        calculadora()
    }

    let n1 = Number(prompt("Digite o primeiro valor"))
    let n2 = Number(prompt("Digite o segundo valor"))
    let resultado;

    if (!n1 || !n2){
        alert('Digite um número válido')
        calculadora()
    }

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao()
    }function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao()
    }
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao()
    }
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao()
    }
    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`)
        novaOperacao()
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`)
        novaOperacao()
    }

    function novaOperacao(){
        let opcao = prompt("Deseja realizar uma nova operação?\n 1 - sim\n 2 - não")
        if (opcao == 1){
            calculadora()
        } else if (opcao == 2) {
            alert("Até mais!")
        } else {
            alert("Digite uma operação válida!")
            novaOperacao()
        } 
    }

    if (operador == 1) {
        soma()
    } else if(operador == 2){
        subtracao()
    } else if(operador == 3){
        multiplicacao()
    } else if(operador == 4){
        divisaoReal()
    } else if(operador == 5){
        divisaoInteira()
    } else if(operador == 6){
        potenciacao()
    } 
}
calculadora()
