//let a = 3, b = 2;
//let z = a + b;
//console.log("El resultado de la suma es:"+ z);

// z = a - b;
// console.log("El resultado de la resta es: " + z);

// z = a * b;
// console.log("El resultado de la multiplicacion es: " + z);

// z = a / b;
// console.log("El resultado de la division es: " + z);

// z = a % b;
// console.log("El resto de la division es: " + z);

// z = a ** b;
// console.log("El resultado del operador exponente: " + z);

// z = --a;
// console.log(a);
// console.log(z);

// z = b--;
// console.log(b);
// console.log(z);

// let a = 3, b = 2, c = 1, d = 4;

// let z = a * b + c / d;
// console.log(z);

// z = c + a * b / d;
// console.log(z);

// z = (c + a) * b / c;
// console.log(z);

// let a = 1;

// a += 3;
// console.log(a);

// a-= 2;
//console.log(a);

// let a = 3, b = 3, c = "3";

// let z = a == b;
// console.log(z);

// z = a === c;
// console.log(z);

// let z = a != c;
// console.log(z);

// z = a !== c;
// console.log(z);

// let a =3, b = 3, c = "3";

// let z = a < b;
// console.log(z);

//z = a <= b;
// console.log(z);

// z = a > b;
// console.log(z);

// z = a >= b;
// console.log(z);

//let a = 9;

// if(a % 2 == 0)
// {
//     console.log("Es un número par");
// }
// else{
//     console.log("Es un número impar");
// }

//let edad = 5; adulto = 18;

// if(edad >= adulto)
// {
//     console.log("Es un adulto");
// }
// else{
//     console.log("Es menor de edad");
// }

//let a = 5, valMin = 0, valMax = 10;

// if(a >= valMin && a <= valMax)
// {
//     console.log("Esta dentro del rango");
// }
// else{
//     console.log("Esta fuera de rango");
// }

//let vacaciones = true, diaDescanso = false;

// if(vacaciones || diaDescanso)
// {
//     console.log("El padre puede jugar con el hijo");
// }
// else{
//     console.log("El padre esta ocupado");
// }

// let resultado = (3 > 2) ? "true" : "false";
// console.log(resultado);

// let numero = 8;
// resultado = (numero % 2 == 0) ? "Es un número par" : "Es un número impar";
// console.log(resultado);

// let miNumero = 26;
// let edad = Number(miNumero);
// let resultado = (edad >= 18) ? "Puede votar" : "Es demasiado joven";
// console.log(resultado);

let miNumero = "25";

let edad = Number(miNumero);
console.log(edad);

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Es demasiado joven para votar");
    }
}

