// Backend de los usuarios

let savedPIN = "6413";
let ingresar = false;

for (let i = 1; i <= 3; i++) {
    let userPIN = prompt("Ingresa tu contraseña.");
    if (userPIN == savedPIN) {
        alert("Bienvenido a MEDICINA DENTAL - Aprovecha nuestros descuentos, hasta un 20% de descuento desde la segunda consulta");
        ingresar = true;
        break
    }else{
        alert("Erro de contraseña, intentalo de nuevo")
    }

}

if (ingresar) {
    let fecha = 15012024;
    let opcion = prompt("\n1-Confirmar turnos \n2-Modificar turno \n3-Cancelar turnos \n4-Presione 4 si aun no cuentas con turno");
    while (opcion != "4" && opcion != "4") {
        switch (opcion){
            case "1": confirmacionTurnos()
                break
            case "2": alert("Su turno fue modificado")
                break
            case "3": alert("Su turno fue cancelado")
                break
        }
        opcion = prompt("\n1-Confirmar turnos \n2-Modificar turno \n3-Cancelar turnos \n4-Presione 4 si aun no cuentas con turno");
    }


    function confirmacionTurnos(){
        let turno = parseInt(prompt("Por favor confirmar fecha del turno"))
        if (turno == fecha){
            turno = fecha
            alert("Su turno fue confirmado con éxito")
        }else{
            alert("Su turno no existe")
        }
    }
}

const productos = [
    {id:1, nombre:"Consulta Medicina General", precio:8000},
    {id:2, nombre:"Consulta Pediatrica",  precio:9000},
    {id:3, nombre:"Consulta Odontologica", precio:10000},
    {id:4, nombre:"Instalación de Ortodoncia", precio:70000},
    {id:5, nombre:"Protesis Dental", precio:150000},

]

class Carrito {
    constructor() {
        this.productos = [];6413
        this.descuento = 20;
        this.maxProductosParaDescuento = 1;
        this.totalPagar = 0;
    }

    agregarProducto(id) {
        let producto = productos.find(prod => prod.id === id);
        console.log(producto);

        if (producto) {
            this.productos.push(producto);
            console.log("Agregaste el Producto #" + id + " al Carrito!");
        } else {
            console.log("No se encontró el Producto con #" + id + "!");
        }
    }

    listarCarrito() {
        let salida = "";

        this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
        })

        return salida;
    }

    calcularTotalProductos() {
        return this.productos.length;
    }

    aplicarDescuento() {
        if (this.calcularTotalProductos() >= this.maxProductosParaDescuento) {
            return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
        } else {
            return 0;
        }
    }

    calcularTotalPagar() {
        let total = 0;

        this.productos.forEach(item => {
           total += item.precio;
        });

        return total;


    }
}

function listarProductos() {
    let salida = "";

    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
    })

    return salida;
}

const carrito = new Carrito();
let opcionSeleccionada = 10;

while (opcionSeleccionada != 0) {
    opcionSeleccionada = parseInt(prompt("Seleccione el servicio a consultar: (0 para continuar/Salir)\n\n" + listarProductos()));

    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarProducto(opcionSeleccionada);
}

let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montoFinal = "Total abonar: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal);
