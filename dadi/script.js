var numeroUtente = prompt("Scrivi un numero da 1 a 6")
console.log(numeroUtente);

var numeroComputer = Math.round(Math.random()*6); 
console.log(numeroComputer)

if(Number.isNaN (numeroUtente)){
    alert("Inserire cifre numeriche")
    document.getElementById("numero-utente").innerHTML = "Inserire cifre numeriche" 
}

if(numeroUtente > 6){
    alert(" E' necessario scrivere un numero da 1 a 6")
}

if(numeroUtente > numeroComputer){
    console.log ("Giocatore umano vince")
    document.getElementById("messaggio").innerHTML = "Giocatore umano vince"
}

else{
    console.log ("Intelligenza artificiale conquista il mondo")
    document.getElementById("messaggio").innerHTML = "Intelligenza artificiale conquista il mondo"
}

document.getElementById("numero-utente").innerHTML = "Numero Utente = " + 
 ('<em>' + numeroUtente + '</em>')

 document.getElementById("numero-computer").innerHTML = "Numero Computer = " + 
 ('<em>' + numeroComputer + '</em>')
