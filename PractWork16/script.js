let string = "Hello World!";

console.log("Задание 1:");
for(let i = 0; i < string.length; i++)
{
	console.log(string.charAt(i) + " - " + string.charCodeAt(i));
}

console.log("Задание 2:");
let str = prompt("Введите строку");
let userStr = prompt("Введите подстроку");
let startPosition = str.indexOf(userStr);
let count = 0;
while(startPosition !== -1)
{
	count++;
	startPosition = str.indexOf(userStr, startPosition + 1);
}

console.log("Кол-во вхождений:",count);

console.log("Задание 3:");
count = 0;
startPosition = (str.toLowerCase().indexOf(userStr.toLowerCase()));
while(startPosition !== -1)
{
	count++;
	startPosition = (str.toLowerCase()).indexOf(userStr.toLowerCase(), startPosition + 1);
}
console.log("Кол-во вхождений без учёта регистра:",count);

console.log("Задание 4:");
let userNum1 = prompt("Введите первое число");
let userNum2 = prompt("Введите второе число");
let userAction = prompt("Введите математическое выражение");
userNum1 = Number(userNum1);
userNum2 = Number(userNum2);
function calculate(number1, number2, action)
{
	switch(action){
		case "+":
			return (`${number1} ${action} ${number2} = `+ (number1 + number2));
		break
			
		case "-":
			return (`${number1} ${action} ${number2} = `+ (number1 - number2));
		break
		
		case "*":
			return (`${number1} ${action} ${number2} = `+ (number1 * number2));
		break
		
		case "/":
			return (`${number1} ${action} ${number2} = `+ (number1 / number2));
		break
		
		default:
			return `Операции ${action} не существует`;
		break
	}
}
console.log(calculate(userNum1, userNum2, userAction));

