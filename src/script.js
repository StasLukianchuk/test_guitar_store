window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let orderForm = document.getElementById("orderForm");
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");

  let savedName = getCookie("name");
  let savedEmail = getCookie("email");

  if (savedName !== "") {
      nameInput.value = savedName;
  }
  if (savedEmail !== "") {
      emailInput.value = savedEmail;
  }

  orderForm.addEventListener("submit", function(event) {
      document.cookie = "name=" + encodeURIComponent(nameInput.value) + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
      document.cookie = "email=" + encodeURIComponent(emailInput.value) + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
  });
});

function getCookie(name) {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
      }
  }
  return "";
};

const TOKEN = "6392005401:AAFXDztusUKLd1JuqkaNKc1kQDdk5dF7Zrg";
const CHAT_ID ="-4089518539";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let message = `<b>Message from website</b>\n`;
  message += `<b>User name:</b> ${this.name.value}\n`;
  message += `<b>User email:</b> ${this.email.value}\n`;
  message += `<b>User phone:</b> ${this.phone.value}\n`;
  message += `<b>Message:</b> ${this.message.value}\n`;
  message += `<b>Consultation:</b> ${this.consultation.checked}`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  });

  console.log('success')
});
