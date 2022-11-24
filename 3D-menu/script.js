const centerItem = document.querySelector(".center-item");
const menu = document.querySelector('.menu');

centerItem.addEventListener('mouseover', () => {
    menu.classList.add('change');
})

centerItem.addEventListener('mouseleave', () => {
    menu.classList.remove('change')
})
