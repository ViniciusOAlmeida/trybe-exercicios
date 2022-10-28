let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ordem crescente

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      // até aqui, compara o numbers[1] com numbers [0]; se numbers[1] for menor que com numbers [0]; vai para o if;
      let position = numbers[index]; // cria uma variavel position, que recebe o numbers [0];
      numbers[index] = numbers[secondIndex]; // muda o numbers [0] para numbers [1]
      numbers[secondIndex] = position; // numbers[10] vira a variavel position, e depois reinicia o loop
    }
  }
}

console.log(numbers);

//ordem decrescente

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);
