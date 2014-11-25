$( document ).ready(function() 
{					
  					$.getJSON("http://rarolabs.com.br:88/alunos.json", "json", function(data) {
					$.each(data, function(key, val) {
				    
					$("#tabela tbody").append("<tr><td id='nome'><a href='"+val['link_html'] +"'>"+val['nome']+"</a></td><td id='mini'>"+val['mini_curriculo']+"</td></tr>")
					
						});
					});
})


/*Deixar a idade sempre atualizada*/
$("#idade").ready(function()
{
	var dataNasc     = new Date("1970","03","03"); /*rodrigo...só pra descobrir como trabaljhar com data em javascript perdi umas 2 horas...kkk*/
	var dataAtual    = new Date();
	var anoAtual     = dataAtual.getFullYear();
	
	var diaNasc  = dataNasc.getDay();
	var mesNasc  = dataNasc.getMonth() + 1;
	var anoNasc  = dataNasc.getFullYear();
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
	document.getElementById('idade').innerHTML=idade + ' anos';

})




