
//No es posible crear objetos antes de declarar la clase
//let persona2 = new Persona('Karla', 'Juarez');

// class Persona{

//     static contadorObjetosPersona = 0; //atributo de nuestra clase

//     email = 'Valor default email'; //atributo de nuestros objetos

//     constructor(nombre, apellido){
//         this._nombre = nombre;
//         this._apellido = apellido;
//         Persona.contadorObjetosPersona++;
//         console.log( 'Se incrementa contador:' + Persona.contadorObjetosPersona);
//     }

//     get nombre(){
//         return this._nombre;
//     }

//     set nombre(nombre){
//         this._nombre = nombre;
//     }

//     get apellido(){
//         return this._apellido;
//     }

//     set apellido(apellido){
//         this._apellido = apellido;
//     }

//     nombreCompleto(){
//         return this._nombre + ' ' + this._apellido;
//     }
        //Sobreescribiendo el metodo de la clase padre (Object)
//     toString(){
        //Se aplica polimorfismo
//         return this.nombreCompleto();
//     }
//     static saludar(){
//         console.log('hola desde metodo static');
//     }
//     static saludar2(persona){
//         console.log(persona.nombre);
//     }
// }

// class Empleado extends Persona{
//     constructor(nombre, apellido, departamento){
//         super(nombre, apellido);//Llamar al constructor de la clase padre
//         this._departamento = departamento;
//     }

//     get departamento(){
//         return this._departamento;
//     }

//     set departamento(departamento){
//         this._departamento = departamento;
//     }
        //Sobreescritura
//     nombreCompleto(){
//         return super.nombreCompleto() + ', ' + this._departamento;
//     }
// }

// let persona1 = new Persona('Emma', 'Suarez');
// persona1.nombre = 'Leonor'; //set nombre
// console.log( persona1.nombre ); //get nombre

// let persona2 = new Persona('Paloma', 'Ruiz');
// console.log( persona2 );

// let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
// console.log( empleado1 );
// console.log( empleado1.nombre );
// console.log( empleado1.nombreCompleto() );
// console.log( empleado1.toString());

// persona1.saludar(); No es posible llamar un metodo static desde un objeto
// Persona.saludar(); //Pero si desde una clase
// Persona.saludar2(persona1);

// Empleado.saludar();
// Empleado.saludar2(empleado1);

// console.log(persona1.contadorObjetosPersona); //NO posible
// console.log(Persona.contadorObjetosPersona); //Forma correcta

// console.log( Empleado.contadorObjetosPersona);

// console.log( persona1.email );
// console.log( empleado1.email );
// console.log(Persona.email); //Forma incorrecta
// console.log(Empleado.email); //Forma incorrecta


class Persona{

    static contadorPersonas = 0; //atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if( Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el maximo de objetos permitidos');
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase padre (Object)
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('hola desde metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//Llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    
        get departamento(){
            return this._departamento;
        }
    
        set departamento(departamento){
            this._departamento = departamento;
        }
        //Sobreescritura
        nombreCompleto(){
            return super.nombreCompleto() + ', ' + this._departamento;
        }
    }

    let persona1 = new Persona( 'Rebeca', 'Gonzalez');
    console.log( persona1.toString() );

    let empleado1 = new Empleado('Aurora', 'Jimenez', 'Sistemas');
    console.log( empleado1.toString() );

    console.log( Persona.contadorPersonas );

    let persona2 = new Persona( 'Eugenia', 'García');
    console.log( persona2.toString() );
    console.log( Persona.contadorPersonas );

    console.log( Persona.MAX_OBJ );
    Persona.MAX_OBJ = 10;
    console.log(Persona.MAX_OBJ);

    let persona3 = new Persona( 'Marcela', 'Lara');
    let persona4 = new Persona( 'Mirabel', 'Madrigal');
    let persona5 = new Persona( 'Alvaro', 'Suarez');
    let persona6 = new Persona( 'Marisol', 'Perez');
    console.log( persona4.toString() );