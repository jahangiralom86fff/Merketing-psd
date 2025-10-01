
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
      }, 2000);
   }
});

//preloder start End//



