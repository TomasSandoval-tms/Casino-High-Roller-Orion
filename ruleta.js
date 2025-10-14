function iniciarJuego() {
    const opciones = [
        '+30.000G💰',
        '+ Boleto🎫',
        '+ 3.000G💰',
        '+ Boleto🎫',
        '+ 5.000G💰',
        '+ Boleto🎫',
        '+ 10.000G💰',
        '+Boleto🎫',
        '+20.000G💰',
        '+Boleto🎫',
        '+ Detonadores🪤',
        '+Boleto🎫',
        '+ Mapa🗺',
        '+Boleto🎫',
        '+Varita de sauco🪄💀',
        '+Boleto🎫',
        '+pergamino📜',
        '+Boleto🎫',
        '+Traslador🔮',
        '+Boleto🎫',
        '+Giratiempo⏱️',
        '+Boleto🎫',
        '+Felix felicis🧪🍀',
        '+Boleto🎫',
        '+Pluma de hermione🪶',
        '+Boleto🎫',
        '+Amortemia💘🧪',
        '+Boleto🎫',
        '+Pastilla vomitivo💊',
        '+Boleto.🎫',
        '+Rana amarilla💛🍫',
        '+Boleto🎫',
        '+Rana verde💚🍫',
        '+Boleto🎫',
        '+Rana Roja❤️🍫',
        '+Boleto🎫',
        '+Rana negra🖤🍫',
        '+Boleto🎫',
        '+Rana Rosa🩷🍫',
        '+Boleto🎫',
        '+Rana lila💜🍫',
        '+Boleto🎫',
        '+Rana naranja🧡',
        '+Boleto🎫',
        '+Rana celeste🩵',
        '+Boleto🎫',
        '+10 Fichas🎟',
        '+Boleto🎫',
        '+15 Fichas🎟',
        '+Boleto🎫'

    ];

    let cantidadResultados = 3;
    let resultadosActuales = [];

    document.getElementById('contenido-juego').innerHTML = `
    <h1 id="titulo-juego"> 🎰✨ Ruleta Encantada</h1>
    <div id="contenedor-reloj-juego">
        <div id="reloj-juego"></div>
    </div>
    
    <div id="contador-central" class="grupo-botones">
        <button class="boton-juego" onclick="girarRuleta()">Girar Ruleta</button>

        <select id="selector-cantidad" class="boton-juego">
            <option value="">Resultados</option>
            <option value="3">🎲 3 resultados</option>
            <option value="6">🎰 6 resultados</option>
        </select>
    </div>

    <div id="resultado-ruleta"></div>
    <div id="botones-finales">
        <button class="boton-juego" onclick="copiarResultados()">Copiar al portapapeles</button>
    </div>
  `;

    document.getElementById('selector-cantidad').addEventListener('change', (e) => {
        const cantidad = parseInt(e.target.value);
        if (cantidad === 3 || cantidad === 6) {
            cantidadResultados = cantidad;
        }
    });


    window.girarRuleta = function () {
        resultadosActuales = [];
        for (let i = 0; i < cantidadResultados; i++) {
            const resultado = opciones[Math.floor(Math.random() * opciones.length)];
            resultadosActuales.push(resultado);
        }

        let html = `
            <div class="contenedor-resultados">
            <ul style="list-style:none; padding-left:0;">
                ${resultadosActuales.map(r => `<li class="resultado-item">》 ${r}</li>`).join('')}
            </ul>
        `;
        html += `</div>`;

        document.getElementById('resultado-ruleta').innerHTML = html;
    };

    window.copiarResultados = function () {
        if (resultadosActuales.length === 0) {
            alert('Primero girá la ruleta para generar resultados.');
            return;
        }

        const recompensas = resultadosActuales.map(r => `    》  ${r}`).join('\n');

        const texto = `
    🎲 *•* ━━━━━━━ ❪🎰❫ ━━━━━━━ *•* 🃏

        「 *🅡ecompensɑs por gɑnɑr* 」

${recompensas}

    @

    ╰━ ⚽ ━━━━━━━ 𝐇σgωαrτs σriσɳ´ˎ˗ 🎱
  `.trim();

  navigator.clipboard.writeText(texto).then(() => {
    alert('Formato con recompensas copiado al portapapeles.');
  });
    };
}