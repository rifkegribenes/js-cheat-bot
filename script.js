//Sourced from http://blogs.html5andcss3.org/show-and-hide-multiple-div-using-javascript/

var divs = ["screen1", "screen2", "screen3"];
var menuIDs = ["menu-welcome", "menu-about", "menu-lingo"];
var visibleDivID = null;
var visibleMenuID = null;

function menuFunction(divID, menuID) {
    if (visibleDivID !== divID) {
        visibleDivID = divID;
        visibleMenuID = menuID;
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    var divID, div, menuID, menu;

    for (var i = 0; i < divs.length; i++) {
        divID = divs[i];
        menuID = menuIDs[i];
        div = document.getElementById(divID);
        menu = document.getElementById(menuID);

        if (visibleDivID === divID) {
            div.style.display = "block";
            menu.className = "active";
        } else {
            div.style.display = "none";
            menu.className = "unactive";
        }
    }
}