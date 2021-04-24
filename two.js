/*
#######    Exercício 2   #######
4-Em um jogo online de sinuca cada bola derrubada vale uma determinada pontuação. O jogador 1 derrubou as bolas de valor 8, 25, 1 e 19, o jogador 2 derrubou as bolas de valor 14, 9, 22 e 15. Crie uma função que utilizando FOR retorne o valor total atingido por um jogador e após isso, usando a função, determine quem está vencendo e imprima com console.log "Jogador 1 está vencendo" caso o jogador 1 esteja vencendo ou "Jogador 1 está vencendo" caso o jogador 2 esteja vencendo.

*/
let jogador1 = [8, 25, 1 , 19];
let jogador2 = [14, 9, 22 , 15] ;

let PontuacaoDoJogador1 = 0;
let PontuacaoDoJogador2 = 0;

const que_comece_ojogo = () =>{
	for(i = 0 ; i < jogador1.length; i++){
		PontuacaoDoJogador1 = PontuacaoDoJogador1 + jogador1[i];
	}
	for(i = 0 ; i < jogador2.length; i++){
		PontuacaoDoJogador2 = PontuacaoDoJogador2 + jogador2[i];
	}
	
	if(PontuacaoDoJogador1 > PontuacaoDoJogador2){
		console.log('O Jogador1 Venceu!');
	}else{
		console.log('O Jogador2 Venceu!');
	}
	console.log(`Pontuaçao do jogador1: ${PontuacaoDoJogador1}`);
	console.log(`Pontuaçao do jogador2: ${PontuacaoDoJogador2}`);
}
console.log('');
console.log('####### AQUI COMECA O SEGUNDO EXERCÍCIO  ########');
console.log('');
 que_comece_ojogo();
 console.log('');
 console.log('####### AQUI TERMINA O SEGUNDO EXERCÍCIO  ########');