// Created event listener for a click event to run function declared below
document.getElementById("toggle").addEventListener("click", openMenu);

// Function declared
function openMenu() {

    // For each element below create a class of "active"
    document.getElementById("navlist").classList.toggle("active");
    document.getElementById("toggle").classList.toggle("active");
    document.getElementById("items").classList.toggle("active");
    document.getElementById("navItem1").classList.toggle("active");
    document.getElementById("navItem2").classList.toggle("active");
    document.getElementById("navItem3").classList.toggle("active");
}