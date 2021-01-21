// Created Using Easy HTML v1.2.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml


function es (){
  var zebrar = document.querySelectorAll(".zebra tbody tr");

  for(var i=0;i<zebrar.length;i+=2){
    zebrar[i].className = "zebrada";
    }

  }

function add (){
 var x = document.querySelectorAll(".zebra tbody");
  
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;
  
  if((nome != "") && (senha!= "")){

  var confirmar = confirm("Quer guardar os dados na tabela");
  
  if(confirmar == true){
 x[0].innerHTML += '<tr> <th>'+nome+'</th>  <th>'+senha+'</th> </tr>';
  }
  else{
    
    }
    
    }
  
  else{
    
    alert("Alguns dados não foram preenchidos");
    }

}



function salvar(nome,senha){
  
  localStorage.setItem("nome",nome);
  localStorage.setItem("senha",senha);
  
  }