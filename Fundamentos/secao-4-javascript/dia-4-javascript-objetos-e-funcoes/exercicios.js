function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

function sub(a, b) {
  return a - b;
}
console.log(sub(1, 2));

function mult(a, b) {
  return a * b;
}
console.log(mult(1, 2));

function div(a, b) {
  return a / b;
}
console.log(div(1, 2));

function mod(a, b) {
  return a % b;
}
console.log(mod(1, 2));

function higherNumber(a, b) {
  if (a > b) {
    return "'a' é maior que 'b'";
  } else {
    return "'b' é maior que 'a'";
  }
}

console.log(higherNumber(10, 20));

function highestNumber(a, b, c) {
  if (a > b && a > c) {
    return "O maior número é " + a + " (a)";
  } else if (b > a && b > c) {
    return "O maior número é " + b + " (b)";
  } else {
    return "O maior número é " + c + " (c)";
  }
}

console.log(highestNumber(10, 20, 30));

function positiveNegative(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(positiveNegative(19));

function triangleAngle(angleDegreeA, angleDegreeB, angleDegreeC) {
  let sumOfAngles = angleDegreeA + angleDegreeB + angleDegreeC;
  let allAnglesArePositives =
    angleDegreeA > 0 && angleDegreeB > 0 && angleDegreeC > 0;
  if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Erro: ângulo inválido";
  }
}
console.log(triangleAngle(15, 100, 65));
