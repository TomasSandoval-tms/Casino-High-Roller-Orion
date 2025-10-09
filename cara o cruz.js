function iniciarJuego() {
  let contadorCara = 0;
  let contadorCruz = 0;

  document.getElementById('contenido-juego').innerHTML = `
    <p>🪙 Lanzá la moneda mágica!</p>
    <button onclick="lanzarMoneda()">Sortear</button>
    <button onclick="reiniciarContadores()">Reiniciar Contadores</button>
    <p>Resultado actual: <span id="resultado-moneda">-</span></p>
    <p>🪙 Cara: <span id="contador-cara">0</span></p>
    <p>🪙 Cruz: <span id="contador-cruz">0</span></p>
  `;

  window.lanzarMoneda = function () {
    const resultado = Math.random() < 0.5 ? 'Cara' : 'Cruz';
    document.getElementById('resultado-moneda').innerText = resultado;

    if (resultado === 'Cara') {
      contadorCara++;
      document.getElementById('contador-cara').innerText = contadorCara;
    } else {
      contadorCruz++;
      document.getElementById('contador-cruz').innerText = contadorCruz;
    }
  };

  window.reiniciarContadores = function () {
    contadorCara = 0;
    contadorCruz = 0;
    document.getElementById('contador-cara').innerText = '0';
    document.getElementById('contador-cruz').innerText = '0';
    document.getElementById('resultado-moneda').innerText = '-';
  };
}