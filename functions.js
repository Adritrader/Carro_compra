
//---===VARIABLES===---

var misProductos = new Array();
var idProducto;
let totalPrecio = 0;
 
// Creación del objeto
 
class Producto {
 
    constructor(descripcion, precio, cantidad) {
      this.descripcion = descripcion;
      this.precio = precio;
      this.cantidad = cantidad;
 
    }
}

//---===FUNCIONES===---

// Añadir producto a localStorage y al stock de la tienda

function addProduct() {
 
    // Recoger los datos de los inputs

    var descripcion = document.getElementById('descripcion').value;
    var precio = document.getElementById('precio').value;
    var cantidad = document.getElementById('qty').value;
 
    var miProducto = new Producto(descripcion, precio, cantidad);
 
    misProductos.push(miProducto);
 
    console.log(misProductos);

    //Guardar como string un objeto JSON en localStorage
 
    localStorage.setItem('Producto', JSON.stringify(misProductos));
 
 
}

// Obtener la lista de productos almacenados en el stock y disponerlos en forma de tabla
 
 
function obtenerProductos(){
 

    var listaGuardada = localStorage.getItem('Producto');
 
 
    if(listaGuardada == null){
 
        misProductos = [];
 
    } else {
 
        misProductos = JSON.parse(listaGuardada);
 
    }
 
    // Obtener el objeto JSON 

    var producto = JSON.parse(localStorage.getItem('Producto'));
 
    document.write("<table border=1>");
    document.write("<th></th><th>Descripcion</th><th>Precio</th><th>Cantidad</th><br>");
    document.write("<tr>");
 
 
    for (var item of producto) {
 
        document.write("<td><button onclick=genera_basket('" + `${item.descripcion}` + "','" + `${item.precio}` + "')>Añade</button></td>");
        document.write("<td>" + `${item.descripcion}` + "</td>");
        document.write("<td>" + `${item.precio}` + "</td>");
        document.write("<td>" + `${item.cantidad}` + "</td></tr>");
 
    }
 
    document.write("</tr>");
    document.write("</table><br><br>");
 
}
 
// Añadir productos al cesto de compra y mostrar el precio de la compra
 
function genera_basket(desc,precio) {
 
    console.log(desc,precio);
    document.write("<table border=1>");
    document.write("<th>Descripcion</th><th>Precio</th><br>");
    document.write("<tr>");
 
    for (let i=0;i< 1;i++) {
 
        if(misProductos.length == 0){
 
        } else {
 
            document.write('<tr><td>' + desc + '</td><td>' + precio + '</td>');
            document.write("</table>");
            
            //Obtener el precio total de los productos

            precio2 = parseInt(precio)
            totalPrecio += precio2;
            console.log(totalPrecio);

        }
 
     }

    document.write("El precio total de su compra es: " + totalPrecio);

  }
 
 // Cuenta atrás para el carrito
 
  function cuentaAtras() {

    myVar = setTimeout(function(){ alert("Se ha acabado el tiempo de compra") }, 80000);
 
  }