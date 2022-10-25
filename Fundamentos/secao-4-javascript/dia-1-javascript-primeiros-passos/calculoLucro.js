const custoProduto = 100;
const valorVenda = 300;
const impostoSobreOCusto = custoProduto * 0.2;
const unidadesVendidas = 1000;
let valorCustoTotal = custoProduto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if (custoProduto >= 0 && valorVenda >= 0) {
    console.log(lucro * unidadesVendidas)
} else {
    console.log("Error, os valores não podem ser negativos")
}

/* Resolução alternativa: 

const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
*/