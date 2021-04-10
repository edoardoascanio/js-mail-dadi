var emailUtente = prompt("Scrivi la tua Email");
console.log("Email utente: " + emailUtente);

var emailList = ["ciccio.8@libero.it","antonio.pane@gmail.com","asky_08@hotmail.it"];

var emailValida = [];

for(var i = 0; i < emailList.length; i++){
    var email = emailList[i];
}

if(email === emailUtente){
    emailValida = i
    console.log("Email Valida")
}

else{
    console.log("Email non valida")
}


