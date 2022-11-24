const boxes = document.querySelectorAll('.box');
const heading = document.querySelector('.heading span');
const btn = document.querySelector('.btn');

const colors = ["#EFD81D", "#61DBFB", "#41B883", "#b52e31", "#43853D", "#cf6489", "#e04e39"];
const techs = ["JS", "React", "Vue", "Angular", "Node", "Sass", "Ember"];
let current = 1;

const textStyle = () => {
    heading.style.color = colors[current-1];
    heading.textContent = techs[current-1];
    btn.style.backgroundColor = colors[current-1];
    btn.firstElementChild.textContent = techs[current-1];
}

let interval = setInterval(() => {
    boxes.forEach((box) => {
        if(current > boxes.length) current = 1;

        if(box.classList[1].split("-")[1] * 1 === current){
            box.classList.add('active');
        } else{
            box.classList.remove('active');
        }
        
    })
    textStyle();
    current++;
}, 5000)

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((cube) => {
            cube.classList.remove("active");
        })

        current = box.classList[1].split("-")[1] * 1;
        box.classList.add('active');
        textStyle();
        clearInterval(interval);
    })
})