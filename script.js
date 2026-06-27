function calcularSono() {

    const hora = document.getElementById("hora").value;

    if (hora === "") {
        alert("Escolha um horário para acordar.");
        return;
    }

    let [horas, minutos] = hora.split(":").map(Number);

    let acordar = horas * 60 + minutos;

    const ciclos = [
        { quantidade: 6 },
        { quantidade: 5 },
        { quantidade: 4 },
        { quantidade: 3 }
    ];

    let texto = `
        <h3>🌙 Resultado</h3>
        <p>Se você deseja acordar às <strong>${hora}</strong>, tente dormir em um destes horários:</p>
        <br>
    `;

    ciclos.forEach(ciclo => {

        let dormir = acordar - (ciclo.quantidade * 90) - 15;

        while (dormir < 0) {
            dormir += 24 * 60;
        }

        let h = Math.floor(dormir / 60);
        let m = dormir % 60;

        h = String(h).padStart(2, "0");
        m = String(m).padStart(2, "0");

        texto += `
            <p><strong>🛏️ ${h}:${m}</strong> — ${ciclo.quantidade} ciclos de sono</p>
        `;
    });

    texto += `
        <br>
        <p>💡 <strong>Dica:</strong> Um ciclo de sono dura aproximadamente <strong>90 minutos</strong>. Dormir ao final de um ciclo pode ajudar você a acordar mais disposto.</p>
    `;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = texto;
    resultado.style.display = "block";
}
// Mostrar o botão ao rolar a página
window.onscroll = function () {

    const botao = document.getElementById("btnTopo");

    if (botao) {
        if (document.documentElement.scrollTop > 300) {
            botao.style.display = "block";
        } else {
            botao.style.display = "none";
        }
    }

};

// Voltar ao topo suavemente
function voltarAoTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}