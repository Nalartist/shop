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
