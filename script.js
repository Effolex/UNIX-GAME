		var answers = ["ls", "ls -a", "mkdir", "cd pasta1", 
			"cd", "cd ..", "pwd", "cp arq1 arq2", "mv arq1 arq2", 
			"rm arq", "rmdir pasta1", "cat arq", "less arq", "head arq", 
			"tail arq", "wc arq", "*","man help", "whatis help"];
		var questions = ["lista arquivos e diretorios", 
			"lista TODOS os arquivos e diretorios", "cria um diretorio", 
			"muda para o diretório chamado pasta1", "muda para o diretório home quando passado sem argumentos",
			"muda para o diretorio pai", "mostra o caminho do diretorio atual",
			"copia arq1 e o chama de arq2", "move ou renomeia arq1 para arq2",
			"remove o arquivo chamado arq", "remove o diretorio chamado pasta1",
			"exibe o arquivo chamado arq", "exibe um arquivo chamado arq, uma página por vez",
			"exibe as primeiras linhas do arquivo arq", "exibe as ultimas linhas do arquivo arq", "conta o numero de linhas / palavras / caracteres no arquivo arq",
			"corresponde a um caracter", "le a pagina do manual online do comando help", "breve descrição do comando help" ];
		

var userConsole = document.getElementById("console");
var userInput = document.getElementById("uConsole");
var botao = document.getElementById("botao"); 

/* links  usados:
-Is it possible to append to innerHTML without destroying descendants' event listeners?-
https://stackoverflow.com/questions/595808/is-it-possible-to-append-to-innerhtml-without-destroying-descendants-event-list
-HTML Display line breaks within textarea-
https://stackoverflow.com/questions/13484985/html-display-line-breaks-within-textarea
-Making Enter key on an HTML form submit instead of activating button-
https://stackoverflow.com/questions/8294465/making-enter-key-on-an-html-form-submit-instead-of-activating-button
-How do I set textarea scroll bar to bottom as a default?-
https://stackoverflow.com/questions/9170670/how-do-i-set-textarea-scroll-bar-to-bottom-as-a-default
*/

var contador = 0;
var booleano = true;
var corretas = 0;
var erradas = 0;
userInput.addEventListener("keypress", function(evento){
	if(evento.key === 'Enter'){
		if(!booleano && contador < 19){
			if(userInput.value === answers[contador]){
				userConsole.appendChild(document.createTextNode(
					"\r\n"+"\r\n"+"> "+ answers[contador] + " < " +" É A RESPOSTA CORRETA! BOOA!! "  
				));
				userInput.value = "";
				corretas++;
			} 
			else{
				userConsole.appendChild(document.createTextNode(
					"\r\n"+"\r\n"+"ERROU, NA PROXIMA VOCE CONSEGUE!! A RESPOSTA CORRETA SERIA > "+ answers[contador] + " <"
				));
				userInput.value = ""
				erradas ++;
			}

			contador++
			
		}

		if(booleano && contador < 19){
			userConsole.appendChild(document.createTextNode(
				"\r\n"+"\r\n"+"qual comando "+questions[contador]+"?"
			));
			
		}
		if (booleano && contador == 19) {
			userConsole.innerText = 'PARABENS VOCE TERMINOU O JOGO!!!';
			userConsole.appendChild(document.createTextNode(
				"\r\n"+"Vezes que voce acertou: "+corretas
			));
			userConsole.appendChild(document.createTextNode(
				"\r\n"+"Vezes que voce errou: "+erradas
			));
			userConsole.appendChild(document.createTextNode(
				"\r\n"+"Se quiser jogar novamente é só atualizar a pagina!!"
			));
		}
		
		
		
		trocaBooleano();
		//userConsole.appendChild(document.createTextNode("\r\n"+userInput.value));
		//userInput.value = "";
		console.log(contador);
		console.log(booleano);
		userConsole.scrollTop = userConsole.scrollHeight;
	}
});
function trocaBooleano(){
	if(booleano){
		booleano = false;
		return;
	}
	
	if(!booleano){
		booleano = true;
		return;
	}
}
