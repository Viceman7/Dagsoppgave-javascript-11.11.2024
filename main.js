/*
Methods Oppgaver

 

1. Simple text analyzer

Lag en variabel inputText med hvilken som helst tekst

Analyser teksten

Print lengden på inputText
Print antall ord i inputText
Print første og siste bokstav i inputText
sjekk om inputText inneholder order "JavaScript" og print en relevant melding
konverter inputText til uppercase og print
konverter til lowercase og print
fjern alle spaces på inputText så print resultatet
 

2. Array manipulering

Lag en array fruits med 3 frukter av ditt valg.

Legg til en frukt på starten og på slutten av fruits.
Fjern den andre tingen i listen så print den oppdaterte arrayen
Flytt den tingen som ligger sist i arrayen til starten av arrayen så print
*/

//Oppgave 1

const myFruits = "I love apples and Bananas";
console.log(myFruits.length);

let myString = "I love apples and Bananas";
console.log(myString.split(" "));

console.log(myFruits.slice(0, 1));
console.log(myFruits.slice(18));

console.log(myFruits.includes("JavaScript"));

console.log(myFruits.toUpperCase());
console.log(myFruits.toLowerCase());

const whitespaceText = "        I love apples and bananas        ";
console.log(whitespaceText.trim());

//Oppgave 2

const myFruits2 = ["Apples", "Bananas", "Mango"];
console.log(myFruits2);

let fruit = myFruits2.pop();
console.log(myFruits2);
console.log(fruit);

let fruit2 = myFruits2.shift();
console.log(myFruits2);
console.log(fruit2);

myFruits2.push(fruit);
myFruits2.push("Orange");
console.log(myFruits2);

myFruits2.unshift("Melon");
myFruits2.unshift(fruit2);
console.log(myFruits2);

myFruits2.sort();
console.log(myFruits2);

myFruits2.reverse();
console.log(myFruits2);

console.log(myFruits2.join(", "));
