document.addEventListener("keydown", function(event)
{
	let keyName = event.code;
	switch(keyName)
	{
		case 'ArrowUp':
			console.log("Стрелка вверх");
		break
		
		case 'ArrowDown':
			console.log("Стрелка вниз");
		break
		
		case 'ArrowLeft':
			console.log("Стрелка влево");
		break
		
		case 'ArrowRight':
			console.log("Стрелка вправо");
		break
		
		case 'Enter':
			console.log("энтер");
		break
		
		case 'Escape':
			console.log("эсккейп");
		break
		
		case 'ArrowDown':
			console.log("Стрелка вниз");
		break
		
		case 'AltRight':
		case 'AltLeft':
			console.log("Альт");
		break
		
		case 'ControlLeft':
		case 'ControlRight':
			console.log("контрол");
		break
		
		case 'ShiftLeft':
		case 'ShiftRight':
			console.log("Шифт");
		break
		
		default:
		break
	}
});

var buttons = document.querySelectorAll("button");

function activeButton()
{
	this.classList.add('active');
}

function deAdctiveButton()
{
	this.classList.remove('active');
}

document.addEventListener("keydown", function(event)
{
	switch(event.keyCode)
	{
		case 38:
			document.getElementById("up").classList.add("active");
		break
		
		case 37:
			document.getElementById("left").classList.add("active");
		break
		
		case 40:
			document.getElementById("down").classList.add("active");
		break
		
		case 39:
			document.getElementById("right").classList.add("active");
		break
	}
});

document.addEventListener("keyup", function(event)
{
	switch(event.keyCode)
	{
		case 38:
			document.getElementById("up").classList.remove("active");
		break
		
		case 37:
			document.getElementById("left").classList.remove("active");
		break
		
		case 40:
			document.getElementById("down").classList.remove("active");
		break
		
		case 39:
			document.getElementById("right").classList.remove("active");
		break
	}
});

var canvas = document.getElementById("myCanvas"),
context = canvas.getContext("2d");
var img = new Image();
img.src = "kapibara.jpg";
img.onload = function drawImg()
{
	context.drawImage(img, 185, 185, 150, 150);
}