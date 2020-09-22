function Transparent1(){
    document.getElementById('transparent1').style.backgroundColor="rgba(51, 51, 51, 0.5)";   
}

function Opaque1(){
    document.getElementById('transparent1').style.backgroundColor="rgba(51, 51, 51, 1)";
}

function Transparent2(){
    document.getElementById('transparent2').style.backgroundColor="rgba(51, 51, 51, 0.5)";   
}

function Opaque2(){
    document.getElementById('transparent2').style.backgroundColor="rgba(51, 51, 51, 1)";
}

function Transparent3(){
    document.getElementById('transparent3').style.backgroundColor="rgba(51, 51, 51, 0.5)";   
}

function Opaque3(){
    document.getElementById('transparent3').style.backgroundColor="rgba(51, 51, 51, 1)";
}

// this function is no longer needed replaced by hover-css
/*
var element = document.getElementById("transparent1");
element.style.opacity = "0.9";
element.style.filter  = 'alpha(opacity=90)';
*/
function Hover(){
    document.getElementsByClassName("zoom").style.transform= "scale(" + 0.85 + ")";
    document.getElementsByClassName("zoom").style.opacity= "0.5";
}

function Over(){
    document.getElementsByClassName("zoom").style.transform = "scale(" + 1 + ")";
    document.getElementsByClassName("zoom").style.opacity = "1";
}
