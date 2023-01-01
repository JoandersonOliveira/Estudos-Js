//É possivel ter duas variaveis iguais dentro do mesmo programa desde que estejam
//em escopos de blocos diferentes.

var numero = 1;
{
    var numero =2;
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

