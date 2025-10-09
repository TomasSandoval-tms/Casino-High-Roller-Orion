function iniciarJuego() {

    let contador = 0;

    document.getElementById('contenido-juego').innerHTML = `
        <p>🎲 Tirá los dados mágicos!</p>
        <button onclick="tirarDados()">Tirar Dados</button>
        <button onclick="reiniciarContador()">Reiniciar Contador</button>
        <p>Veces que sorteaste: <span id="contador-dados">0</span></p>
        <div id="resultado-dados"></div>
    `;

    window.tirarDados = function () {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        contador++;
        document.getElementById('contador-dados').innerText = contador;
        document.getElementById('resultado-dados').innerText = `Resultado: ${dado1} + ${dado2} = ${dado1 + dado2}`;
    };

    window.reiniciarContador = function () {
        contador = 0;
        document.getElementById('contador-dados').innerText = contador;
        document.getElementById('resultado-dados').innerText = '';
    };
}