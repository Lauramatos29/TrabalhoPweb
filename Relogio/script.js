var h = document.getElementById('horas');
var min = document.getElementById('minutos');
var seg = document.getElementById('segundos');

// setInterval - executa uma função repetidamente em intervalos regulares
const relogio = setInterval(function time() {
    let horarioAtual = new Date();
    let horas = horarioAtual.getHours();
    let minutos = horarioAtual.getMinutes();
    let segundos = horarioAtual.getSeconds();

    // Para adicionar o 0 quando o horario for menor que 10
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10){
        minutos = '0' + minutos;
    } 
    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    // textContent - define o conteúdo de texto do elemento HTML
    h.textContent = horas;
    min.textContent = minutos;
    seg.textContent = segundos;        
},1000)

const dataHoje = document.getElementById('data');
const data = setInterval(function time() {
    let dH = new Date();
    let dataFormatada = dH.toLocaleDateString(); 
    dataHoje.textContent = dataFormatada; 
})

const diaSemana = document.getElementById('dia');
const dia = setInterval(function time(){
    let d = new Date();
    let diaDaSemana = d.toLocaleDateString('pt-BR', { weekday: 'long' });
    diaSemana.textContent = diaDaSemana[0].toUpperCase() + diaDaSemana.slice(1);
})
