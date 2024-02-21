function edad(anios){
    if (anios >= 18 ) {
        return true 
    }
    else{
        return false
        alert("Sos menor de edad,no podes acceder a este sitio");
    }
}

let cantidadproductos=document.getElementById("cantidadproductos")
let preciofinal= document.getElementById("preciofinal")
let botoncomprar=document.getElementById("botoncomprar")
let nombre=document.getElementById("nombre")
let mail=document.getElementById("mail")

let precioLag= 600
let precioSur= 500
let precioBoh= 400
let precio247= 300

let cajaprecio1= document.getElementById("precioLag");
let cajaprecio2= document.getElementById("precioSur");
let cajaprecio3= document.getElementById("precioBoh");
let cajaprecio4= document.getElementById("precio247");

let cantLag= document.getElementById("form1");
let cantSur= document.getElementById("form2");
let cantBoh= document.getElementById("form3");
let cant247= document.getElementById("form4");

let sumaprecio2 = cantLag.value * precioSur
let sumaprecio3 = cantLag.value * precioBoh
let sumaprecio4 = cantLag.value * precio247

cantLag.onchange=()=>{
    sumaprecio1 = cantLag.value * precioLag
    cajaprecio1.innerHTML= sumaprecio1 
    cantidadproductos.innerHTML=parseInt(cantLag.value)+parseInt(cantBoh.value)+parseInt(cantSur.value)+parseInt(cant247.value)
    preciofinal.innerHTML=parseInt(sumaprecio1)+parseInt(sumaprecio2)+parseInt(sumaprecio3)+parseInt(sumaprecio4)+2000
}

cantSur.onchange=()=>{
    sumaprecio2 = cantSur.value * precioSur
    cajaprecio2.innerHTML= sumaprecio2 
    cantidadproductos.innerHTML=parseInt(cantLag.value)+parseInt(cantBoh.value)+parseInt(cantSur.value)+parseInt(cant247.value)
    preciofinal.innerHTML=parseInt(sumaprecio1)+parseInt(sumaprecio2)+parseInt(sumaprecio3)+parseInt(sumaprecio4)+2000
}

cantBoh.onchange=()=>{
    sumaprecio3 = cantBoh.value * precioBoh
    cajaprecio3.innerHTML= sumaprecio3 
    cantidadproductos.innerHTML=parseInt(cantLag.value)+parseInt(cantBoh.value)+parseInt(cantSur.value)+parseInt(cant247.value)
    preciofinal.innerHTML=parseInt(sumaprecio1)+parseInt(sumaprecio2)+parseInt(sumaprecio3)+parseInt(sumaprecio4)+2000
}

cant247.onchange=()=>{
    sumaprecio4 = cant247.value * precio247
    cajaprecio4.innerHTML= sumaprecio4
    cantidadproductos.innerHTML=parseInt(cantLag.value)+parseInt(cantBoh.value)+parseInt(cantSur.value)+parseInt(cant247.value)
    preciofinal.innerHTML=parseInt(sumaprecio1)+parseInt(sumaprecio2)+parseInt(sumaprecio3)+parseInt(sumaprecio4)+2000
}

botoncomprar.onclick=()=>{
    localStorage.setItem("nombre",nombre.value)
    localStorage.setItem("mail",mail.value)
}

