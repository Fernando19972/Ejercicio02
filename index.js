
   var i = 0;
   var  imagen = ["02.png","01.png","02.png","01.png"];
   var estado;

function cambiarimagen(){
 
  document.getElementById("imagen").src="img/"+imagen[i];
  i++;

  if(i>=imagen.length){
      i=0;
  }
  estado = setTimeout("cambiarimagen()", 1000);
}


function seleccion(){

    var selec = document.getElementById('categorias').value;
    var muestra = document.getElementById("seleccionado-option");
    var mosprecio = document.getElementById("seleccionado-precio");
    var cod = document.getElementById("codigo");
    var producto;
    var precio ;
    var codigo;
    if(selec=="b"){
        precio = 2500;
        codigo = "P-00050";
       }
       else if(selec=="c"){
        precio = 2000;
        codigo = "P-00075";
       }
       else if(selec=="d"){
        precio = 1500;
        codigo = "P-00028";
       }

    if(selec=="b"){
     muestra.innerHTML="TECNOLOGIA";
        mosprecio.innerHTML="S\."+precio;
        cod.innerHTML=""+codigo;
    }
    else if(selec=="c"){
        muestra.innerHTML="ELECTRODOMESTICOS";
        mosprecio.innerHTML="S\."+precio;
        cod.innerHTML=""+codigo;
    }
    else if(selec=="d"){
        muestra.innerHTML="CARROS";
        mosprecio.innerHTML="S\."+precio;
        cod.innerHTML=""+codigo;
    }
   

}


function registrarProducto(){

    var codigo = document.getElementById("codpro").value;
    var nombre = document.getElementById("nompro").value;
    var stock = document.getElementById("stockpro").value;
    var precio = document.getElementById("prepro").value;
   
    var celdacodigo,celdanombre,celdastock,celdaprecio,celdatotal;


    var tabla = document.getElementById("tabla-registro");
    var numfilar = tabla.rows.length;

    var fila = tabla.insertRow(numfilar);

    if(codigo & nombre & stock & precio == ""){
        alert("Ingrese Correctamente los datos ");
        
    }
    else{
        celdacodigo = fila.insertCell(0);
        celdanombre =  fila.insertCell(1);
        celdastock = fila.insertCell(2);
        celdaprecio = fila.insertCell(3);
        celdatotal = fila.insertCell(4);
    
        celdacodigo.innerHTML="P-"+codigo;
        celdanombre.innerHTML=nombre;
        celdastock.innerHTML=stock+"uni.";
        celdaprecio.innerHTML="S/."+precio;
        celdatotal.innerHTML=stock*precio;
    }

    
}


function mostrarprecio(){
    
    var productos = document.getElementById("productos").value;

    if(productos=="c"){
       
        document.getElementById("precio").value=530;
    }
    else if(productos=="l"){
        document.getElementById("precio").value=1560;

    }
    else if(productos=="t"){
      
        document.getElementById("precio").value=2200;

    }
    else{
        alert("DEBE SELECCIONAR UN PRODUCTO");
        return false;
        
    }
}

function procesarCompra(){

    mostrarprecio();
    
    var productos = document.getElementById("productos").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    var vale = document.getElementById("vale").value;
    var total;
    var nomnre;
    var descuento = 50;

    if(tienevale==1){
        total = (precio*cantidad)-descuento;
    }
    else{
        total = precio*cantidad;   
    }

    if(cantidad=="" || cantidad==0){
        alert("INGRESA UNA CANTIDAD");
        return false;
    }
    else{

    }

    alert("TOTAL A PAGAR"+total);


    var celdaproducto,celdacantidad,celdavale,celdatotal;

    var tabla = document.getElementById("tabla_venta");
    var numfilar = tabla.rows.length;

    var fila = tabla.insertRow(numfilar);

        celdaproducto = fila.insertCell(0);
        celdacantidad =  fila.insertCell(1);
        celdavale = fila.insertCell(2);
        celdatotal = fila.insertCell(3);

        celdaproducto.innerHTML=""+productos;
        celdacantidad.innerHTML=""+cantidad;
        celdavale.innerHTML=""+vale;
        celdatotal.innerHTML=""+total;

    



/***************************************/
    


}
var tienevale = 0;
var respue;
function valedescuento(){
    var btn_vale = document.getElementById("btn_vale");
    var codigoAutorizado = "PPK123"
    var codigoVale = prompt("INGRESE SU VALE DE DESCUENTO","");
    if(codigoVale ==codigoAutorizado){
        document.getElementById("vale").value="APLICA";
        btn_vale.disabled=true;
        tienevale = 1;
        respue="si";
    }
    else{
        document.getElementById("vale").value="NO APLICA";
        btn_vale.disabled=true;
        tienevale = 0;
        respue="no";
    }
}



var medidaactual = window.pageYOffset;
window.onscroll = function(){
    var desplazamiento = pageYOffset;

    if(medidaactual>=desplazamiento){
        document.getElementById('header').style.top="0";
    }
    else{
        document.getElementById('header').style.top="-100%";
    }

    medidaactual=desplazamiento;
}