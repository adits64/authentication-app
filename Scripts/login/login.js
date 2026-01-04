const email = document.getElementById("email");
const password = document.getElementById("password");
const loginForm= document.getElementById("login-form");

//login form subbmission
loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const eValue = email.value.trim();
    const pValue = password.value.trim();

    //checking existing user
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    //finding user with this email
    const foundUser = users.find(user => user.email === eValue);

    if(!foundUser){
        setError(email,"user does not exists");
        return;
    }
    if(!foundUser.password=== pValue){
        setError.textContent = "Enter correct password";
        return;
    }

    // 
    clearError(email);
    clearError(password);

    localStorage.setItem("loggedUser", JSON.stringify(foundUser) );

    loginForm.reset();
    
    setTimeout(()=>{
        window.location.href = "welcome.html";
    },3000);
     

    
})
const togglePassword = document.getElementById('toggle-password');
 togglePassword.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        togglePassword.classList.add('active');
    } else {
        password.type = "password";
        togglePassword.classList.remove('active');
    }
});

