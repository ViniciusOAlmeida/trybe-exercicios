function verifyEndWord(word, endWord) {
  word = word.split("");
  endWord = endWord.split("");
  let control = true;
  for (let index = 0; index < endWord.length; index += 1) {
    if (word[word.length - endWord.length + index] != endWord[index]) {
      control = false;
    }
  }

  return control;
}

console.log(verifyEndWord('trybe', 'be')); //true
console.log(verifyEndWord('joaofernando', 'fernan')); //false