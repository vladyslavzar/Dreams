const burger=document.getElementById("burger");
const menu=document.getElementById("menu");
const main=document.getElementById("main");
const header=document.getElementById("header");
const intwork=document.getElementById("intwork");
burger.onclick=function(){
    menu.classList.toggle("_active");
    main.classList.toggle("__active")
}
function animOnScroll(){
    let yOffset = window.scrollY;
    const intoff=offset(intwork).top;
    if (yOffset >= intoff){
        header.classList.add("activeheader");
    }else{
        header.classList.remove("activeheader");
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    console.log(intoff)
}
window.onscroll = function (e) {
    console.log("1"); // Value of scroll Y in px
};
document.body.addEventListener('scroll',()=>{
  console.log(header.offsetTop);
})
