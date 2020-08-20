let Persona = class Persona {
    constructor (nombre, edad, DNI, sexo, peso, altura) {



        this.nombre = nombre  || '';
        this.edad = edad || '0';
        this.DNI = DNI;
        const sexodefault = 'Hombre';
        this.sex = sexo || sexodefault;
        this.peso= peso+'Kg' || '0'+'Kg';
        this.altura = altura+'cm' || '0'+'cm';
    }
    constructor (nombre, edad, sexo) {
        this.nombre = nombre ;
        this.edad = edad;
        this.DNI = DNI;
        const sex = sexo;
        this.peso= peso;
        this.altura = altura;
    }
    constructor (nombre, edad, DNI, sexo, peso, altura) {
        this.nombre = nombre ;
        this.edad = edad;
        this.DNI = DNI;
        const sex = sexo;
        this.peso= peso;
        this.altura = altura;
    }
}

let Ejecutable = class Ejecutable {
    constructor () {
        esMayorDeEdad
        comprobarSexo
        toString
    }
}
