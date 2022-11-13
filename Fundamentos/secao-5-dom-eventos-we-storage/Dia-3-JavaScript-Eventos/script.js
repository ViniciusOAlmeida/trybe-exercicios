//Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione dentro da tag <ul> com id "days".
const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const createDaysOfTheMonth = () => {
  let getDaysList = document.querySelector("#days");

  for (const index in decemberDaysList) {
    //DUVIDA: QDO USO FOR OF APARECE O CALENDARIO COMEÇA NO DIA 28
    // Este loop vai ocorrer enquanto o index for menor que o tamanho do decemberDaysList
    // A cada iteração do _loop for_ selecione o dia atual armazenado-o na variável `day`,  ao mesmo tempo em que a variável `dayItem` armazena a criação de novas `<li>`;
    // Selecione o dia atual pela iteração do loop for, e para cada iteração crie um elemento <li>
    let day = decemberDaysList[index];
    let dayItem = document.createElement("li");
    dayItem.innerHTML = day;
    // Adicione o valor do dia atual para cada <li> criado.
    // crie abaixo a estrutura condicional que adicionará a classe correta à cada dia.

    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = "day holiday"; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = "day friday"; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = "day holiday friday"; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = "day";
      getDaysList.appendChild(dayItem);
    }
  }
};

createDaysOfTheMonth();

//Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
//Sua função deve receber um parâmetro com a string 'Feriados'.
//Adicione a este botão a ID "btn-holiday".
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

const createHolidayButton = (buttonName) => {
  let buttonContainer = document.querySelector(".buttons-container"); //<div class="buttons-container"></div> selecionar o elemento onde sera adicionado esse botão  Crie uma variável que armazene o seletor do container do botão.
  let newButton = document.createElement("button"); // Crie um botão e armazene o valor da id em uma variável.
  let newButtonId = "btn-holiday";

  newButton.innerHTML = buttonName; //Faça com que o nome do botão seja o mesmo passado por parâmetro à função e o id do botão seja o mesmo que o id armazenado na variável.
  newButton.id = newButtonId; //adiciona id no botão
  buttonContainer.appendChild(newButton); //adiciona o botao como filho da div no inicio da função
};

createHolidayButton("Feriados");

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

//Crie a função que será responsável por:
//selecionar todos os elementos com a classe "holiday";
//selecionar o botão "Feriados";
//adicionar variáveis para armazenar as cores.
//Segundo passo: Adicione um escutador de eventos ao botão, esse escutador deve aguardar um clique.
//Terceiro passo: Percorra o array de feriados e adicione as condições para troca de cor.

