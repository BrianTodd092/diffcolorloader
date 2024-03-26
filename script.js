var o = new Date();
var g = o.getHours();
if(g >= 7  && g <=17 ){
document.body.style.backgroundColor = "hsla(120,100%,50%,0.1)"; //green background
document.getElementsByClassName('loader')[0].style.visibility ="visible";
}

else {

document.body.style.backgroundColor = "hsla(211,100%,50%,0.1)"; // blue background
document.getElementsByClassName('wrapper')[0].style.visibility ="visible";
}
