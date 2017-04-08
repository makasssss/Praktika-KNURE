var inputs = document.body.getElementsByTagName('input');

inputs[0].addEventListener('blur', function() {
	checkEmail();
});

inputs[1].addEventListener('blur', function() {
	checkPassword();
});

function checkEmail() {
	var validArr = document.querySelectorAll(":valid");
	var invalidArr = document.querySelectorAll(":invalid");
	for(var i=0; i<validArr.length; i++) {
		if(validArr[i].classList.contains('email')) {
			if(document.querySelector('.tick')) {
				return;
			}
			if(document.querySelector('.close')) {
				document.querySelector('.close').remove();
				document.querySelector('.error').remove();
			}
			addTick();
		} 
	}
	for(var j=0; j<invalidArr.length; j++) {
		if(invalidArr[j].classList.contains('email')) {
			if(document.querySelector('.close')) {
				return;
			}
			if(document.querySelector('.tick')) {
				document.body.querySelector('.tick').remove();
			}
			addEmailError();
		}
	}
}

function checkPassword() {
	var validArr = document.querySelectorAll(":valid");
	var invalidArr = document.querySelectorAll(":invalid");
	for(var i=0; i<validArr.length; i++) {
		if(validArr[i].classList.contains('password')) {
			if(document.querySelector('.tick2')) {
				return;
			}
		if(document.querySelector('.error2')) {
			document.body.querySelector('.close2').remove();
				document.body.querySelector('.error2').remove();
		}
		addTick2();
		}
	}
	for(var j=0; j<invalidArr.length; j++) {
		if(invalidArr[j].classList.contains('password')) {
			if(document.querySelector('.error2')) {
				return;
			}
			if(document.querySelector('.tick2')) {
				document.body.querySelector('.tick2').remove();
			}
			addPasswordError();
		}
	}
}

function addTick() {
	var tick = document.createElement('div');
	tick.className = 'tick';
	tick.innerHTML = '<img src="images/tick.png" />';
	document.body.querySelector('form').appendChild(tick);
}

function addEmailError() {
	var close = document.createElement('div');
	close.className = 'close';
	close.innerHTML = '<img src="images/close.png" />';
	document.body.querySelector('form').appendChild(close);
	var error = document.createElement('div');
	error.className = 'error';
	error.innerHTML = 'Invalid Email';
	document.body.querySelector('form').appendChild(error);
}

function addTick2() {
	var tick2 = document.createElement('div');
	tick2.className = 'tick2';
	tick2.innerHTML = '<img src="images/tick.png" />';
	document.body.querySelector('form').appendChild(tick2);
}

function addPasswordError() {
	var close = document.createElement('div');
	close.className = 'close2';
	close.innerHTML = '<img src="images/close.png" />';
	document.body.querySelector('form').appendChild(close);
	var error = document.createElement('div');
	error.className = 'error2';
	error.innerHTML = 'Invalid Password';
	document.body.querySelector('form').appendChild(error);
}