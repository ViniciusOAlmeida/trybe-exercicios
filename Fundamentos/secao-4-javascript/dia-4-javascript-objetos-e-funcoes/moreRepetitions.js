function moreRepetitions(number) {
  let countRepetitions = 0;
  let countNumber = 0;
  let indexRepeatedNumber = 0;
  for (let index in number) {
    // iterando por cada número no array de números
    let checkNumber = number[index]; // armazenando esse número em uma variável auxiliar
    for (let index2 in number) {
      // iterando novamente por todos os números
      if (checkNumber === number[index2]) {
        // se encontrou o número do loop de fora
        countNumber += 1; // incrementa o numero de vezes que esse número aparece
      }
    }

    //Se o valor de contNumero for maior do que contRepetido isso significa que esse número da atual
    //iteração é o que mais se repete até então, logo:
    //contRepetido receberá o valor de contNumero;
    //indexNumeroRepetido receberá o valor de index.
    //No final o valor de contNumero deve ser reiniciado para 0 (zero)
    //a fim de que o loop continue checando os próximos valores do array.

    if (countNumber > countRepetitions) {
      countRepetitions = countNumber;
      indexRepeatedNumber = index;
    }
    countNumber = 0;
  }
  return number[indexRepeatedNumber];
}

console.log(moreRepetitions([2, 3, 2, 5, 8, 2, 3]));
