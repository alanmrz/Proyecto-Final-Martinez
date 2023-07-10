
let selecUbicacion = document.getElementById("ubicacion")
let selecHoteles = document.getElementById("hoteles")


let provincias =[]
provincias.push(new prov("Buenos Aires","img/bsas.jpg"))
provincias.push(new prov("Cordoba","img/cba.jpg"))
provincias.push(new prov("Bariloche","img/bariloche.jpg"))

let container = document.getElementById("container")
container.innerHTML= ''
let hoteles = []

hoteles.push(new hotel("Mar del plata","Buenos Aires",1))
hoteles.push(new hotel("Capital","Buenos Aires",2))
hoteles.push(new hotel("Nordelta","Buenos Aires",3))
hoteles.push(new hotel("Hotel San carlos de bariloche","Bariloche",4))
hoteles.push(new hotel("Hotel Patagonia","Bariloche",5))
hoteles.push(new hotel("Hotel Tres Reyes","Bariloche",6))
hoteles.push(new hotel("Hotel villa maria","Cordoba",7))
hoteles.push(new hotel("Hotel Cordoba","Cordoba",8))
hoteles.push(new hotel("Hotel Carlos paz","Cordoba",9))

provincias.forEach((elemento) => selecUbicacion.innerHTML += `<option value="${elemento.nombre}">${elemento.nombre}</option>`)

selecUbicacion.addEventListener("change",()=>{
    selecHoteles.innerHTML =''
    // selecHoteles.hidden= false
    // hoteles.forEach((element)=>{
    //     if(element.ubicacion=== selecUbicacion.value){
    //         selecHoteles.innerHTML += `<option value="${element.nombre}">${element.nombre}</option>`
    //     }
    // })
    provElegida(selecUbicacion.value)
    
})

if(localStorage.getItem("usuario")){
    document.getElementById("inicioSesion").innerHTML= "Bienvenido "+localStorage.getItem("usuario")
    document.getElementById("inputSearch").hidden=true
    document.getElementById("btnSesion").hidden=true
    //cargarDatos(provincias)
}

function ingresarNombre(){
    let nombre = document.getElementById("inputSearch")
    let prueba =nombre.value.trim()
    if(prueba != ''){
    document.getElementById("inicioSesion").innerHTML= "Bienvenido "+ prueba 
    nombre.hidden= true
    document.getElementById("btnSesion").hidden=true
    localStorage.setItem("usuario",prueba)
    //cargarDatos(provincias)
    }


}
function cargarDatos(hoteles){
        hoteles.forEach(element => {
            container.innerHTML +=retornoCardHTML(element);
        })  
       
        }

    function retornoCardHTML(provincia) {
        return `<div class="div-card">
                    <div class="imagen"><h1><img class="imagen" src = "${provincia.imagen}"></h1></div>
                    
                    <div class="provincia"><p>${provincia.nombre}</p></div>
                    
                    <button value="${provincia.nombre}" onclick="provElegida(this.value)" >Ver hoteles</button>
                </div>` //button button-outline 
    }
    function provElegida(valor){
        container.innerHTML= ''
        hoteles.forEach((element) =>{
                    if(element.ubicacion==valor){       
                    container.innerHTML +=`<div class="div-card">
                    
                    
                    <div class="provincia"><p>${element.nombre}</p></div>
                    
                    <button value="${element.codigo}" onclick="mostrarHotelElegido(this.value)" >Ver hoteles</button>
                </div>`
                    }
                


        }
         )
  }
  function mostrarHotelElegido(value){

    container.innerHTML= ''
    let mostrarHotel =hoteles.find((hotelElegido)=> hotelElegido.codigo == parseInt(value))
    //container.innerHTML += `<div class="provincia"><p>Usted eligio el hotel ${mostrarHotel.nombre}</p></div>`
    Swal.fire(
        `Elegiste ${mostrarHotel.nombre}`,
        'You clicked the button!',
        'success'
      )
  }

    





