let token = getCookie("token");
if (!token) {
  let link = location.href.split("/");
  if (link[link.length - 1] !== "index.html") {
    // alert("Please Login First!");
    // location.replace("index.html");
  }
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  const cookieMap = {};
  cookies.forEach((cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    cookieMap[cookieName] = cookieValue;
  });
  const cookieVal = cookieMap[name];
  return cookieVal;
}

const login = () => {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let usernameInvalid = document.querySelector("#usernameInvalid");
  let passwordInvalid = document.querySelector("#passwordInvalid");
  usernameInvalid.innerText = "";
  passwordInvalid.innerText = "";

  fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === 2) usernameInvalid.innerText = data.message;
      if (data.status === 3) passwordInvalid.innerText = data.message;
      if (data.status === 1) {
        setCookie("token", data.token);
        location.replace("view.html");
      }
    });
};


document.addEventListener('DOMContentLoaded', function() {
  const dropbtns = document.querySelectorAll('.dropbtn');
  const dropdownContents = document.querySelectorAll('.dropdown-content');

  dropbtns.forEach(function(dropbtn, index) {
      dropbtn.addEventListener('click', function(event) {
          event.preventDefault();
          dropdownContents[index].classList.toggle('show');
      });
  });

  window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
          dropdownContents.forEach(function(content) {
              if (content.classList.contains('show')) {
                  content.classList.remove('show');
              }
          });
      }
  });
});
