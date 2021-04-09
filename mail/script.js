var emailUtente = prompt("Scrivi la tua Email");
console.log("Email utente: " + emailUtente);

var emailList = ["ciccio.8@libero.it","antonio.pane@gmail.com","asky_08@hotmail.it"];

for(var i = 0; i <= emailList.length; i++){
    
    if(emailList == emailUtente){
    console.log("Email valida") 
    }
 
    else{
     console.log("Email non valida")
    }
}

