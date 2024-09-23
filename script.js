const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const menuItems = document.querySelectorAll(".links a"); // Selecciona todos los enlaces dentro de nav

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

// Agrega un evento de clic a cada elemento del menú
menuItems.forEach(item => {
    item.onclick = () => {
        // Solo cerramos el menú si está abierto
        if (nav.classList.contains('active')) {
            menu.classList.remove('bx-x'); // Remueve la clase 'bx-x' del menú
            nav.classList.remove('active'); // Remueve la clase 'active' de la navegación
        }
    };
});


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.modal-close');
    const images = document.querySelectorAll('.box img');

    // Abre el modal con la imagen clickeada
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
        });
    });

    // Cierra el modal
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Cierra el modal si se hace clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
