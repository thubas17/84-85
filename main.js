canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

imagens = ["mars.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631200503680E0C_DXXX.jpg", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg"];

randomNumber = Math.floor(Math.random()*6);
backgroundImage = imagens[randomNumber];
roverImage = "rover.png";
roverX = 10;//coordenadas
roverY = 10;


//essa funcao carrega as imagens de fundo e a do rover, está sendo chamada pelo evento onload, portanto será executada assim que a página for carregada

function add() {
	
	background = new Image(); //definindo uma variável com uma nova imagem
	background.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	background.src = backgroundImage;   // carregar a imagem

	rover = new Image(); //definindo uma variável com uma nova imagem
	rover.onload = uploadrover; // ajustando uma função, ao carregar essa variável
	rover.src = roverImage;   // carregar a imagem
}

function uploadBackground() {
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown); // window significa tela inteira

function myKeyDown(e)
{
	var keyPressed = e.keyCode;// e,keyCode obterá o valor da tecla pressionada
	console.log(keyPressed);
	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
}
function up()
{
if(roverY >=0)
{
	roverY = roverY - 10;
	
	console.log("Quando direcional cima for pressionada,  x = " + roverX + " | y = " +roverY);
	
	uploadBackground();
	uploadrover();
}
}
function down()
{
if(roverY <=500)
{
	roverY =roverY+ 10;
	
	console.log("Quando direcional baixo for pressionada,  x = " + roverX + " | y = " +roverY);
	
	uploadBackground();
	uploadrover();
}
}
function left()
{
if(roverX >= 0)
{
	roverX =roverX - 10;
	console.log("Quando direcional esquerda for pressionada,  x = " + roverX + " | y = " +roverY);
	uploadBackground();
	 uploadrover();
}
}
function right()
{
if(roverX <= 700)
{
	roverX =roverX + 10;
	console.log("Quando direcional direita for pressionada,  x = " + roverX + " | y = " +roverY);
	uploadBackground();
	uploadrover();
}
}
