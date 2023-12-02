$(document),ready(function() {
    $('.openmodal').click(function(events) {
        
    }
}

function openmodal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal").style.top = "0px";
}
function closemodal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal").style.top = "-1000px";
}
function xclosemodal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal").style.top = "-1000px";
}
function clickmodal() {
    document.getElementById("modal").style.display = "none";
}