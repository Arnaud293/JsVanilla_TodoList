const input = document.querySelector('input');
const form = document.querySelector('form');
const container = document.querySelector('.container');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    console.log(input.value);
    list.innerHTML += `<li>${input.value}</li>`;
    item.value = null;
})

list.addEventListener('click', (e) => {
    console.log(e)
})