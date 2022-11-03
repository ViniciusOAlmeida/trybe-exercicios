function verificaPalindrome(word) {
  // split transforma a string em array, onde cada posição será uma letra da string.
  //reverse fará o array ficar de trás pra frente.
  //join faz com que todo o array vire uma string novamente.
  let reverse = word.split("").reverse().join("");
  if (reverse === word) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('batata'));
