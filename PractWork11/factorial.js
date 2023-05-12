function factorial(n) {
 let answer = 1;
 if (n == 0 || n == 1) {
 return answer;
 }
 else {
 for(var i = n; i >= 1; i--) {
 answer = answer * i;
 debugger
 console.log("i = ",i);
 }
 console.info(n,"! =", answer)
 return answer;
 }
}
var x = factorial(5); 
alert(x); 
document.write(x);

var a = 1;
var b = 0;
if(b==0)
{
	console.error("Делитель равен 0");
	console.warn("Вывод результата невозможен");
}
else{
	document.write(a / b);
}