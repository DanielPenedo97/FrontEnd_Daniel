/*Exercício0
• Crie um gerenciador permanente de tarefas no navegador;
• Crie um formulário com o campo tarefa e um botão de adicionar tarefa;
• Crie um elemento <ul> com o atributo id=“listaTarefas”;
• Crie uma classe Tarefa que recebe como parâmetro do construtor, o nome da tarefa;
• Crie uma função adicionaTarefaDOM que recebe um objeto Tarefa e adiciona em
listaTarefas do HTML.
• Crie uma função adicionaTarefaNoStorage que recebe um objeto Tarefa, recupera as
tarefas do localStorage (se houver) e adiciona a nova tarefa. Considere armazenar as
tarefas no localStorage como um array [] de objetos JSON.
• Associe um evento ao botão de adicionar que ao ser clicado ele deve pegar o valor do
campo tarefa, criar um objeto Tarefa, chamar a função adicionaTarefaDOM e
adicionaTarefaNoStorage e por fim limpar o campo tarefa do formulário
 Considere utilizar o método JSON.parse para criar um objeto JSON e
alimentá-lo com as tarefas vindas do localStorage;
• https://developer.mozilla.org/pt-
BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
• Considere utilizar o método JSON.stringify() para gravar as tarefas no
localStorage;
• https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
• Crie uma função carregaTarefasDoStorage, carrega todas as tarefas
armazenadas no localStorage as adiciona no DOM;
• Chame essa função no final do seu script*/

// Criação do formulário
const form = document.createElement('form');
form.setAttribute('id', 'form');
document.body.appendChild(form);

// Criação do campo de texto
const input = document.createElement('input');
input.setAttribute('id', 'tarefa');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Digite uma tarefa');
form.appendChild(input);

// Criação do botão
const button = document.createElement('button');
button.setAttribute('id', 'adicionar');
button.setAttribute('type', 'button');
button.innerHTML = 'Adicione';
form.appendChild(button);

// Criação da lista
const lista = document.createElement('ul');
lista.setAttribute('id', 'listaTarefas');
document.body.appendChild(lista);

// Criação da classe Tarefa
class Tarefa {
  constructor(nome) {
    this.nome = nome;
  }
}

// Função adicionaTarefaDOM
function adicionaTarefaDOM(tarefa) {
  const li = document.createElement('li');
  li.innerHTML = tarefa.nome;
  lista.appendChild(li);
}

// Função adicionaTarefaNoStorage
function adicionaTarefaNoStorage(tarefa) {
  let tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (tarefas === null) {
    tarefas = [];
  }
  tarefas.push(tarefa);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função carregaTarefasDoStorage
function carregaTarefasDoStorage() {
  const tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (tarefas !== null) {
    for (let i = 0; i < tarefas.length; i += 1) {
      adicionaTarefaDOM(tarefas[i]);
    }
  }
}

// Evento de clique do botão
button.addEventListener('click', () => {
  const tarefa = new Tarefa(input.value);
  adicionaTarefaDOM(tarefa);
  adicionaTarefaNoStorage(tarefa);
  input.value = '';
});

// Chamada da função carregaTarefasDoStorage
carregaTarefasDoStorage();

