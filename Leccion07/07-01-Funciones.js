// function miFunction(a, b){
//     console.log("suma: " + (a+b));
// }

// function miFunction(a, b){
//     console.log("suma: " + (a+b));
// }

// miFunction(5, 5);

// function miFunction(a, b){
//     console.log("resta: " + (a-b));
// }

// miFunction(8, 3);

// function miFunction(a, b){
//     return (a + b);
// }

// miFunction(2, 3);

// Declaración de la función
// function miFuncion(a,b){
//     return a + b;
// }

// Llamando a la función
// let resultado = miFuncion(2, 3);
// console.log(resultado);

//Declaración Función de tipo Expresión
// let sumar = function (a, b){return a + b};

// resultado = sumar(2, 2);
// console.log(resultado);

// const sumarFuncionTipoFlecha = (a, b) => a + b;
// resultado = sumarFuncionTipoFlecha(4, 6);
// console.log(resultado);

// let sumar = function (a, b){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     return a + b + arguments[2];
// };

// resultado = sumar (5, 3);
// console.log(resultado);

//Función que se llama a sí misma, pero ya no puede ser reutilizable
// (function (a, b){
//     console.log('Resultado de la función: ' +  (a + b));
// })(3, 4);

// function miFuncion(a,b){
//     console.log(arguments.length);
//     return a + b;
// }

// console.log(typeof miFuncion);

// var miFuncionTexto = miFuncion.toString();
// console.log(miFuncionTexto);

// let resultado = sumarTodo(1, 2, 3, 4, 5);
// console.log(resultado);

// function sumarTodo(){
//     let suma = 0;
//     for(let i = 0; i < arguments.length; i++){
//         suma += arguments[i]; //suma = suma + arguments[i]
//     }
//     return suma;
// }

//Paso por valor
// let x = 10;

// function cambiarValor(a){
//     a = 20;
// }

// cambiarValor(x);
// console.log(x);

//Paso por referencia

const persona = {
    nombre: 'Almudena',
    apellido: 'García'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Leonor',
    p1.apellido = 'Perez'
}

cambiarValorObjeto( persona );
console.log(persona);
