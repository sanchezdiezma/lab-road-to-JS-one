
// // Utilizando datos estaticos a traves de variables 

// // Cuadrado_______________________________________________________________

// console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + ' cm');

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log('El área del cuadrado es: ' + areaCuadrado + ' cm2');

// console.groupEnd();

// // Triangulo_______________________________________________________________

// console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// const areaTrianlgulo = (baseTriangulo * alturaTriangulo) / 2;

// console.log('Los lados del triángulo miden: ' + ladoTriangulo1 + ' cm y ' + ladoTriangulo2 + ' cm');
// console.log('La base del triángulo miden: ' + baseTriangulo + ' cm');
// console.log('La altura del triángulo miden: ' + alturaTriangulo + ' cm');
// console.log('El perimetro del triángulo es: ' + (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo) + ' cm');
// console.log('El área del triángulo es: ' + areaTrianlgulo + ' cm2');

// console.groupEnd();

// // Circulo_______________________________________________________________

// console.group("Circulo");


// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const pi = Math.PI;

// console.log('El radio del circulo es: ' + radioCirculo + ' cm');
// console.log('El diametro del circulo es: ' + diametroCirculo + ' cm');
// console.log('PI es: ' + pi);
// console.log('El perimetro del circulo es: ' + (pi * diametroCirculo) + ' cm');
// console.log('El área del circulo es: ' + (pi * radioCirculo * radioCirculo) + ' cm2');


// console.groupEnd();




// Utilizando datos dinamicos a traves de funciones 

// Cuadrado_______________________________________________________________

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

// Triangulo_______________________________________________________________

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTrianlgulo (base, altura) {
    return (base * altura) / 2;
}

// Circulo_______________________________________________________________

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return Math.PI * diametro;
}

function areaCirculo (radio) {
    return Math.PI * (radio * radio);
}









