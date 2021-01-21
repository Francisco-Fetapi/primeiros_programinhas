var divInicio = document.querySelector('#inicio');
var divRes = document.querySelector('#results');

divRes.setAttribute('style','display:none;');

var nomeU ;
var numDisc;

var vetDisc = [];
var vetNota = [];

var divDetalhe = document.querySelectorAll(".detalhes");
var divInforma = document.querySelector(".informa");
var resultsBusca = document.querySelector(".resultsBusca");
var tabDetalhe = document.querySelector(".informa table tbody");

var contaVezes = 0;

function comeca(){
    
    nomeU = document.querySelector('#nomeUs');
    numDisc = document.querySelector('#numDisc');

    if(numDisc.value.length==0 || numDisc.value<2){
        window.alert('Nenhum campo pode estar vazio e o numero de disciplinas tem de ser maior ou igual a 2');
    }
    else{
        divInicio.setAttribute('style','display:none;');
        divRes.setAttribute('style','display:block;');
    }

}

var contD = 1;

function atualizaElem(){
    contD++;
    var tit =  document.querySelector('#tituloD');
    var disc =  document.querySelector('#nomeDisc');
    var nota =  document.querySelector('#notaDisc');
    
    disc.value="";
    nota.value = 0;
    tit.innerHTML = `Disciplina ${contD}`;
    
}
function registar(){
    
    var disc =  document.querySelector('#nomeDisc').value;
    var nota =  document.querySelector('#notaDisc').value;
    var aviso =  document.querySelector('.avisoT');
   
    if(validado(disc,nota)){
        vetDisc.push(disc);
        vetNota.push(nota);

        aviso.setAttribute('style','display:none');
        atualizaElem();
        contaVezes++;
            if(contaVezes==numDisc.value){
                encerraRegis();
                mostrarDetalh();
            }
    }
    else{
        aviso.setAttribute('style','display:block');
    }
  
}

function validado(cxDisc,cxNota){

    if(cxDisc!="" && cxNota>=0 &&  cxNota<=20 && cxNota != ""){
        return true;
    }
    else{
        return false;
    }

}

var divCons = document.querySelector(".consulta");

function encerraRegis(){
    window.alert('Ultimo Registo');

    // a div dos registos desaparece
    divRes.setAttribute('style','display:none');

    //calcula a maior , a menor e a media das notas
   
    calcMaiorMenorMedia();
    
    //aparece a div dos resultados com o menu para novas operações
    divCons.setAttribute('style','display:block');
}

var maior = 0;
var menor;
var media = 0;
var soma = 0;

var discMaior = "";
var discMenor = "";
function calcMaiorMenorMedia(){
    
    menor = parseFloat(vetNota[0]);

        for(var i = 0;i < numDisc.value;i++){

           vetNota[i] = parseFloat(vetNota[i]);

            if(vetNota[i]>maior){
                maior = vetNota[i];
                discMaior = vetDisc[i];
            }
            if(vetNota[i]<menor){
                menor = vetNota[i];
            }

            soma += Number(vetNota[i]);
        }  
    media = soma/vetNota.length;
}

function mostrarDetalh(){

    var classeAdicional = "";
    var classeAdicionalMaior = "notaPos";
    var classeAdicionalMenor = "notaPos";
    var classeAdicionalMedia = "notaPos";

    divDetalhe[0].setAttribute('style','display:block');
    for(var i = 0;i < contaVezes;i++){

        if(vetNota[i]>=10){
            classeAdicional = "notaPos";
        }
        else{
            classeAdicional = "notaNeg";
        }
        divDetalhe[0].innerHTML += `<p class='dis ${classeAdicional}'>${vetDisc[i]}: <span>${vetNota[i]}v</span></p>`;
    }

    divInforma.setAttribute('style','display:block');

    

    if(maior < 10 ){
        classeAdicionalMaior = "notaNeg"
    }
    if(menor < 10 ){
        classeAdicionalMenor = "notaNeg"
    }
    if(media < 10 ){
        classeAdicionalMedia = "notaNeg"
    }

    tabDetalhe.innerHTML = `<tr>
    <td class='${classeAdicionalMaior}'>${maior} <span>(${discMaior})</span></td>
    <td class='${classeAdicionalMenor}'>${menor}</td>
    <td class='${classeAdicionalMedia}'>${media}</td>
</tr>`;
}

var pesqPor;
var op1 = document.querySelector("#e1");
var op2 = document.querySelector("#e2");
    if(op1.checked){
        pesqPor = op1.value;
    }
    else{
        pesqPor = op2.value;
    }

function pesquisaPor(escolha,caixaTexto){
    if(escolha=="nota"){
        //por nota

        caixaTexto.setAttribute('type','number');
        caixaTexto.setAttribute('min','0');
        caixaTexto.setAttribute('max','20');
        caixaTexto.setAttribute('placeholder','Nota da Disciplina');
        caixaTexto.setAttribute('value','');
    }
    else{
        //por disciplina

        caixaTexto.setAttribute('type','text');
        caixaTexto.setAttribute('size','14');
        caixaTexto.setAttribute('placeholder','Nome da Disciplina');
        caixaTexto.setAttribute('value','');
    }

    pesqPor = escolha;
}
function pesquisar(valor){

    if(valor.length==0){
        window.alert('Nenhum valor digitado no campo busca. \n Insira um valor e clica em PESQUISAR!');
    }
    else{
    resultsBusca.innerHTML = "";
    resultsBusca.innerHTML = "<h1>Resultado/s da Busca</h1>";

    if(pesqPor == "nota"){
        //pesquisar por nota
        valor = parseFloat(valor);

        for(var i = 0;i<contaVezes;i++){
            if(vetNota[i]==valor){
                resultsBusca.setAttribute('style','display:block');
                resultsBusca.innerHTML +=`<p>Tiveste ${valor}v em ${vetDisc[i]}</p>`;
            }
            else{
                if(i==contaVezes){
                    resultsBusca.setAttribute('style','display:none');
                }            }
        }
    }
    else if(pesqPor =="disc"){
        //pesquisar por disciplina

        for(var i = 0;i<contaVezes;i++){
            if(vetDisc[i]==valor){
                resultsBusca.setAttribute('style','display:block');
                resultsBusca.innerHTML +=`<p class='dis'>em ${valor} Tiveste ${vetNota[i]}v</p>`;
            }
            else{
                if(i==contaVezes){
                    resultsBusca.setAttribute('style','display:none');
                }
            }
        }
    }
 }
}

//so falta validar
