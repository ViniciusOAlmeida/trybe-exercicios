//Função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

//promise resolvida retornando o número aleatório
/*const resolvedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });
};

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido`));
    }, 1000);
  });
};

resolvedPromise().then((response) => {
  console.log(`O número gerado é ${response} `);
});

rejectedPromise()
  .then((response) => {
    console.log(`rejectedPromise: O número gerado é ${response} `);
  })
  .catch((error) => {
    console.log(`rejectedPromise: ${error.message} `);
  });*/


const randomPromise = () =>
new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      randomNumber % 2 === 0
        ? resolve(randomNumber)
        : reject(
            new Error(
              `O número ${randomNumber} Somente números pares são validos`
            )
          );
    }, 1000);
  });


randomPromise()
  .then((response) => {
    console.log(`Promisse resolvida. O número gerado é ${response}`);
  })
  .catch((error) => {
    console.log(`Promisse rejeitada: ${error.message}`);
  })
  .finally(()=> console.log('Fim da execução da primeira promise.'));
// código que não é assíncrono.
// Será executado antes do retorno da resolvedPromise
// mesmo estando após ela no código
console.log(
  `Esse número não foi gerado por um código assíncrono: ${generateRandomNumber()}`
);
