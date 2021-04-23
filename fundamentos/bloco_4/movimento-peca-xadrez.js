let nomePeca = "CAVALO";


switch(nomePeca.toLowerCase()){
    case "peao":
        console.log("Peão -> Movimenta-se sempre pra frente (1 casa por vez, não pode voltar as casas)");
        console.log("Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.")
        break;
    case "bispo":
        console.log("Bispo -> Movimenta-se pela diagonal");
        break;
    case "torre":
        console.log("Torre -> Movimenta-se pela horizontal/vertical");
        break;
    case "cavalo":
        console.log("Cavalo -> Movimenta-se duas casas em sentido horizontal e mais uma na vertical ou vice-versa (Pode pular qualquer peça");
        break;
    case "rainha":
        console.log("Rainha -> Movimenta-se pela horizontal, vertical e diagonais");
        break;
    case "rei":
        console.log("Rei -> Movimenta-se pela horizontal, vertical e diagonais (1 casa por vez)");
    default:
        console.log("Nome de peça inválido");
        break;
}