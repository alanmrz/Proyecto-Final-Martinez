
let selecUbicacion = document.getElementById("ubicacion")
let selecHoteles = document.getElementById("hoteles")
let container = document.getElementById("container")
container.innerHTML= ''

function provElegida(valor){
    container.innerHTML= ''
    hoteles.forEach((element) =>{
                if(element.ubicacion==valor){       
                container.innerHTML +=`<div class="div-card">
                
                
                <div class="provincia"><p>${element.nombre}</p></div>
                
                <button value="${element.codigo}" onclick="mostrarHotelElegido(this.value)" >Ver hotel</button>
            </div>`
                }
            


    }
     )
}

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


  function mostrarHotelElegido(value){

    container.innerHTML= ''
    let mostrarHotel =hoteles.find((hotelElegido)=> hotelElegido.codigo == parseInt(value))
    
    Swal.fire({
        title: 'Continuar compra',
        text: "A un paso de finalizar el proceso",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            `Elegiste ${mostrarHotel.nombre}, te dirigiras a la pagina para finalizar la compra`,
        '',
        'success'
          )
        }
      })
    
  }
  function cargarProvincias(){
    provincias.forEach((elemento) => selecUbicacion.innerHTML += `<option value="${elemento.nombre}">${elemento.nombre}</option>`)
    

}
function obtenerProvincias() {
    fetch(URL)
        .then((response)=> response.json() )
        .then((datos)=> provincias.push(...datos) )
        .then(()=> cargarProvincias())
        .catch((error)=> console.error('Error al obtener los datos', error))
}
    





