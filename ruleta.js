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
    
    <div id="contador-central">
        <button class="boton-juego" onclick="girarRuleta()">Girar Ruleta</button>

        <div class="selector-wrapper">
            <button onclick="toggleMenu()" class="selector-boton">
                🎯 Elegir cantidad ▾
            </button>
            <div id="menu-cantidad" class="selector-menu">
                <div onclick="setCantidad(3)" class="selector-opcion">🎲 3 resultados</div>
                <div onclick="setCantidad(6)" class="selector-opcion">🎰 6 resultados</div>
            </div>
        </div>
    </div>

    <div id="resultado-ruleta"></div>
    <div id="botones-finales">
        <button class="boton-juego" onclick="copiarResultados()">Copiar al portapapeles</button>
    </div>
  `;

    window.toggleMenu = function () {
        const menu = document.getElementById('menu-cantidad');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    };

    window.girarRuleta = function () {
        resultadosActuales = [];
        for (let i = 0; i < cantidadResultados; i++) {
            const resultado = opciones[Math.floor(Math.random() * opciones.length)];
            resultadosActuales.push(resultado);
        }

        let html = '<h3>Resultados:</h3>';

        if (cantidadResultados === 3) {
            html += `
                <ul style="list-style:none; padding-left:0;">
                    ${resultadosActuales.map(r => `<li class="resultado-item">》 ${r}</li>`).join('')}
                </ul>
            `;
        } else if (cantidadResultados === 6) {
            const mitad1 = resultadosActuales.slice(0, 3);
            const mitad2 = resultadosActuales.slice(3, 6);

            html += `
                <div style="display:flex; gap:40px;">
                    <ul style="list-style:none; padding-left:0;">
                        ${mitad1.map(r => `<li class="resultado-item">》 ${r}</li>`).join('')}
                    </ul>
                    <ul style="list-style:none; padding-left:0;">
                        ${mitad2.map(r => `<li class="resultado-item">》 ${r}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

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


    window.mostrarSelector = function () {
        document.getElementById('selector-cantidad').style.display = 'block';
    };

    window.setCantidad = function (cantidad) {
        cantidadResultados = cantidad;
        document.getElementById('menu-cantidad').style.display = 'none';
    };
}