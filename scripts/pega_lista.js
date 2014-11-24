alert('ola mundo');
					$.getJSON("http://rarolabs.com.br:88/alunos.json", "json", function(data) {
					$.each(data, function(key, val) {
				    
					$("#tabela tbody").append("<tr><td id='nome'><a href='"+val['link_html'] +"'>"+val['nome']+"</a></td><td>"+val['mini_curriculo']+"</td></tr>")
					
						});
					});
