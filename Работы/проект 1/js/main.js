var btn = document.querySelector('#btn');
var search = document.querySelector('#search')
btn.addEventListener('click', () => {
    if(search.classList.contains('search')) {
        search.classList.remove('search');
    } 
    else {
        search.classList.add('search');
    }
})