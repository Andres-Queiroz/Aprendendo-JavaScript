function valida (array, number) {
    try {   
        if (!array || !number) throw new ReferenceError("Envie os parametros corretamente");

        if (typeof array !== 'object' ) throw new TypeError('O que foi digitado não é um objeto')

        if (typeof number !== 'number' ) throw new TypeError('O que foi digitado não é um número')

        if (array.length != number) throw new RangeError ("O tamanho da array é diferente do número digitado")
        
        return array
    }
        catch(error){
            if (error instanceof ReferenceError) {
                console.log('Este erro é um ReferenceError')
                console.log(error.message)
            }
            else if (error instanceof TypeError) {
                console.log('Este erro é um TypeError')
                console.log(error.message)
            }
            else if (error instanceof RangeError) {
                console.log('Este erro é um RangeError')
                console.log(error.message)
            }
            else {"Tipo de erro não esperado" + error}
        }
}
console.log(valida(['array'], 1))