//Todo o java script do jogo deve ser colocado aqui
  alert('opsjkjhjhjhjhjkhljkhjhljh');
$('idade').onload(function()){
  alert('ops');
  document.getElementById('idade').innerHTML='Boa noite'; //tentativa frustrada de colocar o span idade e calcular a idade automática
}

$.getJSON("http://rarolabs.com.br:88/alunos.json", "json", function(data) {
					$.each(data, function(key, val) {
				    
					$("#tabela tbody").append("<tr><td id='nome'><a href='"+val['link_html'] +"'>"+val['nome']+"</a></td><td>"+val['mini_curriculo']+"</td></tr>")
					
						});
					});



function rand(num_minimo,num_maximo) {
	return Math.floor((Math.random() * (num_maximo-num_minimo+1))+num_minimo);
}
function calculoJogoLinha(){
	var soma = 0
	for(var l = 1; l <= 3; l++){
		for(var c = 1; c <= 3; c++){
			//var valor = $('.'+String(l)+'_'+String(c)).text();
			var valor = $('.'+String(l)+'_'+String(c)).attr("title");
			if(valor == "O"){
				soma += 1;
			}else if(valor == "X"){
				soma -= 1;
			}
		}
		if(soma == 3 || soma == -3){
			return soma;
		}else{
			soma = 0;
		}
	}
	return soma;
}
function calculoJogoColuna(){
	var soma = 0
	for(var l = 1; l <= 3; l++){
		for(var c = 1; c <= 3; c++){
			//var valor = $('.'+String(c)+'_'+String(l)).text();
			var valor = $('.'+String(c)+'_'+String(l)).attr("title");
			if(valor == "O"){
				soma += 1;
			}else if(valor == "X"){
				soma -= 1;
			}
		}
		if(soma == 3 || soma == -3){
			return soma;
		}else{
			soma = 0;
		}
	}
	return soma;
}
function calculoJogoDiagonal(){
	var soma = 0;
	/*
	var valor_1 = $('.1_1').text();
	var valor_2 = $('.2_2').text();
	var valor_3 = $('.3_3').text();
	var valor_4 = $('.3_1').text();
	var valor_5 = $('.1_3').text();
	*/
	var valor_1 = $('.1_1').attr("title");
	var valor_2 = $('.2_2').attr("title");
	var valor_3 = $('.3_3').attr("title");
	var valor_4 = $('.3_1').attr("title");
	var valor_5 = $('.1_3').attr("title");
	if((valor_1 == "X" && valor_2 == "X" && valor_3 == "X") || (valor_2 == "X" && valor_4 == "X" && valor_5 == "X")){
		return -3;
	}else if((valor_1 == "O" && valor_2 == "O" && valor_3 == "O") || (valor_2 == "O" && valor_4 == "O" && valor_5 == "O")){
		return 3;
	}else{
		return 0;
	}
}
$('input[type="button"]').click(function(){
	window.open('index.html', "_self");
});

$('span').click(function(){
	//var campo = $(this).text();
	var campo = $(this).attr("title");
	if(campo == ''){
		//$(this).html("X");
		$(this).css("background", "url(x.png) no-repeat 50% 50%");
		$(this).attr("title", "X");
		var robo = 1;
		
		if(calculoJogoLinha() == -3 || calculoJogoColuna() == -3 || calculoJogoDiagonal() == -3){
			alert("Você ganhou do robô!");
			robo = 0;
		}
		var valor = calculoJogoLinha();
		var total_jogo = 1;
		while(robo != 0){
			var linha = rand(1, 3);
			var coluna = rand(1, 3);
			//var jogo = $('.'+String(linha)+'_'+String(coluna)).text();
			var jogo = $('.'+String(linha)+'_'+String(coluna)).attr("title");
			if(jogo == ''){
				//$('.'+String(linha)+'_'+String(coluna)).html("O");
				$('.'+String(linha)+'_'+String(coluna)).css("background", "url(v.png) no-repeat 50% 50%");
				$('.'+String(linha)+'_'+String(coluna)).attr("title", "O");
				if(calculoJogoLinha() == 3 || calculoJogoColuna() == 3 || calculoJogoDiagonal() == 3){
					alert("O robô ganho de você!");
				}
				robo = 0;
			}
			if(total_jogo == 100){
				alert('Jogo empatado!');
				robo = 0;
			}
			total_jogo++;
		}
		
	}else{
		alert('Escolhe outro campo!');
	}
});


function calculaIdade(dataNasc)
{ 
alert("teste");

	var dataAtual    = new Date();	
	var anoAtual     = dataAtual.getFullYear();
	var anoNascParts = dataNasc.split('/');
	var diaNasc  = anoNascParts[0];
	var mesNasc  = anoNascParts[1];
	var anoNasc  = anoNascParts[2];
	var idade    = anoAtual - anoNasc;
	var mesAtual = dataAtual.getMonth() + 1; 
	//se mês atual for menor que o nascimento, nao fez aniversario ainda; (26/10/2009) 
	if(mesAtual < mesNasc){
		idade--; 
	}else {
	//se estiver no mes do nasc, verificar o dia
	if(mesAtual == mesNasc){ 
		if(dataAtual.getDate() < diaNasc ){ 
		//se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
		idade--; 
    }
  }
} 
return idade; 
}
