const pupil = document.getElementsByClassName('pupil');

document.onmousemove = (event) => {
    const x = event.clientX * 100 / window.innerWidth + '%'
    const y = event.clientY * 100 / window.innerHeight + '%'

    for (let i = 0; i < 2; i++) {
        pupil[i].style.left = x
        pupil[i].style.top = y

        pupil[i].style.transform = `translate( -${x}, -${y})`
    }
}