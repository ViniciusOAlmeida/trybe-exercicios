let alicotaINSS;
let alicotaIR;

const salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
  alicotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  alicotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  alicotaINSS = salarioBruto * 0.11;
} else {
  alicotaINSS = 570.88;
}

const salarioBase = salarioBruto - alicotaINSS;

if (salarioBase <= 1903.98) {
  alicotaIR = 0;
} else if (salarioBase <= 2826.65) {
  alicotaIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase <= 3751.05) {
  alicotaIR = salarioBase * 0.15 - 354.8;
} else if (salarioBase <= 4664.68) {
  alicotaIR = salarioBase * 0.225 - 636.13;
} else {
  alicotaIR = salarioBase * 0.275 - 869.36;
}

console.log("Salário: " + (salarioBase - alicotaIR))
