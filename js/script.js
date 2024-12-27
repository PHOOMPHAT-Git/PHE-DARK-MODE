const targetDate = new Date('December 26, 2024 19:30:00').getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        days + " d " + hours + " h " + minutes + " m " + seconds + " s ";

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "[ Don't know ]";
    }
}, 1000);

function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  video.pause();
  trailer.classList.toggle('active');
}

function changeBg(bg, title) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');
  banner.style.background = `url("../images/movies/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}

window.onload = function() {
  setTimeout(function() {
    var overlay = document.getElementById('overlay');
    overlay.style.opacity = '0';
    setTimeout(function() {
      overlay.style.zIndex = '0';
    }, 1900);
  }, 50);
};

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('mousedown', function(e) {
  if (e.button === 0) {
      e.preventDefault();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
      openCustomNotification();
  }
});

let messageIndex = 0;
let isCooldown = false;

function openCustomNotification() {
  if (isCooldown) return;

  const messages = [
      'ทำไรอ่ะ',
      'อย่าแม้แต่จะคิด',
      'ก็อปโค้ดระวังโดนเล่นนะ',
      'ยังไม่หยุดอีก',
      'จะหยุดยัง',
      'ระวังไว้ให้ดีละกัน',
      'ระบบได้ส่งที่อยู่ของคุณไปยังเจ้าของเว็ปแล้ว'
  ];

  const message = messages[messageIndex];
      
  const notification = document.createElement('div');
  notification.innerText = message;
  notification.style.position = 'fixed';
  notification.style.top = '25px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = '#ff3b00';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.fontSize = '18px';
  notification.style.zIndex = '1000';
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 1s ease';
  document.body.appendChild(notification);

  setTimeout(() => {
      notification.style.opacity = '1';
  }, 10);

  setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
          notification.remove();
      }, 1000);
  }, 2000);

  messageIndex = (messageIndex + 1) % messages.length;

  isCooldown = true;
  setTimeout(() => {
      isCooldown = false;
  }, 3000);
}
