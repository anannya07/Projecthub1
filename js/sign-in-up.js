const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
       container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
       container.classList.remove("sign-up-mode");
});

// Toggle password visibility
const togglePassword = document.querySelector("#togglePassword");
const passwordInput = document.querySelector("#password");

togglePassword.addEventListener("click", () => {
       // Toggle the type attribute between password and text
       const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
       passwordInput.setAttribute("type", type);

       // Toggle the icon between eye and eye-slash
       togglePassword.classList.toggle("fa-eye-slash");
});
