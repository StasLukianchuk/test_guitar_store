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

document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  localStorage.setItem("name", name);
  localStorage.setItem("phone", phone);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);

  alert("Дякуємо. Наш менеджер скоро з вами зв'яжеться");
});
