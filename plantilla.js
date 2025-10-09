
function obtenerEmojisAleatorios(cantidad) {
  const emojisDisponibles = ['🎫', '🐸', '🔮', '💚', '💊', '🩷', '💰', '💛', '💍', '🩵', '🧡', '🗺', '💡', '💌'];
  const obligatorios = ['🎫', '🐸'];
  const copia = emojisDisponibles.filter(e => !obligatorios.includes(e));
  const seleccionados = [...obligatorios];

  for (let i = 0; i < cantidad - obligatorios.length; i++) {
    const index = Math.floor(Math.random() * copia.length);
    seleccionados.push(copia.splice(index, 1)[0]);
  }

  return seleccionados;
}

function generarCarton() {
  const baseCarton = [
  ['⏹️', '🟥', '🟧', '🟨', '🟩', '🟦'],
  ['1️⃣', '⬜', '⬜', '⬜', '⬜', '⬜'],
  ['2️⃣', '⬜', '⬜', '⬜', '⬜', '⬜'],
  ['3️⃣', '⬜', '⬜', '⬜', '⬜', '⬜'],
  ['4️⃣', '⬜', '⬜', '⬜', '⬜', '⬜'],
  ['5️⃣', '⬜', '⬜', '⬜', '⬜', '⬜']
];

  const carton = JSON.parse(JSON.stringify(baseCarton));
  const emojis = obtenerEmojisAleatorios(12);

  const posicionesLibres = [];
  for (let fila = 1; fila <= 5; fila++) {
    for (let col = 1; col <= 5; col++) {
      posicionesLibres.push([fila, col]);
    }
  }

  for (let i = posicionesLibres.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [posicionesLibres[i], posicionesLibres[j]] = [posicionesLibres[j], posicionesLibres[i]];
  }

  for (let i = 0; i < emojis.length; i++) {
    const [fila, col] = posicionesLibres[i];
    carton[fila][col] = emojis[i];
  }

  return carton;
}

function mostrarCarton(carton) {
  const html = carton.map(fila => fila.join('')).join('\n');
  const visual = carton.map(fila => fila.join('')).join('<br>');

  document.getElementById('zona-juego').innerHTML = `
    <p>📄 Plantilla generada</p>
    <div id="carton-visual" style="font-size: 1.5rem; line-height: 2rem; text-align: center;">
      ${visual}
    </div>
    <button id="btn-copiar-carton">📋 Copiar plantilla</button>
  `;

  document.getElementById('btn-copiar-carton').addEventListener('click', () => {
    navigator.clipboard.writeText(html)
      .then(() => alert('Plantilla copiada al portapapeles'))
      .catch(() => alert('Error al copiar la plantilla'));
  });
}

function iniciarCarton() {
  const carton = generarCarton();
  mostrarCarton(carton);
}

function iniciarJuego() {
  const contenedor = document.getElementById('contenido-juego');
  contenedor.innerHTML = `
    <p>🧩 Juego: Plantilla</p>
    <button id="btn-carton">Generar plantilla</button>
    <div id="zona-juego"></div>
  `;

  document.getElementById('btn-carton').addEventListener('click', iniciarCarton);
}