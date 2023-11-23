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

const elements = document.querySelectorAll('#AboutUs, #OurMission, #FAQ, #Sponsors');

function isInView(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return rect.top <= windowHeight && rect.bottom >= 0;
}

function animateElements() {
    elements.forEach(el => {
        if (isInView(el)) {
            el.style.animation = 'flyInHeaders 2s forwards';
        }
    });
}

window.addEventListener('scroll', animateElements);

animateElements();

// Irene Add your JS Here

// Uday Add your JS Here

// Susan Add your JS Here

var textArray = [
  'This is line 1.',
  'This is line 2.',
  'This is line 3.'
];
var lineIndex = 0;
var characterIndex = 0;

function typeCharacter() {
  if (characterIndex < textArray[lineIndex].length) {
    document.getElementById('line' + (lineIndex + 1)).textContent += textArray[lineIndex].charAt(characterIndex);
    characterIndex++;
  } else if (lineIndex < textArray.length - 1) {
    lineIndex++;
    characterIndex = 0;
  } else {
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(typeCharacter, 100);
