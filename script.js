function refreshResolution(){
  var md = new MobileDetect(window.navigator.userAgent);
  if (md.mobile() || md.tablet() || (window.innerWidth < 700)) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  refreshResolution();
}); 

window.addEventListener('resize', () => {
  refreshResolution();
}); 