const changeText = () => {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerHTML =
    "Ser desenvolvedor em um empresa respeitada pelo mercado";
};
changeText();

const changeSquareToGreen = () => {
  let squareYellow = document.getElementsByClassName("main-content")[0];
  squareYellow.style.background = "rgb(76,164,109)";
};
changeSquareToGreen();

const changeSquareToWhite = () => {
  let squareWhite = document.getElementsByClassName("center-content")[0];
  squareWhite.style.background = "white";
};
changeSquareToWhite();

const correctText = () => {
  let newTitle = document.getElementsByTagName("h1")[0];
  newTitle.innerText = "Exercício - JavaScript";
};
correctText();

const upperCase = () => {
  let paragraph = document.querySelector("p");
  paragraph.innerText = paragraph.innerText.toUpperCase();
};
upperCase();

const showParagraphs = () => {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);
    }
  }
  showParagraphs();
  