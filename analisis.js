// HELPERS
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad - 1];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }
    else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

function esPar(num) {
    return (num % 2 === 0);
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


// mediana general
const salarios = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosSorted = salarios.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosSorted);

//Mediana del top 10%
const spliceStart = ( salariosSorted.length * (90) / 100 );
const spliceCount = salariosSorted.length - spliceStart;



const salariosColTop10 = salariosSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10 = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10,
});