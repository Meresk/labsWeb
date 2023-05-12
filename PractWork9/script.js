var a = 10;
var b = 20;
var sum = a + b;
window.alert("Hello world!");
var userName = window.prompt("Введите ваше имя");
var result = confirm("Вывести максимум?");
document.write("Переменная a = ",a, "<br/>");
document.write("Переменная b = ",b, "<br/>");
document.write("Сумма переменных a и b = ",sum, "<br/>");
document.write("Добро пожаловать " + userName + "<br/>");
if(result)
{
	if(b > a)
		document.write("Максимум: ", b)
	else
		document.write("Максимум: ", a)
}
else
{
	if(b > a)
		document.write("Минимум: ", a)
	else
		document.write("Минимум: ",b)
}


