// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

function Somar(){
var num1=0;
  var num2=0;
  num1=document.getElementById('num1').value;
      num1=Number(num1);
   num2=document.getElementById('num2').value;
      num2=Number(num2);
  var resultado= num1 + num2;
  
  document.getElementById('result').innerHTML=num1+" + "+num2+" = "+resultado;
  
}


function Subtrair(){
var num1=0;
  var num2=0;
  num1=document.getElementById('num1').value;
      num1=Number(num1);
   num2=document.getElementById('num2').value;
      num2=Number(num2);
  var resultado= num1 - num2;
  
  document.getElementById('result').innerHTML=num1+" - "+num2+" = "+resultado;
  
}


function Multiplicar(){
var num1=0;
  var num2=0;
  num1=document.getElementById('num1').value;
      num1=Number(num1);
   num2=document.getElementById('num2').value;
      num2=Number(num2);
  var resultado= num1 * num2;
  
  document.getElementById('result').innerHTML=num1+" x "+num2+" = "+resultado;
  
}

function Dividir(){
var num1=0;
  var num2=0;
  num1=document.getElementById('num1').value;
      num1=Number(num1);
   num2=document.getElementById('num2').value;
      num2=Number(num2);
  var resultado= num1 / num2;
  
  document.getElementById('result').innerHTML=num1+" ÷ "+num2+" = "+resultado;
  
}
