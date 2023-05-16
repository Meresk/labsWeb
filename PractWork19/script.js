$(document).ready(function ()
{
	$("tr:even").css("background-color","#b3b3b3");
	
	$("#greenButton").click(function()
	{
		$("tr:odd").css("background-color","green");
	});
	
	$("tr").click(function()
	{
		if($(this).css("background-color") === "rgb(255, 255, 0)")
		{
			$(this).css("background-color","");
		}
		else
		{
			$(this).css("background-color","yellow");
		}
	});
	
	$("p").css("background-color", "black");
	$("p").css("color","green");
	
	let backgroundColor = "black";
	let fontColor = "green";
	$("p").click(function()
	{
		let transferColor = backgroundColor;
		backgroundColor = fontColor;
		fontColor = transferColor;
		$("p").css("background-color",backgroundColor );
		$("p").css("color",fontColor);
	});
	
	let CurrentFontSize = 16;
	
	$("#fontMinus").click(function()
	{
		CurrentFontSize -= 2;
		$("p").css("fontSize", CurrentFontSize);
	});
	
	$("#fontPlus").click(function()
	{
		CurrentFontSize += 2;
		$("p").css("fontSize", CurrentFontSize);
	});
	
	$("#whiteTheme").click(function()
	{
		$("*").toggleClass("whiteTheme");
	});
	
	$("#blackTheme").click(function()
	{
		$("*").toggleClass("blackTheme");
	});
	
	$("#sepiaTheme").click(function()
	{
		$("*").toggleClass("sepiaTheme");
	});
	
});