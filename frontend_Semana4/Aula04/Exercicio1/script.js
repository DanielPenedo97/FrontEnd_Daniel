/*Exercício1
• Criar uma classe que represente um Computador;
• Crie pelo menos 4 propriedades;
• Crie pelo menos 2 métodos;
• Crie 3 objetos da classe Computador;
• Crie uma função que receba um objeto Computador e retorne um map
desse objeto;
• Crie uma função que receba um map como parâmetro e altere o arquivo
html (utilizando o DOM) para criar uma lista desordenada de cada entrada
do map. Cada linha da lista deve ter o seguinte formato:
• Chave:valor
• Utilize os 3 objetos do Tipo Computador nas suas funções e visualize o
resultado na página HTML*/

// Criação da classe Computador
class Computador {
  constructor(nome, marca, processador, memoria) {
    this.nome = nome;
    this.marca = marca;
    this.processador = processador;
    this.memoria = memoria;
  }
  getNome() {
    return this.nome;
  }
  getMarca() {
    return this.marca;
  }
}

// Criação dos objetos
const computador1 = new Computador('Notebook', 'Dell', 'Intel Core i5', '8GB');
const computador2 = new Computador('Desktop', 'HP', 'Intel Core i7', '16GB');
const computador3 = new Computador('Notebook', 'Lenovo', 'Intel Core i3', '4GB');

// Função que retorna um map do objeto
function retornaMap(objeto) {
  return new Map(Object.entries(objeto));
}

// Função que cria uma lista desordenada
function criaLista(map) {
  const lista = document.createElement('ul');
  document.body.appendChild(lista);
  for (let [chave, valor] of map) {
    const li = document.createElement('li');
    li.innerHTML = `${chave}: ${valor}`;
    lista.appendChild(li);
  }
}

// Chamada das funções
criaLista(retornaMap(computador1));
criaLista(retornaMap(computador2));
criaLista(retornaMap(computador3));

