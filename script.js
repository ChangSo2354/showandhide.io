var passwordInput = document.getElementById("password-input");
var togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click",function(){
    if(passwordInput.type ===  "password"){
        passwordInput.type = "text";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
    else{
        passwordInput.type = "password";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
});
