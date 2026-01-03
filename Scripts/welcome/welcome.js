const userNameSpan = document.getElementById("user-name");


const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

if (!loggedUser) {
 
  window.location.href = "login.html";
} else {
  userNameSpan.textContent = loggedUser.name;
}


const hamBurger = document.getElementById("hamburger");
const option = document.getElementById("menu-options");

hamBurger.addEventListener('click', (e)=>{
  e.stopPropagation();
    
    if (option.style.display === "block") {
        option.style.display = "none" ;
        
    } else {
        option.style.display = "block";
    }


});

document.addEventListener('click', () => {
    option.style.display = 'none';
});
option.addEventListener('click', (e)=>{
    e.stopPropagation();
});

const logOut = document.getElementById('logout-btn');

logOut.addEventListener("click", ()=>{
    localStorage.removeItem('loggedUser');
    setTimeout(()=>{
        window.location.href = "login.html";
    },3000)
});