// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

function muda(){

  var pais = document.getElementById('pais').value;
  
  if(pais == "Angola"){
    document.getElementById('img').src="angola.png";
    }
  else if(pais=="Brasil"){
    document.getElementById('img').src="brasil.png";
    }
  else if(pais=="Portugal"){
    document.getElementById('img').src="portugal.jpg";
    }
  else if(pais=="Estados Unidos da America"){
    document.getElementById('img').src="usa.png";
    }
  else if(pais ==""){
    alert("Nenhum pais digitado");
    }
   else{
     alert("O pais digitado não existe")
     
     }
}
var at=true;
function p(){
  
  var mar = document.getElementById('mar');
  if(at){
    mar.stop();
    at=false;
    }
  else{
    mar.start();
    at = true;
    }
  }

