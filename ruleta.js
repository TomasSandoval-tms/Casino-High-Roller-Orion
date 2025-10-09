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
    <p>🧪 Girá la ruleta de pociones mágicas!</p>
    <button onclick="girarRuleta()">Girar Ruleta</button>
    <button onclick="copiarResultados()">Copiar al portapapeles</button>
    <button onclick="mostrarSelector()">Elegir cantidad de resultados</button>
    <div id="selector-cantidad" style="display:none;">
        <p>Seleccioná cuántos resultados querés:</p>
        <button onclick="setCantidad(3)">3 resultados</button>
        <button onclick="setCantidad(6)">6 resultados</button>
    </div>
    <div id="resultado-ruleta"></div>
  `;

    window.girarRuleta = function () {
        resultadosActuales = [];
        for (let i = 0; i < cantidadResultados; i++) {
            const resultado = opciones[Math.floor(Math.random() * opciones.length)];
            resultadosActuales.push(resultado);
        }
        document.getElementById('resultado-ruleta').innerText = `Resultados: ${resultadosActuales.join(', ')}`;
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


    window.mostrarSelector = function () {
        document.getElementById('selector-cantidad').style.display = 'block';
    };

    window.setCantidad = function (cantidad) {
        cantidadResultados = cantidad;
        document.getElementById('selector-cantidad').style.display = 'none';
    };
}