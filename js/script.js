function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "50px"
    document.getElementById("1").style.margin = "0px"
    document.getElementById("2").style.margin = "0px"
    document.getElementById("3").style.margin = "0px"
    document.getElementById("4").style.margin = "0px"
    document.getElementById("1").style.fontSize = "35px";
    document.getElementById("2").style.fontSize = "35px";
    document.getElementById("3").style.fontSize = "35px";
    document.getElementById("4").style.fontSize = "35px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("1").style.margin = "0px 0px -50px -150px";
    document.getElementById("2").style.margin = "0px 0px -50px -150px";
    document.getElementById("3").style.margin = "0px 0px -50px -150px";
    document.getElementById("4").style.margin = "0px 0px -50px -150px";
    document.getElementById("1").style.fontSize = "35px";
    document.getElementById("2").style.fontSize = "35px";
    document.getElementById("3").style.fontSize = "35px";
    document.getElementById("4").style.fontSize = "35px";
}