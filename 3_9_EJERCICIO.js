let tipo_de_poliza= prompt("ingrese el tipo de poliza(A)-COBERTURA AMPLIA  Y poliza(B)-DAÑO A TERCEROS ");
let total_a_pagar=0;
let edad=+prompt("Ingrese su edad");
let beber=prompt("responsa SI-usted bebe al conducir / NO-usted no bebe al conducir ");
let lentes=prompt("responsa SI-usted usa lentes / NO-usted no  usa lentes  ");
let enfermedad=prompt("responsa SI-usted padece alguna emfermedad como diabetes -deficiencia cardiaca / NO-usted no sufre ninguna enfermedad ");

if (tipo_de_poliza==="A" || tipo_de_poliza==="a") {
   
        if (beber==="si" || beber==="SI") {
            cont_beber=0.10*1200;
        
         }
        if (lentes==="si" || lentes==="SI") {
              cont_lentes=0.05*1200;
        }

    
        if (enfermedad==="si" || enfermedad==="SI") {
            cont_enfermedad=0.05*1200;
        
        }
        if ( edad>40 ) {
            cont_edad=0.20*1200;
        
        } else{
            cont_edad=0.10*1200;
        }
    total_a_pagar=1200+cont_beber+cont_lentes+cont_enfermedad+cont_edad;

    
}
if (tipo_de_poliza==="B" || tipo_de_poliza==="b") {
   
    if (beber==="si" || beber==="SI") {
        cont_beber=0.10*950;
    
     }
    if (lentes==="si" || lentes==="SI") {
          cont_lentes=0.05*950;
    }


    if (enfermedad==="si" || enfermedad==="SI") {
        cont_enfermedad=0.05*950;
    
    }
    if ( edad>40 ) {
        cont_enfermedad=0.20*950;
    
    } else{
        cont_edad=0.10*950;
    }
    total_a_pagar=950+cont_beber+cont_lentes+cont_enfermedad+cont_edad;

}
console.log(`el costo total de la poliza ${tipo_de_poliza} es ${total_a_pagar}`);
