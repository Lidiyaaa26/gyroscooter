document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".m-menu");
    const menu = document.querySelector(".menu-item1");
    const menuButton2 = document.querySelector(".c-catalog");
    const menu2 = document.querySelector(".spisok-catalog1");

    function toggleMenu(menu) {
        if (menu.style.display === "none") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    }
    menuButton.addEventListener("click", function() {
        toggleMenu(menu);
    });
    menuButton2.addEventListener("click", function() {
        toggleMenu(menu2);
    });
            menu.style.display = "none"; 
            menu2.style.display = "none"; 

});
