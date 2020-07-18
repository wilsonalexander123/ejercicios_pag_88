
let monto_de_dinero=+prompt("ingrese el monto que tiene de dinero en dolares");

if (monto_de_dinero<=10) {
    console.log(`Usted puede darle de Regalo a su ser amado una Tarjeta`);
} 

if (monto_de_dinero<=100 && monto_de_dinero>=11) {
    console.log(`Usted puede darle de Regalo a su ser amado CHOCOLATES`);
} 
if (monto_de_dinero<=250 && monto_de_dinero>=101) {
    console.log(`Usted puede darle de Regalo a su ser amado FLORES`);
} 
if ( monto_de_dinero>=251) {
    console.log(`Usted puede darle de Regalo a su ser amado UN ANILLO`);
} 