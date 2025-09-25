function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



let btn = document.getElementById('dropdown-navbar');
let content = document.querySelector('.dropdown-content');

btn.addEventListener('click', function(){
  if(content.style.display === 'block'){
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});

