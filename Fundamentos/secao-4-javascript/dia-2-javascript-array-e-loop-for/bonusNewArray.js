// crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) { //se o index + 1 for menor que o tamanho do numbers,
    newArray.push(numbers[index] * numbers[index + 1]); // adiciona no newArray o primeiro numero do array numbers e multiplica pelo próximo
  } else { //quando chegar no index 9, multilplica o ultimo numero por 2
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
