var $nave;
var nave;
var fram;
$(function(){

    class objectoMove{
        constructor(obj,posX,posY,velocidade){
            this.posX = posX;
            this.posY = posY;
            this.obj = obj;
            this.velocidade = velocidade;
    
            this.posiciona();
        }
        posiciona(){
            this.obj.attr('style',`left:${this.posX}%;top:${this.posY}%`);
        }
        paraDireita(){
            this.posX += this.velocidade;
            this.posiciona();
        }
        paraEsquerda(){
            this.posX -= this.velocidade;
            this.posiciona();
        }
        paraCima(){
            this.posY -= this.velocidade;
            this.posiciona();
        }
        paraBaixo(){
            this.posY += this.velocidade;
            this.posiciona();
        }
        
    }
    class moveNav extends objectoMove{
        dispara(){
            //obter a pos em pixeis
            let topObj =  this.obj.css('top');
            let leftObj = +this.obj.css('left').replace('px','');

            $('body').append(`<div class='tiro' style='left:${leftObj+21}px;top:${topObj}'></div>`);
            $('.tiro').animate({'top':'-110%'},500);
        }
    }
    setInterval(() => {
        controleObj();
    },0.01);
    setInterval(() => {
        criaBola();
    },2200);
    $nave = $('#jogador');
    nave = new moveNav($nave,38,91,2.5);

    $(document).on('keydown keypress',function(){
        moveJog();
    })
    function moveJog(){
            if(event.keyCode == 39){
                nave.paraDireita();
            }
            else if(event.keyCode == 37){
                nave.paraEsquerda();
            }
            else if(event.keyCode == 38){
                nave.paraCima();
            }
            else if(event.keyCode == 40){
                nave.paraBaixo();
            }
            else if(event.keyCode == 32){
                nave.dispara();
            }
    }
    function controleObj(){
        $('.tiro').each(function(ind,elem){
            var top = +elem.style.top.replace('%','');
            $('.bola').each(function(ind2,elem2){
                if(elem.offsetTop == elem2.offsetTop){
                  console.log('colapso top detetado');
                  elem2.remove();
                }
            })
            //elimina os tiros fora da tela
            if(top >= -110 && top < 0){
                elem.remove();
            }

            
        })
        //elimina a bola quando chegar ao chao
        $('.bola').each(function(ind,elem){
            var top = +elem.style.top.replace('%','');
            if(top >=90){
                elem.remove();
            } 
        })
    }
    function criaBola(){
            var leftAleat = Math.floor(Math.random()*100);
            var topAleat = Math.floor(Math.random()*-20);
            $('body').append(`<div class='bola' style='left:${leftAleat}%;top:${topAleat}%;'></div>`);
            $('.bola').animate({'top':'92%'},12000);
    }

})


