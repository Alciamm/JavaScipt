//let count = 0;
// while( count < 3 ){
//     console.log(count);
//     count++;
// }

// let contador = 0;

// do{
//     console.log(contador);
//     contador++;
// }while(contador < 3);
// console.log("Fin del ciclo do while");


// for(let count = 0; count < 3; count++){
//     console.log(count);
// }
// console.log("Fin del ciclo for");

// for(let count = 0; count <= 10; count++){
//     if(count % 2 == 0){
//         console.log(count);
//         break;
//     }
// }
// console.log("Fin del ciclo for");

// for(count = 0; count <= 10; count++){
//     if(count % 2 !== 0){
//         continue;
//     }
//     else{
//         console.log(count);
//     }
// }
// console.log("Fin del ciclo for");

inicio:
for(count = 0; count <= 10; count++){
    if(count % 2 !== 0){
        continue inicio;
    }
    else{
        console.log(count);
    }
}
console.log("Fin del ciclo for");

