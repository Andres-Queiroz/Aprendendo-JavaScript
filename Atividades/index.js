function troca (array){
    if (!array){
        return "-1"}
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0 && array[i] !== 0){
            console.log(`Foi trocado o ${array[i]} por 0`);
            array[i] = 0;
        } else if(array[i] === 0){
            console.log(`O valor ${array[i]} já é um zero`)
        }
    }
    return array
}

var a = [1,3,4,6,80,33,23,90, 0]
console.log("Array anterior:", a,'\n')
console.log('Array final modificada: \n', troca(a))