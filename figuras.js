// calculos del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: "+ ladoCuadrado); */

function perimetroCuadrado(lado) {
    return lado*4;    
}

//console.log("el perimetro del cuadrado es: "+ perimetroCuadrado);

//const areaCuadrado = ladoCuadrado * ladoCuadrado; 

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("el area del cuadrado es: "+ areaCuadrado);
console.groupEnd();
// calculos triangulo

console.group("Triangulos")
/* const lTriangulo1 = 6;
const lTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5;
 
console.log("los lados del triangulo son: "+ lTriangulo1 +" cm, " + lTriangulo2 +
    " cm, "+ baseTriangulo3 + " cm");
*/
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(altura, base) {
    return (base * altura)/2;
}


console.groupEnd();

// calculos Circulo

console.group("Circulo");


const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * pi;
}

function areaCirculo(radio) {
    return radio * pi;
}
console.log("PI es: "+ pi);

console.groupEnd();



/** interaccion con el HTML */

function calculaPerimetroCuadrado(params) {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("el perimetro es: "+ perimetro);
}

function calculaAreaCuadrado(params) {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("el area es: "+ area);
}

function calcAlturaIsoceles(/* l1, l2, base */) {

    const lado1 = document.getElementById("inputLado1");
    const lado2 = document.getElementById("inputLado2");
    const base1 = document.getElementById("base");

    const l1 = parseFloat( lado1.value );
    const l2 = parseFloat(lado2.value);
    const base = parseFloat(base1.value); 

    if (l1 === l2 && l1 != base) {
        const interno = l1**2  -  base**2 / 4 ;
        alert("la altura es: "+ Math.sqrt(interno));
    }
    else {
        alert("no es un triangulo isoceles");
    }
}


