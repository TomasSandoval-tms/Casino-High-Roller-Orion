function iniciarJuego() {
  let contadorCara = 0;
  let contadorCruz = 0;


  document.getElementById('contenido-juego').innerHTML = `
    <h1 id="titulo-juego">🪙 Cara o Cruz </h1>
    <div id="contenedor-reloj-juego">
      <div id="reloj-juego"></div>
    </div>

    
    <div class="contador-moneda">
      <div class="contador cara">🪙 Cara: <span id="contador-cara">0</span></div>
      <div class="contador cruz">🪙 Cruz: <span id="contador-cruz">0</span></div>
    </div>

    <div id="contenedor-resultado">
      <div id="resultado-moneda"></div>
    </div>

    <div id="botones-finales" class="contenedor-boton">
      <button class="boton-juego" onclick="lanzarMoneda()">Sortear</button>
      <button class="boton-juego" onclick="reiniciarContadores()">Reiniciar Contador</button>
    </div>

  `;


  window.lanzarMoneda = function () {
    const resultado = Math.random() < 0.5 ? 'Cara' : 'Cruz';

    const rutaImagen = resultado === 'Cara' ? 'imágen/cara.png' : 'imágen/cruz.png';


    const claseContorno = resultado === 'Cara' ? 'contorno-plata' : 'contorno-oro';
    document.getElementById('resultado-moneda').innerHTML = `
      <img src="${rutaImagen}" alt="${resultado}" class="moneda-img ${claseContorno}" id="moneda-resultado">
    `;

    setTimeout(() => {
      animarMoneda('moneda-resultado', 'animar-magnetico');
    }, 50);

    if (resultado === 'Cara') {
      contadorCara++;
      document.getElementById('contador-cara').innerText = contadorCara;
    } else {
      contadorCruz++;
      document.getElementById('contador-cruz').innerText = contadorCruz;
    }
  };


  function animarMoneda(id, clase) {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add(clase);
      setTimeout(() => el.classList.remove(clase), 700);
    }
  }


  window.reiniciarContadores = function () {
    contadorCara = 0;
    contadorCruz = 0;
    document.getElementById('contador-cara').innerText = '0';
    document.getElementById('contador-cruz').innerText = '0';
    document.getElementById('resultado-moneda').innerHTML = '-';
  };
}