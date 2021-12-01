var valuesInput = {"0": "_", "1": "_", "2": "_", "3": "_", "4": "_", "5": "_", "6": ["_"], "7": "_", "8": "_"};

var mit = document.getElementById("mit");
mit.onclick = fullCheck;
var reset = document.getElementById("reset");
reset.onclick = fullReset;
var last = document.getElementsByName("last")[0];
var first = document.getElementsByName("first")[0];
var ft = document.getElementById("ft");
var inch = document.getElementById("inch");
var phone = document.getElementById("phone");
var mail = document.getElementsByName("mail")[0];
var tos = document.getElementById("tos");
var captcha = document.getElementById("captcha");
var spans = document.getElementsByClassName("faux");
var errorMessage = document.getElementById("errorMessage");

var errorText = "Some required fields are missing";

/*------------------------------------------------------------------------------------*/
resets = document.getElementsByClassName("smallReset");
resets[0].onclick = function() {
	titles = document.getElementsByName("title");
	for (var i = 0; i < titles.length; i++) {
		titles[i].checked = false;
	}
}
resets[1].onclick = function() {
	titles = document.getElementsByName("services");
	for (var i = 0; i < titles.length; i++) {
		titles[i].checked = false;
	}
}
resets[2].onclick = function() {
	titles = document.getElementsByName("budget");
	for (var i = 0; i < titles.length; i++) {
		titles[i].checked = false;
	}
}
/*------------------------------------------------------------------------------------*/
function fullReset() {
	last.value = "";
	first.value = "";
	titles = document.getElementsByName("title");
	for (var i = 0; i < titles.length; i++) {
		titles[i].checked = false;
	}
	ft.value = "";
	inch.value = "";
	phone.value = "";
	titles = document.getElementsByName("address");
	for (var i = 0; i < titles.length; i++) {
		titles[i].value = "";
	}
	titles = document.getElementsByName("services");
	for (var i = 0; i < titles.length; i++) {
		titles[i].checked = false;
	}
	titles = document.getElementsByName("budget");
	for (var i = 0; i < titles.length; i++) {
		titles[i].checked = false;
	}
	mail.value = "";
	tos.checked = false;
	captcha.value = "";
}
/*------------------------------------------------------------------------------------*/
function lastExist() {
	if(last.value == null || last.value == "") {
		spans[0].style.display = "inline";
		errorText = "Some required fields are missing";
		return false;
	} else {
		spans[0].style.display = "none";
	}
	valuesInput["0"] = last.value;
	return true;	
}

function firstExist() {
	if(first.value == null || first.value == "") {
		spans[1].style.display = "inline";
		errorText = "Some required fields are missing";
		return false;
	} else {
		spans[1].style.display = "none";
	}
	valuesInput["1"] = first.value;
	return true;	
}

function titleExist() {
	title = "";
	titles = document.getElementsByName("title");
	for (var i = 0; i < titles.length; i++) {
		if (titles[i].checked) {
			title = titles[i].value;
			break;
		}
	}
	if(title == null || title == "") {
		spans[2].style.display = "inline";
		errorText = "Some required fields are missing";
		return false;
	} else {
		spans[2].style.display = "none";
	}
	valuesInput["2"] = title;
	return true;	
}

function heightExist() {
	if(ft.value == null || ft.value == "") {
		ft.value = "_";
	}
	if(inch.value == null || inch.value == "") {
		inch.value = "_";
	}
	valuesInput["3"] = ft.value+"'"+inch.value+"\"";
	return true;	
}

function phoneExist() {
	if (phone.value == null || phone.value == "") {
		valuesInput["4"] = "(___) ___-____";
		return true;	
	}
	if (phone.value.length < 10) {
		errorText = "Phone number incomplete";
		return false;	
	}
	valuesInput["4"] = "("+phone.value.substring(0, 3)+") "+phone.value.substring(3, 6)+"-"+phone.value.substring(6, 10);
	return true;	
}

function addressExist() {
	address = "";
	addresses = document.getElementsByName("address");
	for (var i = 0; i < addresses.length; i++) {
		if(addresses[i].value == null || addresses[i].value == "") {
			spans[3].style.display = "inline";
			errorText = "Some required fields are missing";
			return false;
		} else {
			spans[3].style.display = "none";
			address += addresses[i].value;
			if (i < addresses.length-1) {
				address += ", ";
			}
		}
	}
	valuesInput["5"] = address;
	return true;	
}

function serviceExist() {
	totalServ = []
	services = document.getElementsByName("services");
	for (var i = 0; i < services.length; i++) {
		if (services[i].checked) {
			totalServ.push(services[i].value);
		}
	}
	if (totalServ.length == 0) {
		totalServ.push("_");
	}
	valuesInput["6"] = totalServ;
	return true;	
}

