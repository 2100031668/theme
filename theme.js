let mode=document.querySelector('#mode');
function toggleMode() {    
    if (mode.innerHTML === 'Dark') {
        mode.innerHTML = 'Light';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        mode.innerHTML = 'Dark';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}