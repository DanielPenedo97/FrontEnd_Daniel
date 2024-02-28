// Função para solicitar e exibir notícias no quadro de notícias
/*
var DOG_API_KEY = live_GlHIUBUuU5kODfW7cYGb7pq7vL1sNhm6YbkzQFjr0w1msaSd7k6zHn6rFo8x21Yw;

function carregarNoticias() {
    fetch('https://api.thedogapi.com/v1/images/search?api_key=${DOG_API_KEY}')
        .then(response => response.json())
        .then(data => {
            const noticiasQuadro = document.getElementById('noticias');
            noticiasQuadro.innerHTML = ''; // Limpa o conteúdo anterior
            data.articles.forEach(article => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Leia mais</a>
                `;
                noticiasQuadro.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Erro ao obter imagens de cachorro:', error);
        });
}

// Função para solicitar e exibir previsão do tempo no quadro de serviços
function carregarPrevisaoTempo() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Ilheus,BR&appid=YOUR_WEATHER_API_KEY&lang=pt_br&units=metric')
        .then(response => response.json())
        .then(data => {
            const servicosQuadro = document.getElementById('servicos');
            const previsao = data.weather[0].description;
            const temperatura = data.main.temp;
            const umidade = data.main.humidity;
            servicosQuadro.innerHTML = `
                <h3>Previsão do Tempo</h3>
                <p>Condição: ${previsao}</p>
                <p>Temperatura: ${temperatura}°C</p>
                <p>Umidade: ${umidade}%</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao obter previsão do tempo:', error);
        });
}

// Chamada das funções para carregar notícias e previsão do tempo quando a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    carregarNoticias();
    carregarPrevisaoTempo();
});*/
