function isMobile() {

  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if (regex.test(navigator.userAgent)) {
    console.log("mobile sad sad")
    return;
  } else {
    console.log("desktop haha")
    return;
  }
}

isMobile();

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let launchDate = new Date();
launchDate = new Date(launchDate.getFullYear() + 0, 5, 2);

const countdownFunc = () => {
  const now = new Date(),
        timeLeft = launchDate - now,
        days = Math.floor(timeLeft / day),
        hours = Math.floor((timeLeft % day) / hour),
        minutes = Math.floor((timeLeft % hour) / minute),
        seconds = Math.floor((timeLeft % minute) / second);

  document.querySelector('.countdown').innerHTML = `
    <span>${days}</span>d
    <span>${hours}</span>h
    <span>${minutes}</span>m
    <span>${seconds}</span>s
  `;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.querySelector('.countdown').innerHTML = 'Launched!';
  }
};

let countdown = setInterval(countdownFunc, second);
