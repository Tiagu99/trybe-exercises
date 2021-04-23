let primeiroValor = 60;
let segundoValor = 60;
let terceiroValor = -50;

if(primeiroValor < 0 || segundoValor < 0 || terceiroValor <0){
    console.log("Valor de ângulo inválido");
}
else{
    if((primeiroValor + segundoValor + terceiroValor) == 180){
        console.log("true");
    }
    else{
        console.log("false");
    }
}