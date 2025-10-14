function iniciarJuego() {

    let contador = 0;

    document.getElementById('contenido-juego').innerHTML = `
        <h1 id="titulo-juego">🎲 Dados Malditos</h1>
        <div id="contenedor-reloj-juego">
            <div id="reloj-juego"></div>
        </div>

        <div id="contador-central">
            <p>Veces que sorteaste: <span id="contador-dados">0</span></p>
        </div>

        <div id="resultado-dados"></div>
        <div id="botones-finales">
            <button class="boton-juego" onclick="tirarDados()">Tirar Dados</button>
            <button class="boton-juego" onclick="reiniciarContador()">Reiniciar Contador</button>
        </div>
    `;

    window.tirarDados = function () {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        contador++;
        document.getElementById('contador-dados').innerText = contador;

        const dadoHTML = (valor, id) => {
            return `<img src="imágen/dado${valor}.jpeg" alt="Dado ${valor}" class="dado-img" id="${id}">`;
        };

        document.getElementById('resultado-dados').innerHTML = `
            <div class="contenedor-dados">
                ${dadoHTML(dado1, 'dado1')}
                ${dadoHTML(dado2, 'dado2')}
            </div>
        `;

        setTimeout(() => {
            animarDado('dado1', 'animar-spin'); // o 'animar-shake', 'animar-blur', etc.
            animarDado('dado2', 'animar-spin');
        }, 50);
    };

    function animarDado(id, clase) {
        const el = document.getElementById(id);
        el.classList.add(clase);
        setTimeout(() => el.classList.remove(clase), 600);
    }


    window.reiniciarContador = function () {
        contador = 0;
        document.getElementById('contador-dados').innerText = contador;
        document.getElementById('resultado-dados').innerText = '';
    };

}