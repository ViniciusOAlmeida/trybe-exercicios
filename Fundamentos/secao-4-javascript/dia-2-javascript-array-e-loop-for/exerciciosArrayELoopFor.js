let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);

let media = sum / numbers.length;

console.log(media);

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

let higherNumber = numbers[0];
let highestCount = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
    highestCount +=1
  }
}

let countOdd = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    countOdd += 1;
  }
}

if (countOdd == 0) {
  console.log("Nenhum valor impar encontrado");
} else {
  console.log(countOdd);
}

let lowerNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < lowerNumber) {
    lowerNumber = numbers[index];
  }
}

console.log(lowerNumber);

let newArray = [];

for (let index = 1; index <= 25; index += 1) {
  newArray.push(index);
}

console.log(newArray);

for (let index = 0; index < newArray.length; index += 1) {
  console.log(newArray[index] / 2);
}
