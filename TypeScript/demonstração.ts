interface IAnimal {
    nome: string,
    tipo: 'terrestre' | 'aquatico'
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}


type IDomestico = IFelino | ICanino

const gato : IDomestico = {
    nome: 'gato',
    tipo: "terrestre",
    domestico: true, 
    porte: "pequeno",
}

//usa o diamante nos generic types para informar que vc nsão sabe que tipo de parametro a função irá ter

type somenteLeitura = {
    readonly [K in keyof IAnimal]: IAnimal[K];
}

//readonly --> apenas leitura, depois suar um implements na classe 
