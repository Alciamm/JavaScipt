// let x = 10;
// console.log(x.length);

// let persona = {
//     nombre: 'Juan',
//     apellido: 'Lara',
//     email: 'jlara@mail.com',
//     edad: 28,
//     get nombreCompleto(){
//         return this.nombre + ' ' + this.apellido;
//     }
// }

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.email);
// console.log(persona.edad);
// console.log(persona);
// console.log(persona.nombreCompleto);

// let persona2 = new Object();
// persona2.nombre = 'Linda';
// persona2.direccion = 'Jupiter 15';
// persona2.telefono = '661 662 663';

// console.log(persona2.nombre);
// console.log(persona2.direccion);
// console.log(persona2.telefono);

// console.log( persona['apellido']);

//for in
// for( nombrePropiedad in persona){
//     console.log( nombrePropiedad );
//     console.log(persona[nombrePropiedad]);
// }

// persona.tel = '666 555 444';
// console.log( persona );

// delete persona.tel;

// console.log( persona );

//Concatenar valores
// console.log( persona.nombre + ', ' + persona.apellido);

//for in
// for( nombrePropiedad in persona){
//     console.log( persona[nombrePropiedad] );
// }

// let personaArray = Object.values( persona );
// console.log( personaArray );

// let personaString = JSON.stringify( persona );
// console.log( personaString ); 

// let persona = {
//     nombre: 'Juan',
//     apellido: 'Lara',
//     email: 'jlara@mail.com',
//     edad: 28,
//     idioma: 'es',
//     get lang(){
//         return this.idioma.toUpperCase();
//     },
//     set lang( lang ){
//         this.idioma = lang.toUpperCase();
//     }
// }
//     console.log(persona.lang);

//     persona.lang = 'EN';

//     console.log(persona.lang);
//     console.log(persona.idioma);

// function Persona(nombre, apellido, email){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.email = email;
//     this.nombreCompleto = function(){
//         return this.nombre + ' ' + this.apellido;
//     }
// }

// Persona.prototype.tel = '666555444';

// let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
// padre.tel = '611622633';
// console.log(padre.tel);
// console.log( padre.nombreCompleto );

// let madre = new Persona('Ana', 'Quintero', 'lquintero@mail.com');
// madre.tel = '633644655';
// console.log(madre.tel);
// console.log( madre.nombreCompleto );

// padre.nombre = 'Pepe';
// console.log( padre );
// console.log( madre );

// let miObjeto = new Object();
// let miObjeto2 = {}; //Esta forma es la más recomendable

// let miCadena1 = new String('Hola');
// let miCadena2 = 'Hola'; //Esta forma es la más recomendable

// let miNumero = new Number(1);
// let miNumero2 = 2; //Esta forma es la más recomendable

// let miBoolean = new Boolean(false);
// let miBoolean2 = false; //Esta forma es la más recomendable

// let miArray1 = new Array();
// let miArray2 = []; //Esta forma es la más recomendable

// let miFuncion = new Function();
// let miFuncion2 = function(){}; //Esta forma es la más recomendable

// let persona1 = {
//     nombre: 'Leonor',
//     apellido: 'Suarez',
//     nombreCompleto: function(titulo, tel){
//         return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
//     }
// }

// let persona2 = {
//     nombre: 'Luis',
//     apellido: 'Quintero'
// }

// //Uso de call para usar el metodo persona1.nombreCompleto
// //con los datos de la persona2
// console.log( persona1.nombreCompleto('Lic.', '655666677') );

// console.log(persona1.nombreCompleto.call( persona2, 'Ing', '633644655' ));


let persona1 = {
    nombre: 'Leonor',
    apellido: 'Suarez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Luis',
    apellido: 'Quintero'
}

//Uso de apply nos va a permitir mandar a llamar un metodo, en un 
//objeto que no tiene definido cierto metodo
console.log( persona1.nombreCompleto('Lic', '677688699') );

let array = ['Ing', '688699600'];
console.log(persona1.nombreCompleto.apply( persona2, array));