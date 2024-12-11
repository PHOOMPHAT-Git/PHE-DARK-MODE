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