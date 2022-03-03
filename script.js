let loadtext = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 30);

function blurring(){
   load++;
   if(load > 100){
       return;
   }
   loadtext.innerHTML = `${load}%`;
   loadtext.style.opacity = `${scale(load,0,100,1,0)}`;
   bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

}
function scale (element, inMin, inMax, outMin, outMax) {
    return (element - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}