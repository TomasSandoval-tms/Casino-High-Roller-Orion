function mostrarJuego(juego) {
    document.getElementById('menu').style.display = 'none';
    const pantalla = document.getElementById('pantalla-juego');
    pantalla.style.display = 'block';
    pantalla.innerHTML = `

        <div id="contenido-juego"></div>
        <div id="boton-volver">
          <button onclick="volverAlMenu()">Volver al menú</button>
        </div>

    `;
    

    const script = document.createElement('script');
    script.src = `${juego}.js`;
    script.id = 'script-juego';
    script.onload = () => {
        if (typeof iniciarJuego === 'function') {
        iniciarJuego(); // función que inicia el juego
        }
    };
  document.body.appendChild(script);
}


function volverAlMenu() {
    document.getElementById('pantalla-juego').style.display = 'none';
    document.getElementById('pantalla-juego').innerHTML = '';
    document.getElementById('menu').style.display = 'block';

      // Eliminar script del juego
  const script = document.getElementById('script-juego');
  if (script) script.remove();
}

function actualizarRelojCasino() {
  const relojMenu = document.getElementById("reloj-casino");
  const relojJuego = document.getElementById("reloj-juego");
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  const horaActual = `${horas}:${minutos}:${segundos}`;

  if (relojMenu) relojMenu.textContent = horaActual;
  if (relojJuego) relojJuego.textContent = horaActual;
}

setInterval(actualizarRelojCasino, 1000);
actualizarRelojCasino(); // inicializa al cargar