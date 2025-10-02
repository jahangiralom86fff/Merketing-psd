
document .addEventListener("mousemove", parallax);
function parallax(e){
    document .querySelectorAll(".shape-parallax").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) /200;
        var y = (e.clientY * moving_value) /200;

        move .style.transform = "translateX("+ x +"px) translateY("+ y +"px)";
    });
}

//scroll up btn start//
const scrollUp = document .getElementById("scrollUp");

window .addEventListener ("scroll", function(){
    if(window.scrollY > 250){
        scrollUp.style .display = "block";
    }else{
        scrollUp.style .display = "none";
    }
});

scrollUp.addEventListener("click", function(){
  window .scrollTo({
    top:0,
    behavior: "smooth"
  });
});

//scroll up btn down End//


//preloder start now//

window.addEventListener('load', () => {
   let preloder = document.querySelector(".preloder");
   if (preloder) {
      setTimeout(() => {
        preloder.style.display = "none";
      }, 100);
   }
});

//preloder start End//



//wow js//
const preducst = document.getElementById("preducst");

preducst.addEventListener("mouseover", () => {
  preducst.style.transform = "translateY(-20px)";
  preducst.style.transition = "all 0.3s ease";
});

preducst.addEventListener("mouseout", () => {
  preducst.style.transform = "translateY(0)";
});




let preducsts = document .getElementById("preducsts");

preducsts.addEventListener("mouseover", () =>{
  preducsts .style .transform = "translateY(-20px)";
  preducsts .style .transition = "all 0.3s ease";

});

preducsts .addEventListener("mouseout", () =>{
  preducsts .style .transform = "translateY(0)";

});



let produts = document .getElementById("produts");

produts.addEventListener("mouseover", () =>{
  produts .style .transform = "translateY(-20px)";
  produts .style .transition = "all 0.3s ease";

});

produts.addEventListener("mouseout", () =>{
    produts .style .transform = "translateY(0)";

});






