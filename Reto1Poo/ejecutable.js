class Ejecutable extends Cuenta {
    constructor (cuenta, ejecutable){
        super(cuenta);
        this.ejecutable=ejecutable;
    }
}

titular = document.getElementById("Titular").value;
cantidad = Number(document.getElementById("CantidadOr").value);
cantIngreso = document.getElementById("cantIngreso").value;
cantRetiro = Number(document.getElementById("cantRetiro").value);

function btnBienvenidaHandler(){
    var space__Answer_paragraph = document.createElement("p");

    space__Answer_paragraph.innerHTML= `Bienvenid@ ${Ejecutable.titular} tu nueva cuenta tiene ${Ejecutable.cantidad}`;

    document.getElementById("ResBienvenida").appendChild(space__Answer_paragraph);
}
