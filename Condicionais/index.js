/*var jogadorUm = 1;
var jogadorDois = 2;
var placar;

//if ternário
jogadorUm >= 0 && jogadorDois >= 0 ? console.log('Jogadores são válidos') : console.log("Jogadores inválidos");

//if aninhado
if ((jogadorUm >= 0 && jogadorDois >= 0)){
    if (jogadorUm > jogadorDois) {
        console.log('Jogador um está ganhando');
        placar = jogadorUm > jogadorDois
    }else if (jogadorDois > jogadorUm){
        console.log('Jogador dois está ganhando');
        placar = jogadorDois > jogadorUm
    } else {
        console.log('O jogo está empatado')
        placar = jogadorUm == jogadorDois
    }
} else {
    console.log('Placar inválido')
}


switch (placar){
    case placar = jogadorUm > jogadorDois:
        console.log('Jogador um ganhou'); 
        break;
    case placar = jogadorDois > jogadorUm:
        console.log('Jogador dois ganhou');
        break;
    default:
        console.log('O jogo empatou')
}*/

var arrays = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
var object = {cor: 'azul',  tamanho: 10, Boolean : true}

//for
/*for (let indice = 0; indice < arrays.length; indice ++ ) {
    console.log(indice)
}

//for in
for (let i in arrays){
    console.log(i)
}
for (let i in arrays){
    console.log(arrays[i])
}

for (i in object){
    console.log(i)
}

for (i in object){
    console.log(object[i])
}
*/
//for of
/*for(i of arrays){
    console.log(i)
}

for(i of object.cor){
    console.log(i)
}
*/
/*var a = 0
var b = 0
while (a<5){
    a ++;
    console.log(a)
}

//do while
do {
    b++;
    console.log(b)
} while (b<5);*/

//call
/*const obj = {
    num1:2,
    num2:2,
}

function soma(a,b) {
    console.log(this.num1 + this.num2 + a + b)
}
soma.call(obj,1,5) */

/*const retornaNomes = function () {
	return this.nome
};

let andres = retornaNomes.bind({nome:'Andres'});

console.log(andres())*/