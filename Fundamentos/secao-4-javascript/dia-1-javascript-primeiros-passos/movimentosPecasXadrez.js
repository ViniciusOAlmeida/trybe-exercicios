const chessPiece = "REI"

switch (chessPiece.toLowerCase()) {
    case "rei":  
        console.log("Rei: Move uma casa por vez, em qualquer direção");
        break;
    case "bispo":
        console.log("Bispo: Move em diagonal");
        break;
    case "rainha":
        console.log("Rainha: Move em diagonal, horizontal e vertical");
        break;
    case "cavalo":
        console.log("Cavalo: Move em 'L', pode pular sobre as peças");
        break;
    case "Torre":
        console.log("Torre: Movem na horizontal e vertical");
        break;
    case "peão":
        console.log("Apenas uma casa para frente, no primeiro movimento pode mover duas casas");
        break;
    default:
        console.log("Erro, peça inválida")
        break;
}