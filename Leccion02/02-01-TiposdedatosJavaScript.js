/*
Ejemplos de 
tipos de datos
en JavaScript
*/
//Tipo de dato string
var nombre = "Alicia";
console.log(nombre);

var numero = 1000;
console.log(numero);

var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(objeto);

nombre = 10;
console.log( typeof nombre); /* Para saber el tipo de la variable */

var bandera = false;
console.log(typeof bandera);

var simbolo = Symbol("mi simbolo");
console.log(simbolo);

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

var x;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

var coches = ['BMW', 'Audi', 'Volvo'];
console.log(typeof coches);

var z = '';
console.log(z);

var nombre = 'Alicia';
var apellido = 'Moncayo';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Alicia' + ' ' + 'en' + ' ' + 'el' + ' ' + 'pais' + ' ' + 'de' + ' ' + 'las' + ' ' + 'maravillas';
console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);
