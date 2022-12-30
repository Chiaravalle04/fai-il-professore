// input

const vote = parseInt(prompt("Scrivi il voto dell'alunno. (0 - 30)"));

console.log('Voto:', vote);

// convertiamo il voto numerico in giudizio

// if (vote < 18) {

//     console.log('Giudizio: Insufficente');

// } else if (vote === 18 || vote < 21) {

//     console.log('Giudizio: Sufficiente');

// } else if (vote === 21 || vote < 24) {

//     console.log('Giudizio: Buono');

// } else if (vote === 24 || vote < 27) {

//     console.log('Giudizio: Distinto');

// } else if (vote === 27 || vote < 30) {

//     console.log('Giudizio: Ottimo');

// } else if (vote === 30) {

//     console.log('Giudizio: Eccellente');

// }

switch (true) {

    case vote < 18:
        console.log('Giudizio: Insufficente');
    break; 

    case vote < 21:
        console.log('Giudizio: Sufficiente');
    break;

    case vote < 24:
        console.log('Giudizio: Buono');
    break;

    case vote < 27:
        console.log('Giudizio: Distinto');
    break;

    case vote < 30:
        console.log('Giudizio: Ottimo');
    break;

    case vote == 30:
        console.log('Giudizio: Eccellente');
    break;

    default:
        console.log('Valore non valido!');
}
