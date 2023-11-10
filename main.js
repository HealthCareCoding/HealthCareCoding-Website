document.getElementById("navBar").addEventListener("click", function(e) {
    if(e.target.tagName === 'A'){
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
});

function scrollToSection() {
    var section = document.getElementById("target-section");
    section.scrollIntoView({behavior: "smooth"});
}
