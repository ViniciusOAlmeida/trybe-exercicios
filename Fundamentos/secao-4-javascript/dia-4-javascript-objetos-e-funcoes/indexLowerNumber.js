function indexHigherValue(numeros) {
    let indexMaiorNumero = 0;
    for (let key in numeros) {
      if (numeros[indexMaiorNumero] > numeros[key]) {
          indexMaiorNumero = key;
      }
    }
    return indexMaiorNumero;
  }
  
  console.log(indexHigherValue([2, 4, 6, 7, 10, 0, -3]));
  