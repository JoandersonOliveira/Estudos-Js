/**Closure é quando a função lembra do escopo léxico onde ela foi definida 
 * mesmo ela sendo invocada em um escopo diferente do seu escopo léxico.
 */

function avo() {                              //Super função
    const nomeAvo = 'Virgulino';
    const nomePai = 'Agnelo';
    const nomeDoFilho = pai()

    function pai() {                         //Função média
        const nomeFilho = filho();

        function filho() {                  //Função interna
            const nomeDoFilho = 'Angelo';
            return nomeDoFilho;
        }

        return nomeFilho
    }

    return nomeDoFilho
}
console.log(avo())

const nomeDoGaroto = avo()