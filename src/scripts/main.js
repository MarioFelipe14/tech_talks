AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor (tempoAteEvento /diaEmMs);
    const horasAteOEvento = Math.floor ((tempoAteEvento % diaEmMs) / horaEmMs );
    const minutosAteOEvento = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor ((tempoAteEvento % minutoEmMs) / 1000 );

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m  ${segundosAteOEvento}s`;

    if(tempoAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }
},1000);