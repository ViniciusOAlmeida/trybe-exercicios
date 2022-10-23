const a = -5
const b = 20
const c = 30

//Faça cinco programas, um para cada operação aritmética básica. 
//Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

console.log("Soma: " + (a+b));
console.log("Substração: " + (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: " + (a/b));
console.log("Módulo: " + (a%b));

//Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

if (a>b) {
    console.log("'a' é maior que 'b'");
}
else {
    console.log("'b' é maior que 'a'");
}

//Utilize if/else para fazer um programa que retorne o maior de três números. 
//Defina, no começo do programa, três constantes com os valores que serão comparados.

if (a>b && a>c) {
    console.log("O maior número é " + a + " (a)");
}
else if (b>a && b>c) {
    console.log("O maior número é " + b + " (b)");
}
else{
    console.log("O maior número é " + c + " (c)");
}

//Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, 
//retorne “positive” se esse valor for positivo, “negative” se for negativo, 
//e caso não seja nem positivo e nem negativo retorne “zero”.

if (a>=0){
    console.log("O valor é positivo");
}
else{
    console.log("O valor é negativo")
}

//🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos 
//internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, 
//caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

const angleDegreeA = 15; 
const angleDegreeB = 100;
const angleDegreeC = 65;   

let sumOfAngles = angleDegreeA + angleDegreeB + angleDegreeC;

let allAnglesArePositives = angleDegreeA > 0 && angleDegreeB > 0 && angleDegreeC > 0;


if(allAnglesArePositives){
    if (sumOfAngles === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('Erro: ângulo inválido');
  }

