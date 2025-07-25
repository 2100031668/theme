let mode=document.querySelector('#mode');
function toggleMode() {
    if (mode.innerHTML === 'Light Mode') {
        mode.innerHTML = 'Dark Mode';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        mode.innerHTML = 'Light Mode';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}