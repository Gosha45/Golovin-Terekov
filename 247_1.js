//1 
//
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// function func1() {
//     console.log(elem.textContent);
// }




// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('click', func1);
// function func1() {
//     console.log(elem.textContent);
//     elem.textContent = 'Да'
// }


let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
elem3.addEventListener('click', func1);
function func1() {
    console.log(Number(elem1.textContent) + Number(elem2.textContent))
} 