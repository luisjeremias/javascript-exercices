/*
#######    Exercício 1   #######
1-Um usuário fazendo compras num site colocou vários produtos no carrinho. Os preços desses produtos estão no array seguinte: [100, 250, 1.99, 14.50]. Crie uma função que calcule o total do valor do carrinho de compras. Imprima o resultado na tela com console.log.

2-Ao exibir os valores do carrinho de compras do usuário, eles não estão sendo formatados corretamente na tela, corrija esse problema colocando R$ na frente de cada valor. Crie um for retornando cada valor formatado corretamente, utilize o mesmo array de valores do exercício anterior. Imprima o resultado na tela com console.log.

3-O usuário do exercício anterior decidiu acrescentar 3 livros a compra dele, os valores desses itens são [150.99, 90, 84.99]. Crie um for e use PUSH para acrescentar os itens no carrinho. Imprima o resultado na tela com console.log.

*/


let ValorDeCompras = [100, 250, 1.99, 14.50];
let NovasCompras = [150.99, 90, 84.99];
let ValorFinal = 0; 


const calcular = () =>{
		for(i = 0; i < ValorDeCompras.length; i++){
			ValorFinal = ValorFinal + ValorDeCompras[i];

		}
		console.log(ValorFinal)
}

const formatar = () =>{
	for(i = 0; i < ValorDeCompras.length; i++){
			console.log(`R$ ${ValorDeCompras[i]}`);

		}
		
}
const AdicionarAoCarrinho = ()=>{
	for(i = 0; i < NovasCompras.length; i++){
		 ValorDeCompras.push(NovasCompras[i]);

		}
		console.log(ValorDeCompras);
}
console.log('####### AQUI COMECA O PRIMEIRO EXERCÍCIO  ########');
console.log('');
calcular();
formatar();
AdicionarAoCarrinho();
console.log('');
console.log('####### AQUI TERMINA O PRIMEIRO EXERCÍCIO  ########');