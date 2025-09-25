//exprence section start Now//
const button = document .getElementById("plus-button");
const item = document .getElementById("link-item");


button .addEventListener('click',()=>{
    if(item.style .display=== "none"){
        item.style .display = "block";
    }
    else{
        item.style .display = "none";
    }

});

const button1 = document .getElementById("plus-button1");
const item1 = document .getElementById ("link-item1");

button1.addEventListener('click',function(){
    if(item1.style.display==="none"){
        item1.style.display = "block";
    }else{
        item1.style.display = "none";
    }

});

const button_two = document .getElementById("plus-button2");
const item2 = document .getElementById("link-item2");

button_two .addEventListener('click',function(){
    if(item2.style.display==="none"){
        item2.style.display= "block";
    }else{
        item2 .style .display = "none";
    }
});

const button_three = document .getElementById("plus-button3");
const item3 = document .getElementById("link-item3");

button_three .addEventListener('click',function(){
    if(item3.style.display==="none"){
        item3.style.display= "block";
    }else{
        item3 .style .display = "none";
    }
});


//Expresnces section End now //


//shape animation js element start now//
document .addEventListener("mousemove", parallax);
function parallax(e){
    document .querySelectorAll(".shape-parallax").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) /200;
        var y = (e.clientY * moving_value) /200;

        move .style.transform = "translateX("+ x +"px) translateY("+ y +"px)";
    });
}

//shape animation js element End Now//


