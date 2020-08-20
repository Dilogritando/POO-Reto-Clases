class Cuenta {
    constructor (titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
        if (typeof cantidad === 'undefined'){
            cantidad = 0;
        }
    };

    getCantidad(){
        return this.cantidad;
    };

    setCantidad(cant){
        this.cantidad = cant;
    };

    ingresar(cantIngreso){
        cantIngreso = Number(document.getElementById("cantIngreso").value);
        if (Math.sign(cantIngreso)===1) {
            this.cantidad = this.cantidad+cantIngreso;

            const ingreso__Answer_paragraph = document.createElement("p");
            ingreso__Answer_paragraph.innerHTML= `${this.titular} afortunadamente tienes ${this.cantidad}`;
            document.getElementById("ResIngreso").appendChild(ingreso__Answer_paragraph);
        } else {
            const ingreso__Answer_paragraph = document.createElement("p");
            ingreso__Answer_paragraph.innerHTML= `Ese número no cuadra. ¿Será que quieres retirar?`;
            document.getElementById("ResIngreso").appendChild(ingreso__Answer_paragraph);
        }
    };

    retirar(cantRetiro){
        cantRetiro = Number(document.getElementById("cantRetiro").value);
        if (cantRetiro<=this.cantidad && cantRetiro>0){
            this.cantidad = this.cantidad-cantRetiro;

            const retiro__Answer_paragraph = document.createElement("p");
            retiro__Answer_paragraph.innerHTML= `Tu nuevo saldo es ${this.cantidad}`;
            document.getElementById("ResRetiro").appendChild(retiro__Answer_paragraph);
        } else {
            this.setCantidad(0);

            const retiro__Answer_paragraph = document.createElement("p");
            retiro__Answer_paragraph.innerHTML=`Has retirado todo tu dinero. No puedes retirar más de lo que tenías`;

            document.getElementById("ResRetiro").appendChild(retiro__Answer_paragraph);
        }
    };
};

let cuentita = null;

function btnBienvenidaHandler(titular, cantidad){
    var titular = document.getElementById("Titular").value;
    var cantidad = Number(document.getElementById("CantidadOr").value);

    cuentita = new Cuenta(titular, cantidad);

    var space__Answer_paragraph = document.createElement("p");
    document.getElementById("ResBienvenida").appendChild(space__Answer_paragraph);
    space__Answer_paragraph.innerHTML= `Bienvenid@ ${cuentita.titular} tu nueva cuenta tiene ${cuentita.cantidad}`;
};

function btnIngresarHandler(){
    var cantIngreso = Number(document.getElementById("cantIngreso").value);
    return cuentita.ingresar(cantIngreso);
}

function btnRetiroHandler(){
    var cantRetiro = document.getElementById("cantRetiro").value;
    return cuentita.retirar(cantRetiro);
}
