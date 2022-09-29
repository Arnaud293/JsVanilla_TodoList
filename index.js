const input = document.querySelector('input');
const form = document.querySelector('form');
const container = document.querySelector('.container');
let isTrue = false;


form.addEventListener('submit', (e) => {

    e.preventDefault();

    console.log(input.value);
    list.innerHTML += `<li>${input.value}</li>`;
    item.value = null;
})

list.addEventListener('click', (e) => {

    if(isTrue === false){
        e.target.classList.add('checked');
        isTrue = true;

    } else if (isTrue === true){
        e.target.remove();
    }

    
})