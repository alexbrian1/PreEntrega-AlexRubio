
// let stock = 0;
// let precio = 0;

// while (precio === 0 ) {
//     let genetica = prompt("Ingrese el nombre de la genetica que desea comprar");
//     switch (genetica) {
//         case "ogkush":
//         case "og kush":
//         case "Og Kush":
//         case "OgKush":
//             stock = 0;
            

//             if (stock < 1) {
//                 alert("Lo sentimos no nos queda stock de " + genetica);
                
//             } else{
//                 precio = 2000;
//                 alert("El precio de sus semillas es: $" + precio);
//             }

//             break;

//         case "lemonhaze":
//         case "lemon haze":
//         case "Lemon Haze":
//         case "LemonHaze":
//             stock = 1;
            
//             if (stock < 1) {
//                 alert("Lo sentimos no nos queda stock de " + genetica);
                
//             } else{
//                 precio = 2500;
//                 alert("El precio de sus semillas es: $" + precio);
//             }

    
            
//             break;
//         case "purplekush":
//         case "purple kush":
//         case "Purple Kush":
//         case "PurpleKush":
//             stock = 0;

//             if (stock < 1) {
//                 alert("Lo sentimos no nos queda stock de " + genetica);
                
//             } else{
//                 precio = 4500;
//                 alert("El precio de sus semillas es: $" + precio);
//             }

    
//             break;
//         case "superskunk":
//         case "supers kunk":
//         case "Super Skunk":
//         case "SuperSkunk":
//             stock = 4;
            
//             if (stock < 1) {
//                 alert("Lo sentimos no nos queda stock de " + genetica);
                
//             } else{
//                 precio = 2500;
//                 alert("El precio de sus semillas es: $" + precio);
//             }

    
    
            
//             break;
//         case "mobydick":
//         case "moby dick":
//             case "Moby Dick":
//         case "MobyDick":
//             stock = 7;
            
//             if (stock < 1) {
//                 alert("Lo sentimos no nos queda stock de " + genetica);
                
//             } else{
//                 precio = 3000;
//                 alert("El precio de sus semillas es: $" + precio);
//             }

    
    
            
//             break;
//         case "gelato44":

//         case "Gelato44":
//             stock = 3;
            
//             if (stock < 1) {
//                 alert("Lo sentimos no nos queda stock de " + genetica);
                
//             } else{
//                 precio = 5000;
//                 alert("El precio de sus semillas es: $" + precio);
//             }

    
    
            
//             break;
    
//         default:
//             alert("Ingrese una Genetica Disponible")
//             break;
//     }
// }

// // alert("El precio de sus semillas es: $" + precio);

let stock = 0;
let precio = 0;
function stockear() {
    if (stock < 1) {

        alert("Lo sentimos no nos queda stock de " + genetica);
        //
        
    } else{
        // precio = 0;
        alert("El precio de sus semillas es: $" + precio);
    }
}
while (precio === 0 || stock <1 ) {
    let genetica = prompt("Ingrese el nombre de la genetica que desea comprar");
    switch (genetica) {
        case "ogkush":
        case "og kush":
        case "Og Kush":
        case "OgKush":
            stock = 2;
            precio = 2000;
            stockear();
          

            break;

        case "lemonhaze":
        case "lemon haze":
        case "Lemon Haze":
        case "LemonHaze":
            stock = 1;
            precio = 2500;

            
           
            stockear();

    
            
            break;
        case "purplekush":
        case "purple kush":
        case "Purple Kush":
        case "PurpleKush":
            stock = 0;
                        // Cuando solicitaba la genetica que no habia stock la funcion no me generaba el "alert("Lo sentimos no nos queda stock de " + genetica);"
                        //En el resto la funcion stokear da lo esperado pero cuando fuerzo la funcion para ejecutar la primera condicion  no funciona
                        //Tampoco puede resolverlo.
                       if (stock < 1) {
                            alert("Lo sentimos no nos queda stock de " + genetica);
                    
                        } else{
                           precio = 4500;
                            alert("El precio de sus semillas es: $" + precio);
                        }

                    
            

    
            break;
        case "superskunk":
        case "supers kunk":
        case "Super Skunk":
        case "SuperSkunk":
            stock = 4;
            precio = 2500;

            
            stockear();
          
    
            
            break;
        case "mobydick":
        case "moby dick":
            case "Moby Dick":
        case "MobyDick":
            stock = 7;
            precio = 3000;

        
            stockear();
    
    
            
            break;
        case "gelato44":
        case "Gelato44":
            stock = 3;
            precio = 5000;

            
    
            stockear();
    
    
            
            break;
    
        default:
            alert("Ingrese una Genetica Disponible")
            break;
    }
}

// // alert("El precio de sus semillas es: $" + precio);
