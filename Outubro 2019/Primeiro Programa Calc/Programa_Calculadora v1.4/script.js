// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

var result=0;
var sinal='';
var num11=0;
var num22=0;
function Somar(){
var num1=0;
  var num2=0;
  num1=document.getElementById('num1').value;
      num1=Number(num1);
   num2=document.getElementById('num2').value;
      num2=Number(num2);
 var resultado= num1 + num2;
     result = resultado;
  document.getElementById('result').innerHTML=num1+" + "+num2+" = "+resultado;
  var sin='+';
  sinal=sin;
  num11=num1;
  num22=num2;
 
}


function Subtrair(){
var num1=0;
  var num2=0;
  num1=document.getElementById('num1').value;
      num1=Number(num1);
   num2=document.getElementById('num2').value;
      num2=Number(num2);
  var resultado= num1 - num2;
  result = resultado;
  document.getElementById('result').innerHTML=num1+" - "+num2+" = "+resultado;
  var sin='-';
  sinal=sin;
  num11=num1;
  num22=num2;
}


function Multiplicar(){
var num1=0;
  var num2=0;
  num1=document.getElementById('num1').value;
      num1=Number(num1);
   num2=document.getElementById('num2').value;
      num2=Number(num2);
  var resultado= num1 * num2;
  result = resultado;
  document.getElementById('result').innerHTML=num1+" x "+num2+" = "+resultado;
  var sin='x';
  sinal=sin;
  num11=num1;
  num22=num2;
  }

function Dividir(){
var num1=0;
  var num2=0;
  num1=document.getElementById('num1').value;
      num1=Number(num1);
   num2=document.getElementById('num2').value;
      num2=Number(num2);
  var resultado= num1 / num2;
  result = resultado;
  document.getElementById('result').innerHTML=num1+" ÷ "+num2+" = "+resultado;
  var sin='÷';
  sinal=sin;
  num11=num1;
  num22=num2;
  
}

function Limpar(){
  
  document.getElementById('num1').value="";
  document.getElementById('num2').value="";
  
  document.getElementById('result').innerHTML="0 + 0 = 0";
  
  }

function Resultado(){
  
  document.getElementById('num1').value=result;
  document.getElementById('num2').value="";
  document.getElementById('result').innerHTML=result;
  }


var cont = 0;

function arquivar(){
  

  
  var data = new Date();
    
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    

  
  if(cont==0){
    
    document.getElementById('divh').innerHTML +=
'  <h3 id="hc"><center>Historico dos Cálculos</center></h3> '

    }
   
  cont=2
 document.getElementById('div4').innerHTML += 
'<h1 class="h1">' +num11+ ' ' +sinal+ ' ' +num22+ ' = ' +result +'____'+          hora+'h '+minuto+'m '+segundo+'s'+ '</h1>';
 
  
}

function LimparH(){
 document.getElementById('divh').innerHTML ="";
 document.getElementById('div4').innerHTML = "";
 cont=0;

}


