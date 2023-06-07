//let nombre = prompt("Ingresa tu Nombre por favor ");
//let apellido = prompt("Ingresa tu Apellido por favor");

//document.getElementById("persona").innerHTML= "Bienvenido "+ nombre+" "+ apellido
//let prov1= "Buenos Aires"
//let prov2= "Bariloche"
//let prov3= "Cordoba"
let provincias= "Elija su ubicacion \n 1. Buenos Aires \n 2. Bariloche \n 3. Cordoba";

class hotel{
    constructor(nombre,ubicacion,codigo){
        this.nombre=nombre
        this.ubicacion=ubicacion
        this.codigo= codigo
    }
}
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
    
    let ubicacionElegida= []
    hoteles.forEach((e)=> {if(e.ubicacion.toLowerCase() == "Buenos Aires".toLowerCase()){
        
        ubicacionElegida.push(e)


        }
        
        }
    
    )
    mostrarHoteles(ubicacionElegida);
}
if(ubicacion==3){
    let ubicacionElegida= []
    hoteles.forEach((e)=> {if(e.ubicacion.toLowerCase() == "Cordoba".toLowerCase()){
        
        ubicacionElegida.push(e)


        }
        
        }
    
    )
    mostrarHoteles(ubicacionElegida);
    
}
if(ubicacion==2){
    let ubicacionElegida= []
    hoteles.forEach((e)=> {if(e.ubicacion.toLowerCase() == "Bariloche".toLowerCase()){
        
        ubicacionElegida.push(e)


        }
        
        }
    
    )
    mostrarHoteles(ubicacionElegida);
    
}

function mostrarHoteles(descripcion){
    let cont= 0
    let cartel= "Elija su hotel en "+ descripcion[0].ubicacion+ "\n"
    descripcion.forEach((e) => {
        cont++
        cartel+=cont + " " +e.nombre+ " \n"
    })
    
    let elegirHotel=false
    while(elegirHotel==false){
    let hotelElegido=parseInt(prompt(cartel))

    if(descripcion[hotelElegido-1]=== undefined){
        alert("Elija una opcion correcta")
    }
    else{
    
        alert("Usted se hospedara en "+ descripcion[hotelElegido-1].ubicacion +" en el hotel "+ descripcion[hotelElegido-1].nombre)
        elegirHotel= true
        }

    }
    }







