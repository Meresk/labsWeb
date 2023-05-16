let numberUser = prompt("Введите число");
let numberUserDelete = prompt("Введите число (удаление из массива)");
Number(numberUser);
var numbers = [];
var numbers1 = [];

for(let i = 0; i < numberUser; i++)
{
	numbers.push(Math.floor(Math.random() * 10));
}

for(let i = 0; i < numbers.length; i++)
{
	if(numbers[i] & 2 !== 0)
	{
		numbers1.push(numbers[i]);
	}
}

console.log(numbers);
console.log(numbers1);

for(let i = 0; i<numbers.length; i++)
{
	numbers1.push(numbers[i]);
}

for(let i = 0; i<numbers1.length; i++)
{
	document.write(numbers1[i], "<br/>");
}

for(let i = 0; i <numberUserDelete; i++)
{
	numbers1.pop();
}

document.write(numbers.join(", "), "<br/>");



numbers.sort();
document.write(numbers.join(", "), "<br/>");

numbers.sort((a, b) => b - a);
document.write(numbers.join(", "));

