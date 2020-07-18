let tiempo_de_antiguedad=+prompt("ingrese el numero de años que ha laborado el trabajador");
if (tiempo_de_antiguedad===1) {
    bono=100;
}
  
if (tiempo_de_antiguedad===2) {
        bono=200;
}
       
if (tiempo_de_antiguedad===3) {
            bono=300;
}
  if (tiempo_de_antiguedad===4) {
                bono=400;
  }
 if (tiempo_de_antiguedad===5) {
                    bono=500 ;
      
}
if (tiempo_de_antiguedad>5) {
    bono=1000;
    
}
console.log(`el bono total a pagar es ${bono} dolares`);
