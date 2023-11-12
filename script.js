document.getElementById("navBar").addEventListener("click", function(e) {
    if(e.target.tagName === 'A'){
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
});

function smoothScroll(target) {
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
}

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
