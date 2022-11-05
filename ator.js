//variáveis do ator
let xAtor = 90;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor()
{
  image(ator,xAtor,yAtor,30,30);  
}

function movimentaAtor()
{
  if(keyIsDown(UP_ARROW))
    {
      yAtor -= 3
    }
  if(keyIsDown(DOWN_ARROW))
    {
      if(podeMovimentar())
      {
      yAtor += 3
      }
    }
}

function podeMovimentar()
{
  return yAtor < 366;
}

function verificarColisao()
{
  for(let i =0; i < imagemCarros.length; i += 1)
  {
colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor, 15)
    if(colisao)
      {
        posInicial();
        somColisao.play();
        if(pontosMaiorZero())
          {
            meusPontos -=1;
          }        
      }    
  }
      
}

function pontosMaiorZero()
{
  return meusPontos > 0;
}


function posInicial()
{
  yAtor = 366;
}

function incluiPontos()
{  
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(meusPontos, width/5,27)
}

function marcaPonto()
{
  if(yAtor < 15)
    {
      meusPontos+=1; 
      somPonto.play();
      posInicial();
    }
}







