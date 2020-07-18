
let numero_horas_en_estacionamiento=+prompt("ingrese el numero de horas de parqueo en el estacionamiento");
let total_cobrar=0;

if (numero_horas_en_estacionamiento<3  ) {
    total_cobrar= (numero_horas_en_estacionamiento*5);
    
    } 

    if ( numero_horas_en_estacionamiento>=3 && numero_horas_en_estacionamiento<=5) {
            total_cobrar=(numero_horas_en_estacionamiento-3+1)*4+2*5;
            
     } 

if (numero_horas_en_estacionamiento>5 && numero_horas_en_estacionamiento<=10 ) {
        total_cobrar=(numero_horas_en_estacionamiento-5)*3+2*5+3*4;
       }

 if(numero_horas_en_estacionamiento>10){
    total_cobrar=2*(numero_horas_en_estacionamiento-10) +2*5+3*4+5*3;

    }
                            
         
            
console.log(`Usted debe de cobrar por el estacionamiento: ${total_cobrar}  pesos`);


