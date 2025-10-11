function iniciarJuego() {
  const contenedor = document.getElementById('contenido-juego');
  contenedor.innerHTML = `
    <h1 id="titulo-juego">🃏 Baraja Mágica</h1>
    <div id="contenedor-reloj-juego">
      <div id="reloj-juego"></div>
    </div>

    <div id="selector-juego-wrapper">
      <select id="selector-juego">
        <option value="">Elegí un modo de juego</option>
        <option value="mayor-menor">Mayor o Menor</option>
        <option value="blackjack">Blackjack</option>
      </select>
    </div>

    <div id="zona-juego"></div>
  `;

  document.getElementById('selector-juego').addEventListener('change', (e) => {
    if (e.target.value === 'mayor-menor') iniciarMayorMenor();
    if (e.target.value === 'blackjack') iniciarBlackjack();
  });
}


function iniciarMayorMenor() {
  const baraja = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let historial = ['6'];
  let clicks = 0;

  document.getElementById('zona-juego').innerHTML = `
  
    <div id="contador-clicks">Cartas pedidas: 0</div>
    <div id="carta-actual">Carta actual: 6</div>
    <div id="historial-cartas">Historial: 6</div>

    <button id="btn-pedir-mm" class="boton-juego">Pedir carta</button>
    <button id="btn-reiniciar-mm" class="boton-juego">Reiniciar</button>
  `;

  document.getElementById('btn-pedir-mm').addEventListener('click', () => {
    const nueva = baraja[Math.floor(Math.random() * baraja.length)];
    historial.push(nueva);
    clicks++;
    document.getElementById('carta-actual').innerText = `Carta actual: ${nueva}`;
    document.getElementById('contador-clicks').innerText = `Cartas pedidas: ${clicks}`;
    document.getElementById('historial-cartas').innerText = `Historial: ${historial.join(', ')}`;
  });

  document.getElementById('btn-reiniciar-mm').addEventListener('click', () => {
    historial = ['6'];
    clicks = 0;
    document.getElementById('carta-actual').innerText = `Carta actual: 6`;
    document.getElementById('contador-clicks').innerText = `Cartas pedidas: 0`;
    document.getElementById('historial-cartas').innerText = `Historial: 6`;
  });
}


function iniciarBlackjack() {
  const baraja = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let mano = [];
  let clicks = 0;

  document.getElementById('zona-juego').innerHTML = `
    <div id="contador-clicks">Cartas pedidas: 0</div>
    <div id="mano-jugador">Mano: -</div>
    <button id="btn-pedir-bj" class="boton-juego">Pedir carta</button>
    <button id="btn-reiniciar-bj" class="boton-juego">Reiniciar mano</button>
  `;

  document.getElementById('btn-pedir-bj').addEventListener('click', () => {
    const carta = baraja[Math.floor(Math.random() * baraja.length)];
    mano.push(carta);
    clicks++;
    document.getElementById('contador-clicks').innerText = `Cartas pedidas: ${clicks}`;
    document.getElementById('mano-jugador').innerText = `Mano: ${mano.join(', ')}`;
  });

  document.getElementById('btn-reiniciar-bj').addEventListener('click', () => {
    mano = [];
    clicks = 0;
    document.getElementById('contador-clicks').innerText = 'Cartas pedidas: 0';
    document.getElementById('mano-jugador').innerText = 'Mano: -';
  });
}