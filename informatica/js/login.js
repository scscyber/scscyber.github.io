var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin"){
alert ("Efetuado com sucesso !!!");
window.location = "../Controle/site/index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.

alert("Você tem "+attempt+" tentativas...");
// Disabling fields after 3 attempts.
if( attempt == 0){
		alert("ACESSO NEGADO !!!");
		window.location = "../../Projetos/Login/cd404.html"; // Redirecting to other page.
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;

}
}
}