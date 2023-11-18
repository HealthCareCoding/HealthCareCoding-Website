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

window.onscroll = function() {
  const button = document.getElementById('scrollToTopButton');
  var footer = document.getElementById('footer');
  var footerRect = footer.getBoundingClientRect();

  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    if (window.innerHeight - footerRect.top > 0) {
        button.classList.remove('visible'); // hide the button when the footer is in the viewport
    } else {
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.classList.add('visible');
    }
  } else {
    button.classList.remove('visible');
  }
};

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'}); // For modern browsers
}
