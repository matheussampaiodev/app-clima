const btn = document.querySelector('.btn');
const key = '624086c1500e4f6cfb029d95f5366124';

async function buscar() {
    const input = document.querySelector('.input_city').value;
    try {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    document.querySelector('.cidade_nome').innerHTML = `${dados.name}, ${dados.sys.country}`;
    document.querySelector('.icone').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
    document.querySelector('.temp').innerHTML = `${dados.main.temp.toFixed(0)} °C`;
    document.querySelector('.status').innerHTML = `${dados.weather[0].description}`;
    document.querySelector('.umidade_status').innerHTML = `${dados.main.humidity}%`;
    document.querySelector('.vento_status').innerHTML = `${dados.wind.speed}km/h`;
    document.querySelector('.corpo').style.display = 'block';
    document.querySelector('.input_city').value = '';
    } catch(error) {
        alert('Algo deu errado, verifique o nome da cidade e tente novamente');
    }
}

btn.addEventListener('click', buscar);

document.querySelector('.input_city').addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        buscar();
    };
})