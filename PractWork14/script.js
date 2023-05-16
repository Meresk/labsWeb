num = prompt("Введите число")
times = prompt("Введите секунды")

function factorial(n)
{		
	let answer = 1;
	
	if (n == 0 || n == 1)
	{
		return answer;
	}
	else
	{
		return n * factorial(n - 1);
	}
}

document.write("Факториал числа равен: ",factorial(num), "<br/>");

function factorialCount(n)
{
	let answer = 1;
	
	if (n == 0 || n == 1)
	{
		return answer;
	}
	else
	{
		for(let i = 1; i <= n; i++)
		{
			answer = answer * i;
		}
		
		return answer;
	}
}

document.write("Факториал числа(цикл со счётчиком) равен: ",factorialCount(num), "<br/>");

function converter(fsec)
{
	let min = Math.round(fsec / 60);
	
	let sec = fsec - (min * 60);
	
	let time = min +":" + (sec < 10 ? "0" : "") +sec;
	
	return time;
}

document.write("Время: " + converter(times) + "<br/>");

function currentDate()
{
	let dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	let date = new Date();
	let year = date.getFullYear()
	let month = date.getMonth();
	let day = date.getDate();
	let dayOfWeekArr = date.getDay();
	let result = day + ":" + (month < 9 ? "0" : "") +(month+1) + ":" + year + " " +dayOfWeek[dayOfWeekArr];
	return result;
}
document.write("Дата: " + currentDate());