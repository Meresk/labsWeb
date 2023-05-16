var now = new Date();
var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
var time = document.getElementById('timer');
setInterval(function()
{
	time = document.getElementById('timer');
	now = new Date();
	formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	time.textContent = formatted;
}, 1000);

var canvas = document.getElementById('myCanvas');

var square = canvas.getContext("2d");

var speed = 5;
var y = 5;

function draw()
{
	square.clearRect(0, 0, 400, 400)
	square.fillRect(180, y, 50, 50);
}

function move()
{
	if(y == 350 || y == 0)
	{
		speed = -speed;
	}
	y+=speed;
}

setInterval(function(){
	draw();
	move();
}, 1);
