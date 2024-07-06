let hudai;
const width = document.getElementById("width");
const height = document.getElementById("height");
const platfrom = document.getElementById("platfrom");

platfrom.innerHTML = "My navigator is :" + navigator.platform;
width.innerHTML = "My window width is :" + window.innerWidth;
height.innerHTML = "My window height is :" + window.innerHeight;

function openwindow(){
     hudai = window.open("http://google.com",);
}

function closewindow(){
    hudai.close();
}