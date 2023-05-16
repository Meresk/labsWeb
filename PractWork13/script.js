let n = 123456;
let count = 0;
let sum = 0;

while (n > 0)
{
	let digit = n % 10; //остаток от деления
	count++;
	sum+=digit;
	n = Math.floor(n / 10); // избавление от найденной цифры
}

document.write("Кол-во цифр в цисле:",count, "<br/>");
document.write("Сумма цифр в числе",sum, "<br/>")

let table = document.createElement("table");

document.body.append(table);

for(let i=1; i <=10; i++)
{
	let tr = document.createElement("tr")
	
	table.appendChild(tr);
	
	for(let j = 1; j <= 10; j++)
	{
		let td = document.createElement("td");
		tr.appendChild(td);
		td.innerText = i * j;
	}
}

let a = 3.2;
let x = 3;

document.write(Math.pow(a, x));