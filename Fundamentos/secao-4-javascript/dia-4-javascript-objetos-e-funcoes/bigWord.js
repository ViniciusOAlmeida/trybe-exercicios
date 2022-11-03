//let array = ["java", "javascript", "python", "html", "css"];
//let biggestWord = array[0];
//
//
//for (let index = 0; index < array.length; index += 1) {
//  if (array[index].length > biggestWord.length) {
//    biggestWord = array[index];
//  }
//}
//console.log(biggestWord);

function bigWord(nomes) {
  let bigWord = nomes[0];
  for (let index in nomes) {
    if (nomes[index].length > bigWord.length) {
      bigWord = nomes[index];
    }
  }
  return bigWord;
}

console.log(bigWord(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]));

