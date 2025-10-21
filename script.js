// Анимация кнопки отправки формы
document.querySelectorAll('button[type="submit"]').forEach(button => {
    button.onmouseenter = e => { button.style.transform = 'scale(1.1)'; };
    button.onmouseleave = e => { button.style.transform = 'scale(1)'; };
});

// Подсказка при вводе имени владельца
document.querySelector('#name').addEventListener('focus', event => {
    event.target.setAttribute('placeholder', 'Например, Иван Иванов');
});

// Автоматически прокручиваем страницу вверх при клике на навигационные ссылки
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(event.target.hash);
        window.scrollTo({
            behavior: 'smooth',
            top: target.offsetTop
        });
    });
});