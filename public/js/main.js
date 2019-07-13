// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");

// Set Initial State Of Menu
var showMenu = false;
menuBtn.addEventListener("click", toggleMenuAnimation);

function toggleMenuAnimation() {
    if(!showMenu) {
        menuBtn.classList.add("close");
        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        //Set Menu State
        showMenu = false;
    }
}