$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

/*
function auth(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if(email== "admin@gmail.com" && password == "admin123") {
		window.location.assign("homepage.html");
		alert("Login Successfully!");  
	}
	else {
		alert("Invalid Credentials");
		return;
	}
}
*/

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;
	

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return true;
	}

	else if (password.length < 8 || name == "" || password == "" ) {
		document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters"
		return false;
	}
	else {
		window.location.assign("homepage.html");
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters"
		return false;
	}
	else {
		window.location.assign("homepage.html");
		alert("Successfully signed up");
		return true;
	}
}
