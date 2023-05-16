var divs = document.querySelectorAll(".divElement");

divs.forEach(function(div)
{
	div.addEventListener("mousemove", function(event)
	{
		var x = event.pageX - div.offsetLeft;
		var y = event.pageY - div.offsetTop;
		
		console.log(`Координаты в блоке: ${x}:${y}`);
		document.getElementById("coordinatDiv").innerHTML = "Координаты в блоке: " + x + ":" + y;
	});
});

document.addEventListener("mousemove", function(event)
{
	var x = event.pageX;
	var y = event.pageY;
	
	console.log(`Координаты на странице: ${x}:${y}`);
	document.getElementById("coordinatDivPage").innerHTML = "Координаты на странице: " + x + ":" + y;
});

divs.forEach(function(div)
{
	div.addEventListener("mousedown", function(event)
	{
		if(event.button == 0)
			div.style.backgroundColor = "red";
		
		if(event.button == 2)
			div.style.backgroundColor = "yellow";
	});
});

var image = document.getElementById("kapibara");

document.ondragstart = function()
{
	return false;
}

image.onmousedown = function(event)
{
	image.style.position = "absolute";
	document.body.append(image);
	moveAt(event.pageX, event.pageY);


	function moveAt(pageX, pageY)
	{
		image.style.left = pageX - image.offsetWidth / 2 + "px";
		image.style.top = pageY - image.offsetWidth / 2 + "px";
	}

	function onMouseMove(event)
	{
		moveAt(event.pageX, event.pageY);
	}

	document.addEventListener("mousemove", onMouseMove);

	image.onmouseup = function()
	{
		document.removeEventListener("mousemove", onMouseMove);
		image.onmouseup = null;
	};
} 

function addOnWheel(elem, handler)
{
	elem.addEventListener("wheel", handler);
}

var scale = 1;

addOnWheel(image, function(e)
{
	var delta = e.deltaY || e.detail || e.wheelDelta;
	
	if(delta > 0) scale += 0.05;
	else scale -= 0.05;
	
	image.style.transform = image.style.WebkitTransform = image.style.MsTransform = "scale("+ scale +")";
	
	e.preventDefault();
});