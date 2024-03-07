// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// Impostare il numero massimo su cui basare il programma e area di esecuzione su DOM
const maxIterations = 100;
const containerDomElement = document.getElementById('container');

// Avviare la ricerca dei numeri da sostituire
for (let number = 1; number <= maxIterations; number++) {

    const boxDomElement = document.createElement('div');

    let result = number;
    let boxClass = 'box_number';

    if (number % 3 === 0 && number % 5 === 0) {
        result = 'FizzBuzz';
        boxClass = 'box_fizzbuzz';
    } else if (number % 3 === 0) {
        result = 'Fizz';
        boxClass = 'box_fizz';
    } else if (number % 5 === 0) {
        result = 'Buzz';
        boxClass = 'box_buzz';
    }

    boxDomElement.classList.add('box', boxClass);
    boxDomElement.innerHTML = result;
    containerDomElement.append(boxDomElement);
    
}