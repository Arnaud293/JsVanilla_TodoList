const input = document.querySelector('input');
const form = document.querySelector('form');
const container = document.querySelector('.container');

const dataStorage = localStorage;



form.addEventListener('submit', (e) => {

    e.preventDefault();

    console.log(input.value);
    list.innerHTML += `<li>${input.value}</li>`;
    window.localStorage.setItem('dataStorage', list.innerHTML)
    item.value = null;
})

list.addEventListener('click', (e) => {

    if(!e.target.classList.contains('checked')){
        e.target.classList.add('checked');

    } else {
        e.target.remove();
    }

    
})