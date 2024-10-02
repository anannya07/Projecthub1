const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
       container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
       container.classList.remove("sign-up-mode");
});
let eyeicon = document.getElementById("eyeclose");
let password = document.getElementById("password");
eyeicon.onclick = function(){
       if(password.type == "password" ){
              password.type = "text";
              eyeicon.textContent = "visibility"; // Switch to eye-open icon
       }
       else{
              password.type = "password"; 
              eyeicon.textContent = "visibility_off"; // Switch to eye-closed icon
       }
}