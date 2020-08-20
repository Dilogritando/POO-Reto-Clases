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
        cantIngreso = parseFloat(document.getElementById("cantIngreso").value);
        if (Math.sign(cantIngreso)===1) {
            suma = Number(Cuenta.cantidad)+Number(cantIngreso);
            Cuenta.setCantidad= suma

            let texto = `<p> Hola ${Cuenta.titular}. Tienes ${Cuenta.cantidad} en tu cuenta. </p>`;
        } else {
            let texto = `<p> Hola ${Cuenta.titular}. Ese número no cuadra. ¿Será que quieres retirar?</p>`;
        }
        return document.getElementById("ResConsig").appendChild(texto);
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
    console.log(cuentita);

};

function btnRetiroHandler(){
    var cantRetiro = document.getElementById("cantRetiro").value;
    return cuentita.retirar(cantRetiro);
}

/* function btnRetiroHandler(cantRetiro){
    var cantRetiro = document.getElementById("cantRetiro").value;
    var space__Answer_retiro = document.createElement("p");

    space__Answer_paragraph.innerHTML= `Hola ${titular} tu cuenta tiene ${cantidad}`;
    document.getElementById("ResRetiro").appendChild(space__Answer_paragraph);
    return space__Answer_retiro.innerHTML=
}; */
