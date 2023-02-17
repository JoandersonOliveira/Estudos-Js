function testeClosure() {
    x = 10
    result = interna()
    return result

    function interna() {
        //x = 8
        resultado = superInterna()
        return resultado

        function superInterna() {
            return x * 2
        }
    }
}


console.log(testeClosure())