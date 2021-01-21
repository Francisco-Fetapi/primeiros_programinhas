var textoDofooter = $('footer').html();

function Jogador(escolha,ponto,nome){
    this.escolha = escolha;
    this.pontos = ponto;
    this.nome = nome;
    this.ganhei = () =>{
        this.pontos += 1; 
        this.declaraVitoria();
        registar();
    }
    this.declaraVitoria = () =>{
        informar(`${this.nome}</b>`,12,'naDiv')
    }
}

var computador = new Jogador('',0,'Computador');
var eu = new Jogador('',0,'Você');


function informar(msg,tempo=1,onde){ 
    var aonde = '';
    if(arguments.length == 3){
        aonde = '#resultados div:nth-child(2)';
    }
    else{
        aonde = 'footer';
    }
    $(aonde).html(msg);
    setTimeout(function(){
        $('footer').html(textoDofooter);
    },tempo*1000);   
}
function registar(){
    $('#ptComp').text(computador.pontos);
    $('#ptMeu').text(eu.pontos);
}

var escolhas = ['Pedra','Papel','Tesoura'];

$(window).ready(function(){
    $("#exercicio").slideToggle(700,informar('Clique ENTER para ler o Exercicio',3));

    var campoJog = $('.campo:first').clone();
    campoJog.attr('id','EU');
    $('#corpo').append(campoJog);
   
    $('.deJogo button').attr('disabled','disabled').fadeTo('slow',0.5);

    setTimeout(function(){
        $('#resultados div').animate({marginLeft:-1000},700);
        $('.deJogo button').removeAttr('disabled').fadeTo('slow',1);
   },2000);

    $('#EU div button').click(function(){
        eu.escolha = $(this).text().trim();
        computador.escolha = escolhas[Math.floor(Math.random()*3)];
        
        $('#resultados div').animate({marginLeft:0},300);
        
            $('#resultados div:first').html(computador.escolha+'<span>(CPU)</span>');
            $('#resultados div:last').html(eu.escolha+'<span>(Você)</span>');
    
            if(eu.escolha == 'Pedra'){
                if(computador.escolha == 'Tesoura'){
                    eu.ganhei();
                }else if(eu.escolha == computador.escolha){
                    empate();
                }
                else{
                    computador.ganhei();
                }
            }
            else if(eu.escolha == 'Papel'){
                if(computador.escolha == 'Pedra'){
                    eu.ganhei();
                }else if(eu.escolha == computador.escolha){
                    empate();
                }
                else{
                    computador.ganhei();
                }
            }
            else if(eu.escolha == 'Tesoura'){
                if(computador.escolha == 'Papel'){
                    eu.ganhei();
                }else if(eu.escolha == computador.escolha){
                    empate();
                }
                else{
                    computador.ganhei();
                }
            }
    
            $('.deJogo button').attr('disabled','disabled').fadeTo('slow',0.5);
       setTimeout(function(){
            $('#resultados div').animate({marginLeft:-10000},1000)
            $('.deJogo button').removeAttr('disabled').fadeTo('slow',1);

       },3500)

        console.log(`${eu.escolha} VS ${computador.escolha}`);
})

})
function empate(){
    informar('Hove um empate!',12,'naDiv');
}

$(window).keydown(function(){
    if(event.which==32){
        $("#exercicio").slideToggle(300);
    }
})


