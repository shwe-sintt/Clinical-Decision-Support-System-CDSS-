const login = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
  
    if (username === "admin" && password === "password") {
      window.location.href = "homepage.html";
    } else {
      alert("Invalid username or password");
    }
  };
  
  document.querySelector("#confirm").addEventListener("click", login);
  