// JavaScript Arrays øvelser (1-6)
//
// I det følgende finder du 6 øvelser.
// De handler om Arrays og metoder til at arbejde med dem.
//
// HTML dokumentet og CSS dokumentet er lavet, så du skal kun arbejde i denne fil.
//
// Løsningsforslag til hver af øvelserne findes i sidste del af filen her.
// Brug løsningsforslagene til at guide dig på vej, hvis du er kørt fast.
// Du kan også kopiere dem og så forsøge at rette lidt i dem, for at se hvad der sker.
//
// Når du har løst en opgave, så udkommentér den og gå videre til den næste.
//
// NB: Husk at have inspektoren åben i din browser og åben konsollen (brug [ESC] til at åbne/lukke konsollen).

//
/* Øvelse 1: Deklarer et array */
// Deklarer et array med navnet dyr.
// Giv derefter arrayet værdierne: "hund", "kat", "fugl", "mus".
// Udskriv arrayet i konsollen.

//
/* Øvelse 2: Deklarer et array */
// Deklarer et array med navnet farver og tildel det værdierne: "rød", "grøn", "blå", "gul".
// Udskriv arrayet i konsollen.
// Udskriv det første element i arrayet i konsollen.
// Udskriv det sidste element i arrayet i konsollen.

//
/* Øvelse 3: Tilføj et element til et array med push() */
// lav et array med navnet dyr og værdierne: "hund", "kat", "fugl", "mus".
// Udskriv arrayet i konsollen.
// Tilføj et element "kanin" til arrayet med push().
// Udskriv arrayet i konsollen.
// Udskriv det sidste element i arrayet i konsollen.
//

//
/* Øvelse 4: udskriv array med join() */
// lav et array med navnet farver og værdierne: "rød", "grøn", "blå".
// Udskriv arrayet i konsollen.
// Tilføj et element "lilla" til arrayet med push().
// Udskriv arrayet i konsollen.
// Brug join() til at udskrive et nyt array ved navn kommaSepareret med komma som separator.
// Udskriv arrayet i konsollen.
// Brug join() til at udskrive et nyt array ved navn plusSepareret med + som separator.
// Udskriv arrayet i konsollen.
//

//
/* Øvelse 5: udskriv array med innerHtml */
// lav et array med navnet frugter og værdierne: "æble", "banan", "kiwi".
// Udskriv arrayet i konsollen.
// udskriv arrayet i HTML dokumentet i et element med id="output"
// (elementet er allerede lavet i HTML dokumentet).
// der skal være en tekst "frugter: " og derefter værdierne  separeret af komma.
//

//
/* Øvelse 6: udskriv array  som en liste med forEach() */
// lav et array med navnet biler og værdierne: "BMW", "Audi", "Mercedes".
// Udskriv arrayet i konsollen.
// udskriv arrayet i HTML dokumentet i elementet med id="mineBiler"
// elementet er allererede i html dokumentet.
// Elementerne skal udskrives som listepunkter <li>
//

/* ****************************************************************************************** */
/* Løsningsforslag */
/* ****************************************************************************************** */
//
// Løsning til Øvelse 1: Deklarer et array */
// let dyr;
// dyr = ["hund", "kat", "fugl", "mus"];
// console.log(dyr);

//
// Løsning til "Øvelse 2:
// let farver = ["rød", "grøn", "blå", "gul"];
// console.log(farver);
// console.log(farver[0]);
// console.log(farver[farver.length - 1]);
//

//
// Løsning til Øvelse 3:
// let dyr = ["hund", "kat", "fugl", "mus"];
// console.log(dyr);
// dyr.push("kanin");
// console.log(dyr);
// console.log(dyr[dyr.length - 1]);
// console.log(dyr[4]);
//

//
// Løsning til Øvelse 4:
// let farver = ["rød", "grøn", "blå"];
// farver.push("lilla");
// console.log(farver);
// let kommaSepareret = farver.join(", ");
// console.log(kommaSepareret);
// let plusSepareret = farver.join(" + ");
// console.log(plusSepareret);
//

//
// Løsning til Øvelse 5:
// let frugter = ["æble", "banan", "kiwi"];
// console.log(frugter);
// document.getElementById("output").innerHTML = "Frugter: " + frugter.join(", ");
//

//
// Løsning til Øvelse 6:
// let biler = ["BMW", "Audi", "Mercedes"];
// let liste = "";
// biler.forEach(function (element) {
//   liste += "<li>" + element + "</li>";
// });
// document.querySelector("#mineBiler").innerHTML = liste;
//
