 //1 es piedra, 2  es papel, 3 es tijera

        //Creando function
        function aleatorioPC(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        //Esta funcion me retorna el resultado
        function eleccion(jugada) {

            let resultado = "";
            if (jugada == 1) {
                resultado = "piedra 🥌";
            } else if (jugada == 2) {
                resultado = " papel 🧾 ";
            } else if (jugada == 3) {
                resultado = " tijera ✂  ";
            } else {
                resultado = "Mal elegido";
            }
            return resultado
        }

        let jugador = 0;
        let pc = 0;
        let triunfos = 0;
        let perdidas = 0;

        while (triunfos < 3 && perdidas < 3) {
            pc = aleatorio(1, 3)

            jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
            //alert("Elegiste " + jugador)

            alert("Tu eliges: " + eleccion(jugador))

            alert("PC elige: " + eleccion(pc))

            //COMBATE
            if (pc == jugador) {
                alert("EMPATE")
            } else if (jugador == 1 && pc == 3) {
                alert("GANASTE ☀  ")
                triunfos = triunfos + 1
            } else if (jugador == 2 && pc == 1) {
                alert("GANASTE ☀  ")
                triunfos = triunfos + 1
            } else if (jugador == 3 && pc == 2) {
                alert("GANASTE ☀  ")
                triunfos = triunfos + 1
            } else {
                alert("PERDISTE pipipi")
                perdidas = perdidas + 1
            }

        }

        alert("GANASTE " + triunfos + "veces. Perdiste " + perdidas + "veces.")


