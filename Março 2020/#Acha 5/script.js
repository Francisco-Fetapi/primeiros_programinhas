var DescEx = document.querySelector('#DescEx');//div do exercicio
var divIn=document.querySelector('#inicio');//div inicial
var divJoga = document.querySelector('#joga');//div Principal
var palt1 = document.querySelector('#palt1'); //palav de teste1
var palt2 = document.querySelector('#palt2');//palav de teste2
var pal1;
var pal2;
var divaviso = document.querySelector('.aviso');//div de aviso

var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');

var div1 = document.querySelector('#div1');//div1 de teste de Pal
var div2 = document.querySelector('#div2');//div1 de teste de Pal

var divr = document.querySelector('.res');
var divres = document.querySelectorAll('.res div');

var vetP1 = []; //vetor da palavra 1
var vetP2 = []; //vetor da palavra 2

var vetT1 = []; //vetor da palavra de teste 1
var vetT2 = []; //vetor da palavra de teste 2

var vetD1 = []; //vetor das palavras descobertas 1
var vetD2 = []; //vetor das palavras descobertas 2

divJoga.setAttribute('style','display:none;');//divJoga desaparece

function colocaStNoVetor(vetor,texto){
    var palavra = texto.value;    


    if(vetor.length>0){ //se tiver itens no vetor apagar todos
        for(var i = 0;i<5;i++){
            vetor.pop();
        }
    }

    for(var i = 0;i<5;i++){
        vetor.push(palavra.substr(i,1)); //inserir cada string da palavra numa posição do vetor
    }

}


function comecar(){
  
    pal1 = document.querySelector('#pal1');
    pal2 = document.querySelector('#pal2');
    
    palt1.value = "";
    palt2.value = "";

    divr.setAttribute('style','display:none;');


    divres[0].setAttribute('style','display:none;');
    divres[1].setAttribute('style','display:none;');

    var cxTexto = document.querySelectorAll('.n1');
    for(var i = 0;i<cxTexto.length;i++){
        cxTexto[i].value = "";
    }


    if(validado()){
        colocaStNoVetor(vetP1,pal1);
        colocaStNoVetor(vetP2,pal2);

        divJoga.setAttribute('style','display:block;');
        divIn.setAttribute('style','display:none;');
        DescEx.setAttribute('style','display:none;');
        
        div1.classList.add('jogAt');
    }
    else{
        divaviso.setAttribute('style','display:block');
    }
    
}
function validado(){
    if(pal1.value == "" || pal2.value==""){
        divaviso.innerHTML="Nenhum dos campos pode estar vazios.<br/> POR FAVOR PREENCHAM TODOS OS DADOS!"
        return false;
    }
    else if(pal1.value.length < 5 || pal2.value.length < 5 ){
        divaviso.innerHTML="O texto digitado nos campos tem de ter no minimo e no maximo 5 caracteres!";
        return false;
    }
    else{
        divaviso.setAttribute('style','display:none');
        return true;
    }
}

function numLetIgu(vetorT,vetorP,vetorD){
    var numLetIg = 0;
   
    for(var i = 0;i<vetorT.length;i++){

        if(vetorP.indexOf(vetorT[i])!=-1){
            if(vetorD.indexOf(vetorT[i])==-1){
                vetorD.push(vetorT[i]);
            }
            numLetIg += 1;
        }
    }
    return numLetIg;
}


var qt1 = 0;
var qt2 = 0;


function testar1(aviso){
    
    if(palt1.value.length<5){
        aviso.setAttribute('style','display:block');
    }
    else{
        divr.setAttribute('style','display:block;');

        aviso.setAttribute('style','display:none');

        colocaStNoVetor(vetT1,palt1);

        document.querySelector('#msg1').innerHTML = `<b> ${palt1.value}</b> tem <b>${numLetIgu(vetT1,vetP2,vetD1)}</b> letra/s da palavra secreta`;
        qt1 = vetD1.length;
        document.querySelector('#qtD1').innerHTML = qt1;

        //Para alternar entre um jogador e outro---visualmente
        div1.classList.remove('jogAt');
        div2.classList.add('jogAt');
    
        desabilita('sim',palt1);
        desabilita('sim',btn1);
        desabilita('nao',palt2);
        desabilita('nao',btn2);

        divres[0].setAttribute('style','display:block;');//a div dos resultados do Jog1 aparece
        divres[1].setAttribute('style','display:none;');//a div dos resultados do Jog2 desaparece

        palt1.value = "";
    }
    
}
function testar2(aviso){
  
    if(palt2.value.length<5){
        aviso.setAttribute('style','display:block');//a div do aviso do aparece
    }
    else{
        divr.setAttribute('style','display:block;');//a div dos resultados aparece

        aviso.setAttribute('style','display:none');//a div do aviso do desaparece
    }

       colocaStNoVetor(vetT2,palt2);

        document.querySelector('#msg2').innerHTML = `<b> ${palt2.value}</b> tem <b>${numLetIgu(vetT2,vetP1,vetD2)}</b> letra/s da palavra secreta `;
        qt2 = vetD2.length;
        document.querySelector('#qtD2').innerHTML = qt2;

        //Para alternar entre um jogador e outro---visualmente
        div2.classList.remove('jogAt');
        div1.classList.add('jogAt');
        
        desabilita('nao',palt1);
        desabilita('nao',btn1);
        desabilita('sim',palt2);
        desabilita('sim',btn2);
 
        divres[0].setAttribute('style','display:none;');//a div dos resultados do Jog1 desaparece
        divres[1].setAttribute('style','display:block;');//a div dos resultados do Jog2 aparece

        palt2.value = "";
    }
    


function verifica(valor1,valor2,jogador){

    if(valor1.value.length == 5){ //se o tamanho do valor que estiver em Valor1 for igual a 5
        if(valor1.value==valor2.value){
            //Ganhou o Jog
            valor1.classList.remove('errado');
            valor1.classList.add("certo");

            vitoria(jogador);
        }
        else{
          //Ainda Não 
          valor1.classList.remove('certo');
          valor1.classList.add("errado");

        }

    }
}
function desabilita(valor,elemento){
    if(valor=="sim"){
        elemento.setAttribute('disabled',"disabled");
    } 
    else if(valor=="nao"){
        elemento.removeAttribute('disabled');
    }


}

function vitoria(jog){

    if(jog == "jog1"){
        //Jogador1 ganhou
        window.alert(`O jogador1 foi o vencedor! parece que ele descobriu a sua palavra secreta Jogador2. \n Pela proxima inventa uma palavra mais dificil.\n \'${pal2.value}\' \n não é tão dificil`);
        recomecar();
    }
    else{
        //Jogador2 ganhou
        window.alert(`O jogador2 foi o vencedor! parece que ele descobriu a sua palavra secreta Jogador1. \n Pela proxima inventa uma palavra mais dificil.\n \'${pal1.value}\' \n não é tão dificil`);
        recomecar();
    }


}

function recomecar(){
    divJoga.setAttribute('style','display:none;');//divJoga desaparece
    divIn.setAttribute('style','display:block;');//divInicio aparece
    pal1.value = "";
    pal2.value = "";

    qt2 = 0;
    document.querySelector('#qtD2').innerHTML = qt2;
    qt1 = 0;
    document.querySelector('#qtD2').innerHTML = qt1;

    //limpa os vetores que têm as letras descobertas
    vetD1.splice(0,vetD1.length);
    vetD2.splice(0,vetD2.length);
}