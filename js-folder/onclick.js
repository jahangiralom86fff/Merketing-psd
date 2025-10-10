//exprence section start Now//
const button = document .getElementById("plus-button");
const item = document .getElementById("link-item");

button .addEventListener('click',()=>{
    const currentDisplay = window .getComputedStyle(item) .display;
    if(currentDisplay === "none"){
        item.style .display = "block";
    }
    else{
        item.style .display = "none";
    }

});

const button1 = document .getElementById("plus-button1");
const item1 = document .getElementById ("link-item1");

button1.addEventListener('click',function(){
    let currentDisplay = window .getComputedStyle(item1) .display;
    if(currentDisplay === "none"){
        item1.style.display = "block";
    }else{
        item1.style.display = "none";
    }

});

const button_two = document .getElementById("plus-button2");
const item2 = document .getElementById("link-item2");

button_two .addEventListener('click',function(){
    const currentDisplay = window.getComputedStyle(item2) .display;
    if(currentDisplay === "none"){
        item2.style.display= "block";
    }else{
        item2 .style .display = "none";
    }
});

const button_three = document.getElementById("plus-button3");
const item3 = document.getElementById("link-item3");

button_three.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(item3).display;

    if (currentDisplay === "none") {
        item3.style.display = "block";
    } else {
        item3.style.display = "none";
    }
});
//Expresnces section js End now //




