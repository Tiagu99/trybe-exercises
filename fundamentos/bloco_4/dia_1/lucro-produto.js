let custoProduto = 30;
let valorVenda = 50;

if(valorVenda < 0 || custoProduto < 0){
    console.log("Valores inválidos")
}
else{
    let custoTotal = custoProduto + (custoProduto * 0.20);
    let lucro = valorVenda - custoTotal;
    console.log("Lucro após vender mil produtos: " + (lucro * 1000));
}