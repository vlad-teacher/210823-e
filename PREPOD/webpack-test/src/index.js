// DOM
// const elements = document.getElementsByTagName('li');
// const spisok = document.getElementById('spisok');

// const aliveSpisok = spisok.getElementsByTagName('li');

// const test = document.getElementsByClassName('test'); // [1]
// test2[1].remove();
// const test2 = document.querySelectorAll('.test'); // [1] 



// events

// const consoleWatcher = (event) => {
//     console.log(event.target.value);
// };

// const consoleBLABLA = () => {
//     console.log('BLABLA');
// };

// const input = document.getElementById('inp');

// input.addEventListener('input', () => {});
// input.addEventListener('input', consoleBLABLA);

// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     input.removeEventListener('input', () => {});
// });

// input.addEventListener('change', () => {
//     console.log('IT HAS BEEN CHANGED');
// });

// input.addEventListener('input', () => {
//     console.log('INPUT!!!!');
// });

// input.addEventListener('input', () => { // obj
//     console.log('SECOND INPUT!');
// });

// input.addEventListener('focus', () => {
//     console.log('FOCUS');
// });

// const link = document.getElementById('link');
// const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     console.log('VALIDATION LOGIC!');

//     setTimeout(() => {
//         if (valid) {
//             form.submit();
//         } else {
//             alert('ERROR!');
//         }
       
//     }, 1000);
// });

// link.addEventListener('click', (e) => {
//     e.preventDefault();

//     console.log('LINK CLICKEED!');
// });

// window.addEventListener('spilili', (e) => {
//     e.preventDefault();

//     console.log('CONTEX SHOW');
// })


// const divWatcher =  (e) => {
//     // console.log(e.target);
//     console.log(e.currentTarget)
// };


// const divs = document.getElementsByTagName('div');
// const arrDivs = [...divs];


// arrDivs.forEach((div, index) => {
//     if (index === 1) {
//         div.addEventListener('click', divWatcher, true);
//     } else {
//         div.addEventListener('click', divWatcher, false);
//     }
// })



// const activeAdder = (e) => {
    // e.currentTarget.classList.toggle('active');

    // console.log(e.currentTarget.textContent);
    // e.currentTarget.textContent = 'Clicked';

    // e.currentTarget.innerHTML = Math.round(Math.random() * 2) > 1 ? '<input type="text"/>' : '<li><h2>HI THERE!</h2></li>';

// };

// const spisok = document.getElementById('spisok');

// const lis = [...spisok.children];

// lis.forEach((li) => {
//     li.addEventListener('mouseenter', activeAdder);
// });


const btn = document.getElementById('btn');
const input = document.getElementById('elemText');
const spisok = document.getElementById('spisok');

let counter = 0;

btn.addEventListener('click', () => {

    const li = document.createElement('li');

    li.textContent = input.value;

    spisok.append(li);

    input.value = '';

    input.focus();
    counter++;

    // spisok.parentElement.insertBefore(li, spisok.children[1]);

    // spisok.insertAdjacentElement('afterend', li);

})


