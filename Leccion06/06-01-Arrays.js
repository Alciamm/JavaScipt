//let coches = NewArray('Skoda', 'BMW, 'Volvo');

const coches = ['Skoda', 'BMW', 'Volvo'];
console.log(coches);

console.log(coches[0]);
console.log(coches[2]);

for(let i = 0; i < coches.length; i++){
    console.log(i + ' : ' + coches[i]);
}

coches[1] = "SkodaAuto";
console.log(coches[1]);

coches.push('Audi');
console.log(coches);

coches[0] = "BMW";
console.log(coches[0]);
console.log(coches);

coches[4] = 'Cadillac';
console.log(coches);

console.log(typeof coches);

console.log( Array.isArray(coches));

console.log(coches instanceof Array);