const link = document.querySelectorAll('.fucking__link');
link.forEach(item => {
    item.addEventListener('click', event => {
        window.open(item);
        event.preventDefault();
    });
});