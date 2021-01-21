var diryJ ,dirxJ,jog,velJ,pjx,pjy;
var velT;
var tamTelaW,tamTelaH;
var jogo;
var fram;

function teclaDw(){ //Quando uma tecla é primada
	var tecla = event.keyCode;
	
	if(tecla==37){ //Esquerda
		dirxJ = -1;
	} 
	else if(tecla==38){ //Cima
		diryJ = -1;
	}
	else if(tecla==39){ //Direita
		dirxJ = 1;
	}
	else if(tecla==40){ //Baixo
		diryJ = 1;
	}
    if(tecla==32){ //Espaco / Tiro
		//Chamar funcao atirar()
		atira(pjx+17,pjy);
	}
}

function teclaUp(){ //Quando uma tecla é solta
		var tecla = event.keyCode;
		
	if( (tecla==38) || (tecla==40) ){
		diryJ = 0;
	}
	if( (tecla==37) || (tecla==39) ){
		dirxJ = 0;
	}
}

function atira(x,y){
	
	var t = document.createElement("div");
	var att1 = document.createAttribute("class");
	var att2 = document.createAttribute("style");
	att1.value = "tiroJog";
	att2.value = "top:"+y+"px;left:"+x+"px";
	
	t.setAttributeNode(att1);
	t.setAttributeNode(att2);
	document.body.appendChild(t);
}

function controleTiro(){
	
	var tiros = document.getElementsByClassName("tiroJog");
	var tam = tiros.length;
	
	for(var i = 0;i<tam;i++){
		
		if(tiros[i]){
			
		    var pt = tiros[i].offsetTop;
			pt-=velT;
			tiros[i].style.top = pt+"px";
			
			if(pt<0){
				tiros[0].remove();
			}			
		}	
	}	
}

function controlaJogador(){
	pjy+=diryJ*velJ;
	pjx+=dirxJ*velJ;
	
    jog.style.top=pjy+"px";
	jog.style.left = pjx+"px";
}

function gameLoop(){
	if(jogo){
		//Funcoes Controle
		controlaJogador();
		controleTiro();
	}
	fram = requestAnimationFrame(gameLoop);
	
}

function inicia(){
	jogo = true;
	
	//inicializacao da tela
	tamTelaH = window.innerHeight;
	tamTelaW = window.innerWidth;
	
	//inicializacao jogador
	dirxJ = diryJ = 0;
	pjx = tamTelaW/2;
	pjy = tamTelaH/2;
	velJ =5;
	velT = 10;
	jog = document.getElementById("navJog");
	jog.style.top=pjy+"px";
	jog.style.left = pjx+"px";
	
	gameLoop();
}

window.addEventListener("load",inicia);
document.addEventListener("keydown",teclaDw);
document.addEventListener("keyup",teclaUp);