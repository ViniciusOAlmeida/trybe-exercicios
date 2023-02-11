const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

const customer2 = {
  firstName: "Maria",
  age: 23,
  job: "Medic",
};

//para adicionar nova propriedade aos objetos: objeto.novaPropriedade = 'valor';

// customer1.lastName = 'Faria';
// customer2['lastName'] = 'Silva';

// console.log(customer1.lastName);
// console.log(customer2['lastName']);

//cria variável que salva o nome da chave

let newKey = "lastName";

//cria variável que salva o valor da chave

const lastName = "Ferreira";

//criar uma função responsável por adicionar novas propriedades a um objeto. Essa função deve receber três parâmetros:
//Um objeto;
//Uma propriedade nova a ser adicionada;
//O valor dessa propriedade.

const adicionaPropriedade = (objeto, novapPropriedade, valor) => {
  objeto[novapPropriedade] = valor;
};

adicionaPropriedade(customer, newKey, lastName);
console.log(customer);

newKey = "fullName";
const fullName = `${customer.firstName} ${customer.lastName}`;

adicionaPropriedade(customer, newKey, fullName);
console.log(customer);


const pessoaEstudante = {};


adicionaPropriedade(pessoaEstudante, 'nome', 'Vinícius Almeida');
adicionaPropriedade(pessoaEstudante, 'email', 'vinicius.almeida.bio@gmail.com');
adicionaPropriedade(pessoaEstudante, 'gitHub', 'https://github.com/ViniciusOAlmeida');
console.log(pessoaEstudante);


