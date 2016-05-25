/**
 * Created by dean on 2015/10/12.
 */
var srcs = [];
function addLoadEvent(func){
    var old = window.onload;
    if(typeof old !== 'function'){
        window.onload = func;
    }
    else{
        window.onload = function () {
            old();
            func();
        }
    }
}
function view(src){
    var bigpic = document.getElementById("bigpic");
    var viewPhoto = document.getElementById("view-photo");
    if(src){
        bigpic.style.display = "block";
        viewPhoto.setAttribute("src",src);
    }
}
function start(){
    var thumb = document.getElementById("thumb");
    var imgs = thumb.getElementsByTagName("img");
    for(var i = 0;i < imgs.length; ++i){
        srcs.push(imgs[i].getAttribute("src"));
        console.log(i + imgs[i].getAttribute("src"));
        (function (i) {
            imgs[i].addEventListener("click", function () {
                view(imgs[i].getAttribute("src"))
            });
        })(i);

    }
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    left.addEventListener("click", function () {
       change("left");
    });
    right.addEventListener("click", function () {
        change("right");
    });
}
function close(){
    var bigpic = document.getElementById("bigpic");
    var close = document.getElementById("close");
    close.addEventListener("click", function () {
        bigpic.style.display = "none";
    });
}
function change(type){
    var photo = document.getElementById("view-photo");
    var src = photo.getAttribute("src");
    var index = srcs.indexOf(src);
    var nextarc = (type ==="left" ? (index - 1 + srcs.length)%srcs.length:(index + 1)%srcs.length);
    photo.setAttribute('src',srcs[nextarc]);
}
addLoadEvent(start);
addLoadEvent(close);

