const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.ckassList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());