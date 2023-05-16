let user = new User("admin", "qwerty")
console.log(user.hello());

function User(login, password)
{
	this.login = login;
	this.password = password;
	
	this.hello = function()
	{
		if(login == "admin" & password == "qwerty")
		{
			return `Логин = ${login}, пароль = ${password}`;
		}
		else
			return (`Добро пожаловать ${login}`);
	}
}