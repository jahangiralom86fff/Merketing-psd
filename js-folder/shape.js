document .addEventListener("mousemove", parallax);
function parallax(e){
    document .querySelectorAll(".shape-parallax").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 900;
        var y = (e.clientY * moving_value) / 950;

        move .style.transform = "translateX("+ x +"px) translateY("+ y +"px)";
    });
}