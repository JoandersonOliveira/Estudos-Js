//Faça um script que leia três números e mostre-os em ordem decrescente.

function ordemCrescente(vlr1, vlr2, vlr3) {
    let aux = vlr1;
    

    if (aux < vlr2) {
        vlr1 = vlr2;
        vlr2 = aux;
    }

    if (vlr1 < vlr3) {
        aux = vlr1;
        vlr1 = vlr3;
        vlr3 = aux;
    }

    if (vlr2 < vlr3) {
        aux = vlr3;
        vlr3 = vlr2;
        vlr2 = aux;
    }

    console.log(vlr1, vlr2, vlr3)
}

ordemCrescente(19, 10, 50);

/*
function ordemCrescente(vlr1, vlr2, vlr3) {
    let aux = vlr1;
    let vlr1 = vlr1, vlr2 = vlr2, vlr3 = vlr3;

    if (aux < vlr2) {
        vlr1 = vlr2;
        vlr2 = aux;
    }

    if (vlr1 < vlr3) {
        aux = vlr1;
        vlr1 = vlr3;
        vlr3 = aux;
    }

    if (vlr2 < vlr3) {
        aux = vlr3;
        vlr3 = vlr2;
        vlr2 = aux;
    }

    console.log(vlr1, vlr2, vlr3)
}
*/