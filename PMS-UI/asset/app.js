let staff = getCookie("staff");
if (!staff) {
  let link = location.href;
  if (!link.includes("index.html")) {
    location.replace("index.html?message=Please login frist!");
  }
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
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
  let confirm = document.querySelector("#confirm");
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let usernameInvalid = document.querySelector("#usernameInvalid");
  let passwordInvalid = document.querySelector("#passwordInvalid");
  let error = document.querySelector("#error");
  usernameInvalid.innerText = "";
  passwordInvalid.innerText = "";
  confirm.value = "Loading";
  confirm.disabled = true;
  fetch("http://localhost:8001/api/medicalStaff/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === 200) {
        setCookie("staff", data.user.staff_id);
        location.replace("./view.html");
      } else {
        confirm.value = "Confirm";
        confirm.disabled = false;
        error.innerText = data.message;
        setTimeout(() => (error.innerText = ""), 2000);
      }
    })
    .catch(() => {
      confirm.value = "Confirm";
      confirm.disabled = false;
      error.innerText = "Invalid username or email!";
      setTimeout(() => (error.innerText = ""), 2000);
    });
};

document.addEventListener("DOMContentLoaded", function () {
  const dropbtns = document.querySelectorAll(".dropbtn");
  const dropdownContents = document.querySelectorAll(".dropdown-content");

  dropbtns.forEach(function (dropbtn, index) {
    dropbtn.addEventListener("click", function (event) {
      event.preventDefault();
      dropdownContents[index].classList.toggle("show");
    });
  });

  window.addEventListener("click", function (event) {
    if (
      !event.target.matches(".dropbtn") &&
      !event.target.closest(".dropdown")
    ) {
      dropdownContents.forEach(function (content) {
        if (content.classList.contains("show")) {
          content.classList.remove("show");
        }
      });
    }
  });
});
