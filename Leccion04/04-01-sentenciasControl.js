// let condicion = true;

// if(condicion){
//     console.log("Condición verdadera");
// }
// else{
//     console.log("Condición falsa");
// }

// let numero = 1;

// if(numero == 1){
//     console.log("Número uno");
// }
// else if(numero == 2){
//     console.log("Número dos");
// }
// else if(numero == 3){
//     console.log("Número tres");
// }
// else if(numero == 4){
//     console.log("Número cuatro");
// }
// else{
//     console.log("Número desconocido");
// }

// let mes = 7;
// let estacion;

// if(mes == 1 || mes == 2 || mes == 12){
//     estacion = "Invierno";
// }
// else if(mes == 3 || mes == 4 || mes == 5){
//     estacion = "Primavera";
// }
// else if(mes == 6 || mes == 7 || mes == 8){
//     estacion = "Verano";
// }
// else if(mes == 9 || mes == 10 || mes == 11){
//     estacion = "Otoño";
// }
// else{
//     console.log("Dato incorrecto");
// }

// console.log(estacion);

// let hora = 16;
// let mensaje;

// if(hora >= 6 && hora <= 11){
//     mensaje = "Buenos dias"; 
// }
// else if(hora >= 12 && hora <= 18){
//     mensaje = "Buenas tardes";
// }
// else if(hora >= 19 && hora <= 24){
//     mensaje = "Buenas noches";
// }
// else if(hora >= 0 && hora < 6){
//     mensaje = "Durmiendo";
// }
// else{
//     mensaje = "Hora incorrecta";
// }

// console.log(mensaje);

// let numero = 3;

// let numeroTexto = 'Valor desconocido';

// switch(numero){
//     case 1:
//         numeroTexto = 'número 1';
//         break;
//     case 2:
//         numeroTexto = 'número 2';
//         break;
//     case 3:
//         numeroTexto = 'número 3';
//         break;
//     default:
//         numeroTexto = 'Valor no encontrado';
// }

// console.log(numeroTexto);

let mes = 12;

let estacionDelAño = 'Estacion desconocida';

switch(mes){
    case 1: case 2: case 12:
        estacionDelAño = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacionDelAño = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacionDelAño = 'Verano';
        break;
    case 9: case 10: case 11:
        estacionDelAño = 'Otoño';
        break;
    default:
        estacionDelAño = 'Valor no encontrado';
}

console.log(estacionDelAño);