//let nombre = prompt("Ingresa tu Nombre por favor ");
//let apellido = prompt("Ingresa tu Apellido por favor");

//document.getElementById("persona").innerHTML= "Bienvenido "+ nombre+" "+ apellido
//let prov1= "Buenos Aires"
//let prov2= "Bariloche"
//let prov3= "Cordoba"
let provincias= "Elija su ubicacion \n 1. Buenos Aires \n 2. Bariloche \n 3. Cordoba";


let hoteles=""
let continuar = false;
let ubicacion
while(continuar==false){
    ubicacion=parseInt(prompt(provincias))
switch (ubicacion){
    case 1:
        continuar =confirm("Eligio Buenos Aires, Esta seguro de su eleccion?")
        break;

    case 2:
        continuar =confirm("Eligio Bariloche, Esta seguro de su eleccion?")
        break;
    case 3:
            continuar =confirm("Eligio Cordoba, Esta seguro de su eleccion?")
        break;
    default:
        
        alert("No eligio ninguna opcion correcta")
        break;
    }
}
if(ubicacion==1){
    hoteles= "Elija su hotel en Buenos Aires \n 1.Hotel Mar del plata \n 2.Hotel capital \n 3.Hotel Nordelta"
    //ubicacion= "Buenos aires"
    mostrarHoteles(hoteles);
}
if(ubicacion==3){
    hoteles= "Elija su hotel en Cordoba \n 1.Hotel villa maria \n 2.Cordoba capital \n 3.Carlos paz"
    //ubicacion= "Cordoba"
    mostrarHoteles(hoteles);
    
}
if(ubicacion==2){
    hoteles= "Elija su hotel en Bariloche \n 1.Hotel San carlos de bariloche \n 2.Hotel Patagonia \n 3.Hotel Tres Reyes"
    //ubicacion= "Bariloche"
    mostrarHoteles(hoteles);
    
}

function mostrarHoteles(descripcion){
    let elegirHotel=false
    while(elegirHotel==false){
    let hotelElegido=parseInt(prompt(descripcion))
    switch(hotelElegido){

    case 1:
        
        elegirHotel=true
        if(ubicacion===1 && hotelElegido===1){
            alert("Usted se hosperada en Buenos aires en el hotel mar del plata")
        }
        if(ubicacion===2 && hotelElegido===1){
            alert("Usted se hosperada en Bariloche en el hotel San carlos de bariloche")
        }
        if(ubicacion===3 && hotelElegido===1){
            alert("Usted se hosperada en Cordoba en el hotel Hotel villa maria")
        }
        
        break;
    
    case 2:
        if(ubicacion===1 && hotelElegido===2){
            alert("Usted se hosperada en Buenos aires en el hotel capital")
        }
        if(ubicacion===2 && hotelElegido===2){
            alert("Usted se hosperada en Bariloche en el hotel patagonia")
        }
        if(ubicacion===3 && hotelElegido===2){
            alert("Usted se hosperada en Cordoba en el Hotel cordoba capital")
        }
        elegirHotel=true
        break;
    case 3:
        if(ubicacion===1 && hotelElegido===3){
            alert("Usted se hosperada en Buenos aires en el hotel nordelta")
        }
        if(ubicacion===2 && hotelElegido===3){
            alert("Usted se hosperada en Bariloche en el hotel tres reyes")
        }
        if(ubicacion===3 && hotelElegido===3){
            alert("Usted se hosperada en Cordoba en el hotel carlos paz")
        }
        elegirHotel=true
        break;
    default:
        
        alert("No eligio ninguna opcion correcta")
        break;
    }

    }
    }







