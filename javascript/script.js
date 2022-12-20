document.getElementById("register-form").addEventListener("click",function(){
    document.getElementsByClassName("container")[0].classList.add("active");
});
document.getElementById("login-form").addEventListener("click",function(){
    document.getElementsByClassName("container")[0].classList.remove("active");
});