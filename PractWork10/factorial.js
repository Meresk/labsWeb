/*
Разработчик - Хватов Яков
дата создания функции 11.05.23
*/
function factorial(n) //объявеление функции с принимающим параметром n
{
	let answer = 1;	  // объявеление переменной answer и присваивание ей значени 1
	//let(действует только в отдельном блоке кода в данном случае в функции факториала)
 
	if (n == 0 || n == 1)  // условный оператор, равна ли n нулю или n единице
	{
		return answer; // при верном if возвращает переменную answer
	}
	else // выполняется если n != 0 или n != 1
	{
		for(var i = n; i >= 1; i--) // объявеление цикла с колличеством выполнения n раз
		{
			answer = answer * i; // переменной answer присваивается ее значение умноженное на переменную i
		}
		
	return answer; // возвращает переменную answer
	}
}

var x = factorial(5); // объявеление x хранящий ссылку на функцию факториала с принимающим параметром 5
alert(x); // ввывод x как объявеление
document.write(x); // вывод x в html странице