

const successMsg = document.getElementById('success-msg');
const registerForm = document.getElementById('register-form');
 
// registration form subbmission
registerForm.addEventListener("submit", function (e){
    e.preventDefault();
    const name = document.getElementById('fullname');
    const email= document.getElementById("email");    
    const password= document.getElementById("password");
    const confirmPwd = document.getElementById("confirm-password");
    const city = document.getElementById('city');

    let valid = true;

    // Name validation

    if (name.value.trim()==="") {
        setError(name, "Name is required!");
        valid = false;
        
    } else {
        clearError(name);   
    }
    //email validation
    if (!email.value.includes('@')) {
         setError(email, "email is not valid");
         valid = false;
    } else {
        clearError(email);
    }
    // confirm password
    if (password.value.length < 6) {
        setError(password, "password must be more than 6 character");
        valid = false;
    } else {
        clearError(password);
    }
    // confirm password validation
    if (confirmPwd.value !== password.value) {
        setError(confirmPwd, "password didnot match");
        valid = false;
    } else {
        clearError(confirmPwd);
    }
     if(!valid) return;
     //checking user and creating array
     const users = JSON.parse(localStorage.getItem("users"))||[];
     const userExist = users.some(user => user.email.trim().toLowerCase() === email.value.trim().toLowerCase());
     if (userExist) {
        setError(email, "user already exist");
        return;
     }

     //save new user
     const newUser = {
        name : name.value.trim(),
        email : email.value.trim(),
        password : password.value.trim(),
        city : city.value.trim()

     };
     users.push(newUser);
     localStorage.setItem("users", JSON.stringify(users));

     successMsg.textContent = "🎉 Account created successfully — redirecting to login...";

     registerForm.reset();
     setTimeout(()=>{
        window.location.href= "Login.html";},3000);
     
     
})
const togglePassword = document.getElementById('toggle-password');
const toggleConfirm = document.getElementById('toggle-confirm');
togglePassword.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        togglePassword.classList.add('active');

    } else {
        password.type = "password";
        togglePassword.classList.remove('active');
    }
});
toggleConfirm.addEventListener('click', function(){
    const confirmPwd = document.getElementById("confirm-password");
    if (confirmPwd.type === 'password') {
        confirmPwd.type = 'text';
        toggleConfirm.classList.add('active');
    } else {
        confirmPwd.type = "password";
        toggleConfirm.classList.remove('active');
    }

})
