/* class Ejecutable extends Cuenta {
    constructor (cuenta, ejecutable){
        super(cuenta);
        this.ejecutable=ejecutable;
    }

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


} */
