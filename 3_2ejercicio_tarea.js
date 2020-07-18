let hora_trajadas=+prompt("ingrese las horas trabajadas");
let pago_por_hora=+prompt("inrgese el pago por hora del trabajador");

if (hora_trajadas>40) {
    pago_total=40*pago_por_hora+(hora_trajadas-40)*2*pago_por_hora
} else{
    pago_total=hora_trajadas*pago_por_hora
}

console.log(`el sueldo semanal del tabajador es ${pago_total}`);