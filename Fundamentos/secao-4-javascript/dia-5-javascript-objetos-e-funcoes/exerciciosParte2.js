let motor = "desligado";

const ligarDesligar = () =>
  motor === "desligado" ? (motor = "ligado") : (motor = "desligado");
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);

const pi = 3.14;
const circleArea = (radius) => {
  let area = pi * radius * radius;
  return console.log(`Essa é a área do círculo: ${area}`);
};

circleArea(3);
circleArea(5);

const longestWord = (text) => {
  const wordArray = text.split(" "); //Transforme a string recebida por parâmetro em um array através do método split.
  let maxLength = 0; // Cria uma variável que será responsável por armazenar o tamanho da maior palavra.
  let result = ""; //Crie uma variável que será responsável por armazenar a palavra de maior tamanho.

  for (const word of wordArray) {
    //  Crie uma estrutura de repetição utilizando o for of.
    if (word.length > maxLength) {
      // Crie uma estrutura de condicional utilizando if/else. Caso o tamanho da palavra atual seja maior que o valor armazenado em maxLength:
      maxLength = word.length; // atribua o valor do tamanho da palavra atual para a variável maxLength;
      result = word; //armazene a palavra atual na variável result.
    }
  }

  return result;
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
); // retorna 'aconteceu'

//Longestword com sort em uma linha
//const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
//console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));
