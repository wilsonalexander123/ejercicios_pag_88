let dinero_a_recibir=+prompt("ingrese la cantidad de dinero que recibira en diciembre ");
if (dinero_a_recibir>=50000) {
    console.log("usted Recibira el PAQUETE A el cual incluira una television, un modular, tres pares de zapatos ,cinco camisas y cinco panalones");
}
    else {
        if (dinero_a_recibir <50000    && dinero_a_recibir>=20000) {
            console.log("usted Recibira el PAQUETE B  el cual incluira UNA GRABADORA , TRES APRES DE ZAPATOS , CINCO CAMISAS Y CINCO PANTALOES");

        } else{
            if (dinero_a_recibir<20000 && dinero_a_recibir>=10000) {
                console.log("usted Recibira el PAQUETE C  el cual incluira DOS PAPRES DE ZAPATOS , TRES CAMISAS Y TRES PANTALOES");
            }
            else{
                if (dinero_a_recibir<10000) {
                    console.log("usted Recibira el PAQUETE D el cual incluira UN PAR DE ZAPATOS ,DOS CAMISAS Y DOS PANTALOES");
                }
            }

        }

    }    
