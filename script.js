function isMobile() {

  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if (regex.test(navigator.userAgent)) {
    window.location.href = "redirects/mobile.html";
    console.log("mobile sad sad")
    return;
  } else {
    window.location.href = "redirects/desktop.html";
    console.log("desktop haha")
    return;
  }
}

isMobile();
