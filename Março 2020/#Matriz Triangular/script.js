var textoDofooter = $('footer').html();
var addInTabela = $('#numAdd');
var addInLinha = $('#linAdd');
var addInColuna = $('#colAdd');

addInLinha.val('1');
addInColuna.val('1');

function informar(msg,tempo=1){ 
    $('footer').html(msg);
    setTimeout(function(){
        $('footer').html(textoDofooter);
    },tempo*1000);
   
}

$(window).ready(function(){
    $("#exercicio").slideToggle(700,informar('Clique ENTER para ler o Exercicio',2));
    $('#lin').val('3');
    $('#col').val('3');
})
$(window).keydown(function(){
    if(event.which==32){
        $("#exercicio").slideToggle(300);
    }
    if(event.which==37){
        $('.principal:first').slideToggle(500);   
    }
})

document.querySelector('#lin').addEventListener("input",()=>{
    $('#col').val($("#lin").val());
    // console.log($(this).val().toString());
})

var tbody = $('table tbody');

$('.botao:first').click(function(){

    $('.telaRes').show();
    var lins = $('#lin').val();
    var cols = $('#col').val();

    if(lins > 5){
       var execMesmo = window.confirm("Tem certeza que quer preencher: "+(lins**2)+" registos")
        if(execMesmo){
            criarTrs()
        }
    }
    else{
        criarTrs();
    }
 
})

var criarTds = num =>{
    for(var c = 1;c<=num;c++){
        tbody.append('<td>0</td>');
    }
    tbody.html(tbody.html()+'</tr>');}
var criarTrs = () =>{

    $('.principal:first').slideUp(800);
    informar('Clique para cima</br> se quiseres criar uma nova tabela',3);


    var lins = $('#lin').val();
    var cols = $('#col').val();

    tbody.empty();
    for(let ln = 1;ln<=lins;ln++){
        tbody.html(tbody.html()+'<tr>');
        criarTds(lins);
    }
    $('tr:empty').remove();
    selecionaElemento(1,1).addClass('selected');
}
var lins = $('#lin');
var cols = $('#col');

var inserirNaTabela = (valor,linha,coluna) =>{

    if(addInTabela.val()==""){
        informar('Digite algum dado!',2)
    }

    else{
        
        if(jaExiste(valor)){
            informar('O numero ja existe na tabela',3);
            addInTabela.val("");

        }else{
            if(addInLinha.val() <= lins.val()){
                selecionaElemento(addInLinha.val(),addInColuna.val()).html(valor);
                destacaSelecionado();
                addInColuna.val(Number(addInColuna.val())+1)
                addInTabela.val("");
                if(addInColuna.val()>cols.val()){
                    addInLinha.val(Number(addInLinha.val())+1);
                    addInColuna.val('1');
                }
            }
            else{
                informar('Não restam masi registos!',2);
            } 

        }
    }
    addInTabela.focus();
}
addInTabela.keydown(function(){
    if(event.keyCode == 13){
        inserirNaTabela(addInTabela.val(),addInLinha.val(),addInColuna.val());
    }
})
$('.botao:eq(1)').click(function(){
    inserirNaTabela(addInTabela.val(),addInLinha.val(),addInColuna.val());
})
$('.cxTexto:gt(2)').change(function(){
    addInColuna.attr({max:2,min:0});
    $('td').each(function(ind,td){
        td.classList.remove('selected');
    })
    if($('.cxTexto:last').change(function(){
        informar(`A coluna vai de 0 à ${lins.val()-1} </br> o primeiro elemento é 0`,5)  
    }))
    destacaSelecionado();
})

var selecionaElemento = (linha,coluna)=>{
    return $(`tr:nth-child(${linha})`).children(`td:nth-child(${coluna})`);
}
var destacaSelecionado = () => {
    selecionaElemento(addInLinha.val(),addInColuna.val()).removeClass('selected');
    if(addInColuna.val()==cols.val()){
        selecionaElemento(Number(addInLinha.val())+1,1).addClass('selected');
    }
    selecionaElemento(addInLinha.val(),Number(addInColuna.val())+1).addClass('selected');
}
function jaExiste(valor){
    var itensInseridos = [];
    $('td').each(function(ind,ele){
        itensInseridos.push(ele.innerText);
    })
    if(itensInseridos.indexOf(valor) >=0 && valor!=0){
        return true;
    }
    else{
        console.log(itensInseridos);
        return false;
    }
    
}