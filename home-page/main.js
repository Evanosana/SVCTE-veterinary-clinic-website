const navButton = document.getElementById('navButton');
const navElement = document.getElementById('navElement');
const content = document.querySelector('.content');

navButton.addEventListener('click', () => {
    navElement.classList.toggle('hidden');
})