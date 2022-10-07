var status_first_element = 0;
var status_second_element = 0;

function change_first_element(){
    if(status_first_element==0){
        document.getElementById("first_element").style.backgroundColor = "rgb(134, 196, 255)";
        document.getElementById("first_element").style.color = "Black";
        status_first_element=1;}
    else{
        document.getElementById("first_element").style.backgroundColor = "rgb(255, 166, 134)";
        document.getElementById("first_element").style.color = "#516364";
        status_first_element=0;}
    }
function change_second_element(){
    if(status_second_element==0){
        document.querySelector(".second_element").style.backgroundColor = "rgb(255, 251, 134)";
        document.querySelector(".second_element").style.color = "Black";
        status_second_element=1;}
    else{
        document.querySelector(".second_element").style.backgroundColor = "#b7ffc3";
        document.querySelector(".second_element").style.color = "#788788";
        status_second_element=0;}
    }

var buttons = document.querySelectorAll(".button");
var photos = document.getElementById("photos");
var step = 50;
buttons[0].onclick=function(){
    var img = document.createElement("img");
    img.className = "image";
    img.id="img1";
    img.src = "IMG_20210618_191751.jpg";
    photos.appendChild(img);
}
buttons[1].onclick=function(){
    document.querySelectorAll(".image").forEach(element => {
        element.style.width = element.offsetWidth + step + "px";
    });
}
buttons[2].onclick=function(){
    document.querySelectorAll(".image").forEach(element => {
        element.style.width = element.offsetWidth - step + "px";
    });
}
buttons[3].onclick=function(){
    if(photos.childElementCount>1){
        var img = document.querySelectorAll(".image")[photos.childElementCount-1];
        photos.removeChild(img);}
}