const displayHolidays = () => {
  let getHolidayButton = document.querySelector("#btn-holiday"); // selecione o botão "Feriados";
  let getHolidays = document.querySelectorAll(".holiday"); // Seleciona todos os feriados como um array de elementos;
  let backgroundColor = "rgb(238,238,238)"; // armazena a cor da configuração inicial;
  let setNewColor = "white"; // armazena a nova cor que será utilizada ao pressionar o botão.

  getHolidayButton.addEventListener("click", () => {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        // Se a cor do elemento for a nova cor
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        // Se a cor do elemento for qualquer outra cor diferente da armazenada na variável setNewColor
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
};

displayHolidays();

//Parte 4
//Primeiro passo:

//Crie a função e adicione variáveis para armazenar:
//o container de botões;
//a criação de um botão;
//o id do botão.
//Segundo passo: Adicione ao botão criado o seu nome como texto e o seu id.
//Terceiro passo: Adicione o botão como filho do container de botões.

const createFridayButton = (buttonName) => {
  let buttonContainer = document.querySelector(".buttons-container"); // // Armazena o container de botões;
  let newButton = document.createElement("button"); //Cria um botão;
  let newButtonId = "btn-friday"; //armazena o id do botão

  newButton.innerHTML = buttonName; //adiciona o nome do botão
  newButton.id = newButtonId; //adiciona o id do botão
  buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
};

createFridayButton("Sexta-feira");

//Parte 5
//Primeiro passo:
//Crie a função e dentro dela as variáveis para armazenar:
//o botão “Sexta-feira”;
//um array de elementos com a classe friday;
//uma string que será exibida nos dias que são sextas-feiras.
//Segundo passo: Adicione um escutador de eventos ao botão, esse escutador deve aguardar um clique.
//Terceiro passo: Crie um loop for que itere sobre todos os elements com classe ‘friday’.
//Quarto passo: Adicione a estrutura condicional que checa se o texto da Sexta-feira já é igual à string nova que será exibida.
//Quinto passo: Aplique o que será feito caso as condições sejam atendidas
//Sexto passo: Determine o parâmetro que será passado a função e execute-a.

const displayFridays = (fridaysArray) => {
  let getFridayButton = document.querySelector("#btn-friday");
  let fridays = document.getElementsByClassName("friday");
  let newFridayText = "SEXTOU o/";

  getFridayButton.addEventListener("click", () => {
    // cria o escutador de eventos
    for (let index = 0; index < fridays.length; index += 1) {
      // loop responsável pela iteração com elementos de classe 'friday'
      if (fridays[index].innerHTML !== newFridayText) {
        // caso o texto da Sexta-feira seja diferente do novo texto
        fridays[index].innerHTML = newFridayText;
        //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
      } else {
        // caso o texto da Sexta-feira seja igual ao novo texto
        fridays[index].innerHTML = fridaysArray[index];
        //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
};

let decemberFridays = [4, 11, 18, 25];
displayFridays(decemberFridays);

//Parte 6
//Primeiro passo: Crie duas funções, uma para cada ação do mouse.,
//Segundo passo: Crie uma variável que selecione o id days para ambas as funções.
//Terceiro passo: Adicione o addEventListener à variável days.
//Quarto passo: Aumente o fontSize.
//Quinto passo: Aumente o fontWeight.
//Sexto passo: Execute as funções.

const dayMouseOver = () => {
  let days = document.querySelector("#days");
  days.addEventListener("mouseover", (event) => {
    // Este addEventListener recebe como primeiro parâmetro o mouseover, que dispara a função ao passar o mouse por cima
    event.target.style.fontSize = "30px"; // Ele pega o evento alvo e altera o estilo de fontSize para 30px
    event.target.style.fontWeight = "600"; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
};

const dayMouseOut = () => {
  let days = document.querySelector("#days");
  days.addEventListener("mouseout", (event) => {
    // Este addEventListener recebe como primeiro parâmetro o mouseout, que dispara a função ao tirar o mouse de cima do elemento
    event.target.style.fontSize = "20px"; // Ele pega o evento alvo e altera o estilo de fontSize para 20px
    event.target.style.fontWeight = "200"; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
};

dayMouseOver();
dayMouseOut();

//Parte 7
//Primeiro passo:

//Crie a função e dentro dela crie duas variáveis:
//uma responsável por armazenar o elemento com classe igual a my-tasks;
//outra por criar um elemento do tipo span.
//Terceiro passo: Anexe a task criada como filha do elemento cuja classe é my-tasks.
//Quarto passo: Execute a função e passe como parâmetro a task desejada.

const newTaskSpan = (task) => {
  const taskCountainer = document.querySelector(".my-tasks"); // armazena o elemento com classe igual a 'my-tasks'
  const taskName = document.createElement("span"); // armazena a criação de um elemento do tipo 'span'

  taskName.innerHTML = task;
  taskCountainer.appendChild(taskName); // Anexando a task como filha de taskContainer
};

newTaskSpan("Projeto");

//Parte 8
//Primeiro passo: Crie a função que recebe uma cor por parâmetro.
//Segundo passo: Recupere os elementos que tenham a classe my-tasks.
//Terceiro passo: Crie uma div.
//Quarto passo: Adicione a classe task para a div criada.
//Quinto passo: Adicione a cor passada por parâmetro como backgroundColor da div criada.
//Sexto passo: Anexe a task criada como filha do elemento cuja classe é my-tasks.
//Sétimo passo: Execute a função e passe a cor desejada como parâmetro.

const newTaskDiv = (color) => {
  let taskCountainer = document.querySelector(".my-tasks");
  let newTask = document.createElement("div"); // Criando nova div

  newTask.className = "task"; // Adicionando className task à newTask
  newTask.style.backgroundColor = color; // Adicionando a cor recebida por parâmetro como backgroundColor
  taskCountainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
};

newTaskDiv("purple");

//Parte 9
//Primeiro passo:

//Crie uma função e dentro dela crie variáveis para armazenar:
//os elementos com a classe "task selected";
//o elemento com o id "tasks".
//Segundo passo: Insira um evento de click na variável myTasks.
//Terceiro passo: Crie condicionais para o evento
//Quarto passo: Altere a classe do alvo
//Quinto passo: Execute a função para atribuir o addEventListener em “myTasks”

const setTaskClass = () => {
  let selectedTask = document.getElementsByClassName("task selected");
  let myTasks = document.querySelector(".task");

  myTasks.addEventListener("click", (event) => {
    if (selectedTask.length === 0) {
      // Caso selectedTask retornar um array com nenhum item
      event.target.className = "task selected";
    } else {
      // Caso a primeira condição retornar falso
      event.target.className = "task";
    }
  });
};

setTaskClass();

//Parte 10
//Primeiro passo: Crie a função e dentro dela salve os seletores em variáveis distintas.
//Segundo passo: Atribua um evento à variável days que armazena a <ul>, usando addEventListener.
//Terceiro passo: Crie uma variável para salvar a cor do evento alvo.
//Quarto passo: Crie condicionais para a função.
//Quinto passo: Faça a alteração da cor do evento alvo.
//Sexto passo: Execute a função setDayColor() para que o evento seja aplicado no ul ao carregar o script.

const setDayColor = () => {
  let selectedTask = document.getElementsByClassName("task selected"); //// Retorna um array com todos os elementos com a classe "task selected"
  let days = document.querySelector("#days"); // Seleciona a primeira ul com id "days"
  let taskDiv = document.querySelector(".task"); // Seleciona o primeiro elemento com a classe "task"
  let taskColor = taskDiv.style.backgroundColor; // Salva o Background Color da classe task na variável "taskColor"

  days.addEventListener("click", (event) => {
    // Para pegar o evento alvo, precisamos declarar o evento como parâmetro da função
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      // Caso não houver nenhum elemento com a classe "task selected" E o evento alvo não tiver a mesma cor de fundo da variável "taskColor"
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      // Caso a cor do evento alvo seja igual à da variável "taskColor"
      event.target.style.color = "rgb(119,119,119)"; // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
};
setDayColor();

//Bônus
//Primeiro passo: Crie a função e grave os seletores da id task-input, btn-add e da classe task-list.
//Segundo passo: Insira um addEventListener para as variáveis addInputField e getInputField.
//Terceiro Passo: Para o addInputButton, crie uma condicional de validação.
//Quarto passo:
//Crie uma tag li com o valor passado pelo input;
//Na primeira condição, atribua essa li em getTaskList.
//Lembre-se: 🧠 limpe o campo digitado.
//Quinto passo: Crie uma variável para validar a tecla pressionada e a quantidade de caracteres no evento do getInputField.
//Sexto passo:
//Crie a <li>, atribuindo à ela o valor do input;
//  Adicione essa <li> à <ul> e limpe o campo do input.
//Sétimo passo: É esperado que seu código tenha ficado assim. Não se esqueça de executar no final para que os eventos sejam atribuídos ao carregar o script.

const addNewTask = () => {
  let getInputField = document.querySelector("#task-input");
  let addInputButton = document.querySelector("#btn-add");
  let getTaskList = document.querySelector(".task-list");

  addInputButton.addEventListener("click", () => {
    if (getInputField.value.length > 0) {
      // Caso o input tenha um valor de caracteres maior que 0
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    } else {
      // Caso o input não tenha nada digitado
      alert("Error: Digite ao menos 1 caractere."); // Cria um alerta para informar que não tem texto digitado
    }
  });
  getInputField.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && getInputField.value.length > 0) {
      // Aqui ele verifica se a tecla pressionada é o "Enter" e a quantidade de letras
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    }
  });
};

addNewTask();
