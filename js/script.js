const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

const themeBtn = document.getElementById("theme-toggle");
const themeIcon = themeBtn.querySelector("i");

// استرجاع الوضع المحفوظ
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("fa-moon","fa-sun");
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeIcon.classList.replace("fa-moon","fa-sun");

    }else{

        localStorage.setItem("theme","light");

        themeIcon.classList.replace("fa-sun","fa-moon");

    }

});