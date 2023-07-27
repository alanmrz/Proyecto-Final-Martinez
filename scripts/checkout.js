const recuperarHotel = ()=> JSON.parse(localStorage.getItem('miHotel')) || []
const carritoHotel = recuperarHotel()

document.getElementById("mostrardatos").innerHTML= "El hotel elegido fue "+carritoHotel.nombre