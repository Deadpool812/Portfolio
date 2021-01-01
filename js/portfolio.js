var nav_list = document.getElementById("nav-list");
var menu = document.getElementById("menu");
var nav_back = document.getElementById("nav");

function togglemenu() {
    if (nav_list.style.visibility === "visible") {
        nav_list.style.visibility = "hidden";
        nav_list.style.opacity = "0";
        nav_back.style.visibility = "hidden";
        nav_back.style.opacity = "0";
        menu.innerHTML = "Menu";
        //menu.style.position = "";
    } else {
        nav_list.style.visibility = "visible";
        nav_list.style.opacity = "1";
        nav_back.style.visibility = "visible";
        nav_back.style.opacity = "1";
        menu.innerHTML = "Close";
        //menu.style.position = "absolute";
    }
}

// Toggle navbar for mobile devices
menu.onclick = togglemenu;

// Collapse navbar once the user selects a option
nav_list.onclick = function() {
    if(nav_list.style.opacity === "1") {
        togglemenu();
    }
}