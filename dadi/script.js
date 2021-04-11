var numeroUtente = parseInt (prompt("Inserisci un numero da 1 a 6"))
console.log(numeroUtente);

var numeroComputer = Math.round(Math.random()*5+1); 
console.log(numeroComputer)

if(Number.isNaN (numeroUtente)){
    alert("Inserire cifre numeriche")
    document.getElementById("numero-utente").innerHTML = "Partita Nulla" 

    document.getElementById("numero-computer").innerHTML = "Partita Nulla"
}

if(numeroUtente > 6){
    alert(" E' necessario scrivere un numero da 1 a 6")
}

if(numeroUtente < 1){
    alert(" E' necessario scrivere un numero da 1 a 6")
}

if(numeroUtente > numeroComputer){
    console.log ("Giocatore umano vince")
    document.getElementById("messaggio").innerHTML = "Giocatore umano vince"

    document.getElementById("numero-utente").innerHTML = "Numero Utente = " + 
    ('<em>' + numeroUtente + '</em>')

    document.getElementById("numero-computer").innerHTML = "Numero Computer = " + 
    ('<em>' + numeroComputer + '</em>')
}

else if (numeroComputer > numeroUtente){
    console.log ("Intelligenza artificiale conquista il mondo")
    document.getElementById("messaggio").innerHTML = "Intelligenza artificiale conquista il mondo"

    document.getElementById("numero-utente").innerHTML = "Numero Utente = " + 
    ('<em>' + numeroUtente + '</em>')

    document.getElementById("numero-computer").innerHTML = "Numero Computer = " + 
    ('<em>' + numeroComputer + '</em>')
}

else if(numeroUtente = numeroComputer){
    console.log ("Risultato Pari")
    document.getElementById("messaggio").innerHTML = "Risultato Pari"
}

else{
    console.log ("Partita Nulla")
    document.getElementById("messaggio").innerHTML = "Partita Nulla"
}


