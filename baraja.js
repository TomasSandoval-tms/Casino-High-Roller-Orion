function iniciarJuego() {
    const contenedor = document.getElementById('contenido-juego');
    contenedor.innerHTML = `
        <p>🃏 Elegí el modo de juego:</p>
        <button id="btn-mayor-menor">Mayor o Menor</button>
        <button id="btn-blackjack">Blackjack</button>
        <div id="zona-juego"></div>
    `;

    document.getElementById('btn-mayor-menor').addEventListener('click', iniciarMayorMenor);
    document.getElementById('btn-blackjack').addEventListener('click', iniciarBlackjack);
}

function iniciarMayorMenor() {
  const baraja = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let historial = ['6'];
  let clicks = 0;

  document.getElementById('zona-juego').innerHTML = `
    <p>🃏 Juego: Mayor o Menor</p>
    <button id="btn-pedir-mm">Pedir carta</button>
    <button id="btn-reiniciar-mm">Reiniciar</button>
    <div id="carta-actual">Carta actual: 6</div>
    <div id="contador-clicks">Cartas pedidas: 0</div>
    <div id="historial-cartas">Historial: 6</div>
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
    <p>🃏 Juego: Blackjack</p>
    <button id="btn-pedir-bj">Pedir carta</button>
    <button id="btn-reiniciar-bj">Reiniciar mano</button>
    <div id="contador-clicks">Cartas pedidas: 0</div>
    <div id="mano-jugador">Mano: -</div>
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