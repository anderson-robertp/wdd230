const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pw2.addEventListener("focusout", checkSame);

function checkSame() {
	if (pw1.value !== pw2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		pw2.style.backgroundColor = "#fff0f3";
		pw2.value = "";
		pw2.focus();
	} else {
		message.style.display = "none";
		pw2.style.backgroundColor = "#fff";
		pw2.style.color = "#000";
	}
}

const value = document.getElementById("rangevalue");
console.log(value.textContent)
const input = document.getElementById("r");
console.log(input.value)

input.addEventListener("input", function(){
	value.textContent = this.value;
});