function budgetExist() {
	budget = "_";
	budgets = document.getElementsByName("budget");
	for (var i = 0; i < budgets.length; i++) {
		if (budgets[i].checked) {
			budget = budgets[i].value;
			break;
		}
	}
	valuesInput["7"] = budget;
	return true;	
}

function validEmail(){
	if(mail.value == null || mail.value == ""){
		spans[4].style.display = "inline";
		errorText = "Some required fields are missing";
		return false;
	}
	
	var output = false;
	var atCount = 0;
	var dotExist = false;
	for(var count = 0; count < mail.value.length; count++) { 
		if(mail.value.charAt(count) == '@' && count != 0 && count < mail.value.length - 1 ) {
			output = true;
			atCount = count;
			break;
		} else {
			output = false;
			errorText = "Email format is not valid";
		}
	}
	for(atCount; atCount < mail.value.length; atCount++){
		if(mail.value.charAt(atCount) == '.' && atCount < mail.value.length - 1 ){
			dotExist = true;
			break;
		}else{
			dotExist = false;
			errorText = "Email format is not valid";
		}

	}

	if(output && dotExist){
		valuesInput["8"] = mail.value;
		return true;
	} else{
		spans[4].style.display = "inline";
		return false;
	}
}

function tosExist() {
	if(!tos.checked) {
		spans[5].style.display = "inline";
		errorText = "Some required fields are missing";
		return false;
	} else {
		spans[5].style.display = "none";
	}
	return true;	
}

function capExist() {
	if(captcha.value == null || captcha.value == "") {
		spans[6].style.display = "inline";
		errorText = "Some required fields are missing";
		return false;
	} else {
		spans[6].style.display = "none";
	}
	if(captcha.value != "phoney Security") {
		spans[6].style.display = "inline";
		errorText = "Incorrect Captcha";
		return false;
	} else {
		spans[6].style.display = "none";
	}
	return true;	
}

function fullCheck(){
	var firstCheck = firstExist();
	var lastCheck = lastExist();
	var titleCheck = titleExist();
	var heightCheck = heightExist();
	var phoneCheck = phoneExist();
	var addressCheck = addressExist();
	var serviceCheck = serviceExist();
	var budgetCheck = budgetExist();
	var mailCheck = validEmail();
	var tosCheck = tosExist();
	var capCheck = capExist();
	if (firstCheck && lastCheck && titleCheck && heightCheck && phoneCheck && addressCheck && serviceCheck && budgetCheck && mailCheck && tosCheck && capCheck){
		errorMessage.style.display = "none";
		updateResults();
	} else {
		errorMessage.innerHTML = errorText;
		errorMessage.style.display = "inline";
	}
}

function updateResults() {
	main = document.getElementById("main");
	main.innerHTML = '<header><div id="title">Results verification page Adam Belaid</div><div id="instru">Thank you for completing the survey!</div><div id="thank">Here are your answers:</div></header><table><tr><td class="left"><p class="prompt">Last name: </p></td><td class="right"><p class="result"></p></td></tr><tr><td class="left"><p class="prompt">First name: </p></td><td class="right"><p class="result"></p></td></tr><tr><td class="left"><p class="prompt">Prefered title: </p></td><td class="right"><p class="result"></p></td></tr><tr><td class="left"><p class="prompt">Height (ft-in):</p></td><td class="right"><p class="result"></p></td></tr><tr><td class="left"><p class="prompt">Phone number:</p></td><td class="right"><p class="result"></p></td></tr><tr><td class="left"><p class="prompt">Address: </p></td><td class="right"><p class="result"></p></td></tr><tr><td colspan="2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.598875481451!2d-122.07411188467258!3d37.399317441444616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7381888274d%3A0xd2f9ee4c96ffe066!2sEaves%20Mountain%20View%20at%20Middlefield!5e0!3m2!1sfr!2sus!4v1638340646869!5m2!1sfr!2sus" style="border:0;" allowfullscreen="" loading="lazy"></iframe></td></tr><tr><td class="left"><p class="prompt">Services you require:</p></td><td class="right"><p class="result"></p></td></tr><tr><td class="left"><p class="prompt">Budget for services:</p></td><td class="right"><p class="result"></p></td></tr><tr><td class="left"><p class="prompt">Email address: </p></td class="right"><td><p class="result"></p></td></tr></table>';
	results = document.getElementsByClassName("result");
	for (var i = 0; i < results.length; i++) {
		results[i].innerText = valuesInput[i.toString()];
	}
}








