let tiempo_de_trabajo=+prompt("ingrese el numero de años que ha laborado el trabajador");
let sueldo_basico=+prompt("ingrese el sueldo basico del trabajador");


let sueldo_total_antiguedad=0;
let sueldo_total_por_monto=0;


if (tiempo_de_trabajo>2  && tiempo_de_trabajo < 5   ) {
    sueldo_total_antiguedad= sueldo_basico+(0.20*sueldo_basico);
    }
    else {

        sueldo_total_antiguedad= sueldo_basico+(0.30*sueldo_basico);
    
        } 
    
if (sueldo_basico < 1000 ) {
    sueldo_total_por_monto= sueldo_basico+(0.25*sueldo_basico);
        if(sueldo_basico> 1000 && sueldo_basico<= 3500){
            sueldo_total_por_monto= sueldo_basico+(0.15*sueldo_basico);
             if( sueldo_basico> 3500){
                  sueldo_total_por_monto= sueldo_basico+(0.10*sueldo_basico);
                
                    }
            
                }
                                        
           }
if(sueldo_total_antiguedad> sueldo_total_por_monto){
    console.log(`El trabajador recibira el siguiente bono: ${sueldo_total_antiguedad-sueldo_basico}  dolares de bono`);

} else{
    console.log(`El trabajador recibira el siguiente bono: ${sueldo_total_por_monto-sueldo_basico}  dolares de bono`);
}
     


