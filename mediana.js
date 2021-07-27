let lista1 = [
    200,
    100,
    4000000,
    500    
];

const mitadLista = parseInt(lista1.length / 2);

let mediana;

function esPar(num) {
    if (num % 2 === 0) return true;
    else false;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}


function calcularMediana(lista) {
    lista.sort(
        function(a, b) {
            return a - b; 
        }
    );
    

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        
        mediana = calcularMediaAritmetica([elemento1, elemento2])
    
    }
    else {
        mediana = lista[mitadLista];
    }
    return mediana
}




