$(document).ready(function ()
{
	$("#hide").click(function()
	{
		$("p").hide();
	});
	
	$("#hideButton").click(function()
	{
		$(this).hide();
	});
	
	$("#hideButtonFirst").click(function()
	{
		$("#paragraph1").hide();
	});
	
	$("#hideButtonSecond").click(function()
	{
		$("#paragraph2").hide();
	});
	
	$("#hideButtonClassTest").click(function()
	{
		$(".test").hide();
	});
	
	$("#showButton").click(function()
	{
		$("p").show();
	});
	
	$("#showButtonAll").click(function()
	{
		$("*").show();
	});
	
	$("#hideButtonFast").click(function()
	{
		$("#paragraph3").toggle();
	});
	
	$("#hideButtonSlow").click(function()
	{
		$("#paragraph3").toggle(1000);
	});
});