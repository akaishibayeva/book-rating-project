// Example: Adding interactivity to book elements
document.addEventListener('DOMContentLoaded', () => {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        book.addEventListener('mouseover', () => {
            book.style.transform = 'scale(1.05)';
        });
        book.addEventListener('mouseout', () => {
            book.style.transform = 'scale(1)';
        });
    });
});
