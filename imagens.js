//imagens
let estrada;
let ator;
let carro;
let carro2;
let carro3;

//sons
let somTrilha;
let somColisao;
let somPonto;


function preload()
{
  estrada = loadImage("Images/estrada.png")
  ator = loadImage("Images/ator-1.png")
  carro = loadImage("Images/carro-1.png")
  carro2 = loadImage("Images/carro-2.png")
  carro3 = loadImage("Images/carro-3.png")
  imagemCarros = [carro,carro2,carro3,carro,carro2,carro3]
  
  somTrilha = loadSound("Sons/trilha.mp3")
  somColisao = loadSound("Sons/colidiu.mp3")
  somPonto = loadSound("Sons/pontos.wav")
}