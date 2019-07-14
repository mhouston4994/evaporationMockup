// Select DOM Items
const menuBtn = $(".menu-btn");
const bootstrapMenuBtn = $(".navbar-toggler");

bootstrapMenuBtn.click(function(){
    menuBtn.toggleClass("close");
});