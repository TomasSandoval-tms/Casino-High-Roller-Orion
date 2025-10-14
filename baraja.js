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
  const palos = ['pica', 'diamante', 'trebol', 'corazon'];
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const baraja = palos.flatMap(palo => valores.map(valor => `${palo}-${valor}`));

  let historial = ['diamante-6'];
  let clicks = 0;

  document.getElementById('zona-juego').innerHTML = `
  
    <div id="contador-clicks">Cartas pedidas: 0</div>


    <div id="zona-cartas">
      <div class="mazo-lateral" id="mazo-izquierdo">
        <img src="cartas/back.png" class="carta-mazo">
      </div>

      <div id="carta-actual">
        Carta actual:<br>
        <img src="cartas/diamante-6.png" class="carta-img animar-salida" id="carta-central">
      </div>

      <div class="mazo-lateral" id="mazo-derecho">
        <img src="cartas/back.png" class="carta-mazo">
      </div>
    </div>
    

    <div id="historial-cartas">Historial: 6</div>

    <button id="btn-pedir-mm" class="boton-juego">Pedir carta</button>
    <button id="btn-reiniciar-mm" class="boton-juego">Reiniciar</button>
  `;


  document.getElementById('btn-pedir-mm').addEventListener('click', () => {
    const nueva = baraja[Math.floor(Math.random() * baraja.length)];
    historial.push(nueva);
    clicks++;

    const cartaAnterior = document.getElementById('carta-central');

    if (cartaAnterior) {
      const rect = cartaAnterior.getBoundingClientRect();
      const zonaCartasRect = document.getElementById('zona-cartas').getBoundingClientRect();

      const clon = cartaAnterior.cloneNode(true);
      clon.classList.remove('animar-salida');
      clon.classList.add('animar-hacia-mazo');

      clon.style.position = 'absolute';
      clon.style.left = (rect.left - zonaCartasRect.left) + 'px';
      clon.style.top = (rect.top - zonaCartasRect.top) + 'px';
      clon.style.width = rect.width + 'px';
      clon.style.height = rect.height + 'px';

      document.getElementById('zona-cartas').appendChild(clon);

      cartaAnterior.style.visibility = 'hidden';

      setTimeout(() => {
        document.getElementById('carta-actual').innerHTML = `
          Carta actual:<br>
          <img src="cartas/${nueva}.png" class="carta-img animar-salida" id="carta-central">
        `;
      }, 600);

      setTimeout(() => clon.remove(), 700);
    }


    document.getElementById('contador-clicks').innerText = `Cartas pedidas: ${clicks}`;
    document.getElementById('historial-cartas').innerHTML = `Historial:<br>` + historial.map(carta => `<img src="cartas/${carta}.png" class="carta-img">`).join(' ');
  });


  document.getElementById('btn-reiniciar-mm').addEventListener('click', () => {
    historial = ['diamante-6'];
    clicks = 0;

    document.getElementById('carta-actual').innerHTML = `
      Carta actual:<br>
      <img src="cartas/diamante-6.png" class="carta-img animar-salida" id="carta-central">
    `;

    document.getElementById('contador-clicks').innerText = `Cartas pedidas: 0`;
    document.getElementById('historial-cartas').innerHTML = `Historial:<br><img src="cartas/diamante-6.png" class="carta-img">`;
  });
}


function iniciarBlackjack() {
  const palos = ['pica', 'diamante', 'trebol', 'corazon'];
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const baraja = palos.flatMap(palo => valores.map(valor => `${palo}-${valor}`));

  let mano = [];
  let clicks = 0;

  document.getElementById('zona-juego').innerHTML = `
    <div id="contador-clicks">Cartas pedidas: 0</div>


    <div id="zona-cartas">
      <div class="mazo-lateral" id="mazo-izquierdo">
        <img src="cartas/back.png" class="carta-mazo">
      </div>

      <div id="carta-actual">
        Carta actual:<br>
        <img src="cartas/back.png" class="carta-img animar-salida" id="carta-central">
      </div>

      <div class="mazo-lateral" id="mazo-derecho">
        <img src="cartas/back.png" class="carta-mazo">
      </div>
    </div>
    

    <div id="historial-cartas">Historial:</div>

    <button id="btn-pedir-bj" class="boton-juego">Pedir carta</button>
    <button id="btn-reiniciar-bj" class="boton-juego">Reiniciar mano</button>
`;


  document.getElementById('btn-pedir-bj').addEventListener('click', () => {
    const carta = baraja[Math.floor(Math.random() * baraja.length)];
    mano.push(carta);
    clicks++;

    const cartaAnterior = document.getElementById('carta-central');
    if (cartaAnterior) {
      const rect = cartaAnterior.getBoundingClientRect();
      const zonaCartasRect = document.getElementById('zona-cartas').getBoundingClientRect();

      const clon = cartaAnterior.cloneNode(true);
      clon.classList.remove('animar-salida');
      clon.classList.add('animar-hacia-mazo');
      clon.style.position = 'absolute';
      clon.style.left = (rect.left - zonaCartasRect.left) + 'px';
      clon.style.top = (rect.top - zonaCartasRect.top) + 'px';
      clon.style.width = rect.width + 'px';
      clon.style.height = rect.height + 'px';

      document.getElementById('zona-cartas').appendChild(clon);
      cartaAnterior.style.visibility = 'hidden';

      setTimeout(() => {
        document.getElementById('carta-actual').innerHTML = `
          Carta actual:<br>
          <img src="cartas/${carta}.png" class="carta-img animar-salida" id="carta-central">
        `;
      }, 600);

      setTimeout(() => clon.remove(), 700);
    } else {
      document.getElementById('carta-actual').innerHTML = `
        Carta actual:<br>
        <img src="cartas/${carta}.png" class="carta-img animar-salida" id="carta-central">
      `;
    }

    document.getElementById('contador-clicks').innerText = `Cartas pedidas: ${clicks}`;
    document.getElementById('historial-cartas').innerHTML = `Historial:<br>` + mano.map(carta => `<img src="cartas/${carta}.png" class="carta-img">`).join(' ');
  });


  document.getElementById('btn-reiniciar-bj').addEventListener('click', () => {
    mano = [];
    clicks = 0;

    document.getElementById('contador-clicks').innerText = 'Cartas pedidas: 0';
    document.getElementById('carta-actual').innerHTML = `
      Carta actual:<br>
      <img src="cartas/back.png" class="carta-img animar-salida" id="carta-central">
    `;
    document.getElementById('historial-cartas').innerHTML = `Historial:<br>`;
  });
}