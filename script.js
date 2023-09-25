/* Professor, fiz um ajuste na quantidade de pontos para que a lógica da programação não falhasse.*/ 

const nomeHeroi = "Jonas de Rivia";
let   quantidadeXP = 20000;
let   nivelHeroi;

if (quantidadeXP <= 1000 ){
    nivelHeroi = "Ferro";
} else if (quantidadeXP >= 1001 && quantidadeXP <= 2000) {
    nivelHeroi = "Bronze";
} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
    nivelHeroi = "Prata";
} else if (quantidadeXP >= 5001 && quantidadeXP <= 7000) {
    nivelHeroi = "Ouro";
} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
    nivelHeroi = "Platina";
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
    nivelHeroi = "Ascedente";
} else if (quantidadeXP >= 9001 && quantidadeXP <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}!` )

//Existem outras formas de realizar a mesma ideia porém essa foi minha escolha! 