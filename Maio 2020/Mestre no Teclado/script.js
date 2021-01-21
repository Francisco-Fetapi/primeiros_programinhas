var letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var codigoLetras = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
var numLetrasDispon = letras.length;
var setInt;//controla a criacao aleatoria de cada div
var letrasApanhadas = 0;
var letrasAApanhar = 0;
var letrasPerdidas = 0;
var intervalos = [500,600,700,800,1000];//intervalo de tempo entre cada letra
var intervalo;
var intApaga;
var setInt2;//controla a definicao do intervalo
var tempoDeQueda = 4000;//Tempo de duracao da queda
var porcaoATirar = 0;//a tirar da barra de progresso
var larguraAntiga = 100;//da barra de pogresso
$(function(){

    $('#modalInicio').modal('show');
    // iniciarJogo();
    $('#modalInicio .btn').click(function(){
        if($('#nomeJ').val()!='' && $('#totLet').val()>=2 && $('#tempQueda').val()>=1){
            if($('#tempQueda').val()>0 && $('#tempQueda').val()<=1){
                let c = window.confirm('Tem certeza que desejas que as letras caiam em '+$('#tempQueda').val()+' segundos');
                if(c){
                    iniciarJogo();
                }
            }
            else{
                iniciarJogo();
            }
        }
        else{
            window.alert('Dados não inseridos ou inválidos!\n Nenhum campo pode estar vazio e o número de letras a cair tem de ser no mínimo 2.')
        }
    });
    setInt2 = setInterval(() => {
        var indiceAleatorio = Math.floor(Math.random()*intervalos.length);
        intervalo = intervalos[indiceAleatorio];
        console.log(intervalo);
    },500);
    function iniciarJogo(){
        $('#modalInicio').modal('hide');
        $('#nomeJog').text($('#nomeJ').val());
        letrasAApanhar = $('#totLet').val();
        $('#LetrasAApanhar').text(letrasAApanhar);
        $('#tempoR').text('00m:00s');
        tempoDeQueda = parseInt($('#tempQueda').val())*1000;
        //Definindo o intervalo de queda
        
        //criando as divs na tela
         setInt = setInterval(() => {
             //definindo a letra da div
            var indiceAleatorio =Math.floor(Math.random()*numLetrasDispon);
            var QualLetra = letras[indiceAleatorio];
            while(estaNaTela(QualLetra)){
                indiceAleatorio =Math.floor(Math.random()*numLetrasDispon);
                QualLetra = letras[indiceAleatorio];
            }
            //definindo a posicao da div
            var posX = Math.floor(Math.random()*98);
            var posFinal = `left:${posX}%;`;
            criaLetras(QualLetra,posFinal);
        }, intervalo);
        porcaoATirar = 100 /parseInt($('#totLet').val());
        intApaga = setInterval(()=>{
            apagaCaidas();
        },500);
    }
    function criaLetras(letra,onde){
        $('body').append(`<div class='letra text-center ${letra.toLowerCase()}' style='top:-20%;${onde}'>${letra}</div>`);
        $('.letra').animate({
            'top':'100%'
        },tempoDeQueda);
    }
    function apagaCaidas(){
        $('.letra').each(function(ind,elem){
            if(elem.getAttribute('style').includes('100%')){
                mudarBarraPara(porcaoATirar);
                elem.remove();
                letrasPerdidas++;
            }
        })
    }
    function estaNaTela(letra){
        if($(`.letra:contains(${letra})`).length>0){//se a letra esta na tela
            return true;
        }
        else{
            return false;
        }
    }
    $(document).keydown(function(){
        var codDaTecla = event.which;
        var posCodNoVet = codigoLetras.indexOf(codDaTecla);
        var nomeDaTecla = letras[posCodNoVet];

        removerLetra(nomeDaTecla);
    })
    function removerLetra(letra){
        if(estaNaTela(letra)){
            var elem = $(`.letra:contains(${letra})`);
            elem.css({
              'transition':'all 0.7s linear',  
              'width':'0px',
              'height':'0px',
              'color':'transparent' 
            },1000);
            setTimeout(() => {
                elem.remove();
            }, 1000);
            letrasApanhadas++;
            $('#letrasApanhadas').text(letrasApanhadas+" / ");

            if(letrasAApanhar == letrasApanhadas){
                ganhei();
            }
        }
        else{
            console.log('O elemento nao esta na tela');
        }
    }
    function mudarBarraPara(quanto){
        var larguraAtual = larguraAntiga - quanto;
        var novoWidth = $('.progresso').attr('style').replace(larguraAntiga.toString(),larguraAtual.toString());
        $('.progresso').attr('style',novoWidth);
        if(larguraAtual <= 0){
            perdi();
        }
        larguraAntiga = larguraAtual;
    }
    function ganhei(){
        clearInterval(setInt);
        $('#modalGanho').modal('show');
        $('.letra').remove();
        setTimeout(()=>{
            $('#modalGanho').modal('hide');
            $('#modalInicio').modal('show');
            recomecar();
        },2500);

    }
    function perdi(){
        clearInterval(setInt);
        $('#modalPerda').modal('show');
        $('.letra').remove();
        setTimeout(()=>{
            $('#modalPerda').modal('hide');
            $('#modalInicio').modal('show');
            recomecar();
        },2500);
    }
    function recomecar(){
        clearInterval(setInt2);
        clearInterval(intApaga);
        letrasApanhadas = 0;
        letrasPerdidas = 0;
        porcaoATirar = 0;//a tirar da barra de progresso
        larguraAntiga = 100;//da barra de pogresso 

        $('#letrasApanhadas').text(letrasApanhadas+" / ");
        $('.progresso').attr('style','width:100%');
        setInt2 = setInterval(() => {
            var indiceAleatorio = Math.floor(Math.random()*intervalos.length);
            intervalo = intervalos[indiceAleatorio];
            console.log(intervalo);
        },500);
    }
})
