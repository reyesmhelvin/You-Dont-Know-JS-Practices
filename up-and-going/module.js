const User = () => {
	var username, password;

	const doLogIn = (u,p) => {
		username = u;
		password = p;

		if (username === 'reyesmhelvin' && password === 'vhinmhel' ) {
			return 'Successfully Logged In!';
		} else {
			return 'Invalid username or password'
		} 
	}

	var publicAPI = {
		login: doLogIn
	};

	return publicAPI;
}

var newSession = User();
var mor = newSession.login('reyesmhelvin','vhinmhel');

console.log(mor);