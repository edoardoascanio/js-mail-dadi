var emailUtente = prompt("Scrivi la tua Email");
console.log("Email utente: " + emailUtente);

emailList = ["ciccio.8@libero.it","antonio.pane@gmil.com","asky_08@hotmail.it"];

var emailCorretta = ("asky_08@hotmail.it")

if(emailCorretta == emailUtente){
   console.log("Email valida") 
}

else{
    console.log("Email non valida")
}
