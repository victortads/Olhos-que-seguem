const pupil = document.getElementsByClassName('pupil');
const boca = document.getElementsByClassName('boca');
const olhos = document.getElementById('eyes');

document.onmousemove = (event) => {
    const x = event.clientX * 100 / window.innerWidth + '%'
    const y = event.clientY * 100 / window.innerHeight + '%'

    for (let i = 0; i < 2; i++) {
        pupil[i].style.left = x;
        pupil[i].style.top = y;

        pupil[i].style.transform = `translate( -${x}, -${y})`;
    }
}

function randomColor() {
    let x = parseInt(Math.random() * 255);
    let y = parseInt(Math.random() * 255);
    let z = parseInt(Math.random() * 255);
    return `rgba(${x}, ${y}, ${z})`;
}

function addPupilListener() {
    for (let a of pupil) {
        a.addEventListener("click", alterPupilColor);
    }
}

function addBocaListener() {
    for (let a of boca) {
        a.addEventListener("click", alterBoca);
    }
}

function alterBoca(){
    if (document.getElementById('imagem').classList.contains('displayOn')) {
        document.getElementById('imagem').classList.remove('displayOn');
        document.getElementById('imagem').classList.add('displayNone');
        document.getElementById('imagem2').classList.remove('displayNone');
        document.getElementById('imagem2').classList.add('displayOn');
    } else {
        document.getElementById('imagem2').classList.remove('displayOn');
        document.getElementById('imagem2').classList.add('displayNone');
        document.getElementById('imagem').classList.remove('displayNone');
        document.getElementById('imagem').classList.add('displayOn');
    }
}

function alterPupilColor() {
    let color = randomColor();
    for (let i in pupil) {
        pupil[i].style.border = `8px solid ${color}`;
    };
}

addPupilListener();
addBocaListener();