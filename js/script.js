//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero
//e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//Primo Metodo

//Poniamo la condizione di ciclo for
for (var i = 1; i <= 100; i++) {
// Assegnamo la condizione dei multipli di 5 e 3 stampando 'FizzBuzz' come risultato
 if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    // Altrimenti per i multipli di 5 stampiamo 'Buzz'
    } else if (i % 5 == 0) {
    console.log('Buzz');
        // In fine assegnamo la condizione dei multipli di 3 stampando 'Fizz' come risultato
        } else if (i % 3 == 0) {
        console.log('Fizz');
            } else {
            console.log(i);
        }
    }





// //Secondo Metodo
//
// //Poniamo la condizione di ciclo for
// for (var i = 1; i <= 100; i++) {
//   var listaNumeri = document.getElementById('numbers').innerHTML;
//     }  if (i % 3 == 0) {
//         onScreen.innerHTML += '<li>' + 'Fizz' + '</li>';
//             } else if (i % 5 == 0) {
//                 onScreen.innerHTML += '<li>' + 'Buzz' + '</li>';
//                 } else if (i % 3 == 0 && i % 5 == 0) {
//                     onScreen.innerHTML += '<li>' + 'FizzBuzz' + '</li>';
//                 } else {
//                     // onScreen.innerHTML += '<li>' + i + '</li>';
//                 }
//                 // alert(listaNumeri);
