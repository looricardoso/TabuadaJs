let numero,resultado = 0;
let resultados = {zero:'0',um:'0',dois:'0',tres:'0',quatro:'0',cinco:'0',seis:'0',sete:'0',oito:'0',nove:'0',dez:'0'};
let voltar=false;

do {
    do {
        numero = prompt('Digite um valor:' || '');
        numero = Number(numero);
        if (Number.isNaN(numero) || numero <= 0 || numero > 10) {
            alert('Digite somente números de 1 a 10.');
        };
    } while (Number.isNaN(numero) || numero <= 0 || numero > 10);
    
    resultados.zero = numero * 0;
    resultados.um = numero * 1;
    resultados.dois = numero * 2;
    resultados.tres = numero * 3;
    resultados.quatro = numero * 4;
    resultados.cinco = numero * 5;
    resultados.seis = numero * 6;
    resultados.sete = numero * 7;
    resultados.oito = numero * 8;
    resultados.nove = numero * 9;
    resultados.dez = numero * 10;
    
    alert(`Tabuada do número: ${numero}\n
    ${numero} x 0 = ${resultados.zero}
    ${numero} x 1 = ${resultados.um}
    ${numero} x 2 = ${resultados.dois}
    ${numero} x 3 = ${resultados.tres}
    ${numero} x 4 = ${resultados.quatro}
    ${numero} x 5 = ${resultados.cinco}
    ${numero} x 6 = ${resultados.seis}
    ${numero} x 7 = ${resultados.sete}
    ${numero} x 8 = ${resultados.oito}
    ${numero} x 9 = ${resultados.nove}
    ${numero} x 10 = ${resultados.dez}`);
        
    let reiniciar = confirm('Deseja repetir a tabuada?');
    if (reiniciar === true) {
    voltar = true;
    } else {
        voltar = false;
    };
} while (voltar === true);
