/*
Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21


Partiamo analizzando il "problema" che abbiamo davanti.

Come primo step, partiamo facendo apparire sullo schermo un "prompt" in cui chiediamo il nome (in questo caso va bene come identificativo "firstName"), dopodicché andiamo avanti facendo apparire su schermo "secondName" per il cognome.
Infine, chiediamo all'utente quale sia il suo colore preferito ("favouriteColor" può andare più che bene).
Come ultimo step combiniamo i 3 identificativi per ottenere una password a cui aggiungiamo il valore "21" (da capire se definito prima da noi, o assegnare un valore come "currentYear")


1 - recuperare il nome dell'utente
2 - recuperare il cognome dell'utente
3 - recuperare il colore preferito dell'utente
4 - far apparire sulla pagina (o sul computed) la password - formata da i 3 valori combinati + 21 finale.
*/


// Prova da inserire sempre. Serve per capire se abbiamo collegato o meno JavaScript in modo corretto.
console.log('JS OK');

// 1 - recuperare il nome dell'utente
const firstName = prompt("Qual'è il tuo nome?")
console.log(firstName);

// 2 - recuperare il cognome dell'utente
const secondName = prompt("Qual'è il tuo cognome?")
console.log(secondName);

// 3 - recuperare il colore preferito dell'utente
const favouriteColor = prompt("Qual'è il tuo colore preferito?")
console.log(favouriteColor);

// 4 - creare la password perfetta
const perfectPassword = firstName + secondName + favouriteColor + '21'

// 5 - recuperare l'elemento della pagina in cui "stampare" il risultato
const resultElement = document.getElementById('result');

// 6 - stampo il risultato per la "password-insicurissima" sulla pagina
resultElement.innerHTML = `Il risultato per la tua password sicurissimissima è questo: ${perfectPassword}`;
console.log(perfectPassword);