const input = document.querySelector('input');
const form = document.querySelector('form');
const container = document.querySelector('.container');

const dataStorage = localStorage;

const listStorage = () => {
    window.localStorage.toDoList = list.innerHTML;
}

const getList = () => {

    if(window.localStorage.toDoList){
        list.innerHTML = window.localStorage.toDoList;
    }
    else {
        list.innerHTML = `<li>Cliquez sur un to-do pour le valider/supprimer</li>`
    }
    
}

getList();

form.addEventListener('submit', (e) => {

    e.preventDefault();

    list.innerHTML += `<li>${input.value}</li>`;
    item.value = null;
    listStorage();
})

list.addEventListener('click', (e) => {

    if(!e.target.classList.contains('checked')){
        e.target.classList.add('checked');
        listStorage();

    } else {
        e.target.remove();
        listStorage();
    }

    
})