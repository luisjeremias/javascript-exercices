/*
#######    Exercício 3  #######
5-Em um jogo antigo Megaman vai enfrentar Protoman que possui 250 de vida, cada tiro de megaman tira 3 de vida de Protoman, escreva o código que imprima no console quantos tiros de Megaman são necessários para derrotar Protoman.
*/
console.log('####### AQUI COMECA O TERCEIRO EXERCÍCIO  ########');
console.log('');

let Protoman = 250;
let TiroDoMegaman = 3;
let TirosNecessarios = [];

for(Protoman; Protoman > 0; Protoman-= TiroDoMegaman){
	TirosNecessarios.push(Protoman);

}
console.log(`Para derrotar o Protoman serao necessarios ${TirosNecessarios.length} Tiros`);
console.log('');
 console.log('####### AQUI TERMINA O TERCEIRO EXERCÍCIO  ########');
/*
#######    Exercício 4   #######

SE ACHA QUE CONSEGUE TENTE RESOLVER ESSE. ******************
6-Em um jogo antigo Megaman vai enfrentar Protoman que possui 250 de vida, cada tiro de megaman tira aleatoriamente de 1 a 3 de vida de Protoman e o código para calcular um número aleatório entre 1 e 3 está escrito abaixo, escreva o código que imprima no console quantos tiros de Megaman são necessários para derrotar Protoman. Dica: Lembre-se que não é necessário entender como o código da função faz só o que faz.

function calculaDano(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

*/
console.log('');
 console.log('####### AQUI COMECA O QUARTO EXERCÍCIO  ########');
 console.log('');
function calculaDano(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Protoman2 = 250;
let TirrosDoMegamanAleatorios = calculaDano(1,3);
let TirosNecessariosAleatorios = [];

	for(Protoman2; Protoman2 > 0; Protoman2-= TirrosDoMegamanAleatorios){

	TirosNecessariosAleatorios.push(Protoman2);

}
console.log(`Para derrotar o Protoman serao necessarios ${TirosNecessariosAleatorios.length} Tiros`);
console.log('');
 console.log('####### AQUI TERMINA O QUARTO EXERCÍCIO  ########');
