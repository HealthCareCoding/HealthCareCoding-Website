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
