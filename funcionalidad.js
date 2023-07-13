
let selecUbicacion = document.getElementById("ubicacion")
let selecHoteles = document.getElementById("hoteles")




let container = document.getElementById("container")
container.innerHTML= ''


//cargarProvincias()
obtenerProvincias()
selecUbicacion.addEventListener("change",()=>{
    selecHoteles.innerHTML =''

    provElegida(selecUbicacion.value)
    
})

if(localStorage.getItem("usuario")){
    document.getElementById("inicioSesion").innerHTML= "Bienvenido "+localStorage.getItem("usuario")
    document.getElementById("inputSearch").hidden=true
    document.getElementById("btnSesion").hidden=true
    
}

function ingresarNombre(){
    let nombre = document.getElementById("inputSearch")
    let prueba =nombre.value.trim()
    if(prueba != ''){
    document.getElementById("inicioSesion").innerHTML= "Bienvenido "+ prueba 
    nombre.hidden= true
    document.getElementById("btnSesion").hidden=true
    localStorage.setItem("usuario",prueba)
    
    }


}
// function cargarDatos(hoteles){
//         hoteles.forEach(element => {
//             container.innerHTML +=retornoCardHTML(element);
//         })  
       
//         }

    function retornoCardHTML(provincia) {
        return `<div class="div-card">
                    <div class="imagen"><h1><img class="imagen" src = "${provincia.imagen}"></h1></div>
                    
                    <div class="provincia"><p>${provincia.nombre}</p></div>
                    
                    <button value="${provincia.nombre}" onclick="provElegida(this.value)" >Ver hoteles</button>
                </div>`
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
    
    Swal.fire(
        `Elegiste ${mostrarHotel.nombre}`,
        '',
        'success'
      )
  }
  function cargarProvincias(){
    provincias.forEach((elemento) => selecUbicacion.innerHTML += `<option value="${elemento.nombre}">${elemento.nombre}</option>`)
    

}
function obtenerProvincias() {
    fetch(URL)
        .then((response)=> response.json() ) //controlar el asincronismo de la petición fetch
        .then((datos)=> provincias.push(...datos) )
        .then(()=> cargarProvincias())
        .catch((error)=> console.error('Error al obtener los datos', error))
}
    





