// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Simple alert for Apply button
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function(e){
        e.preventDefault();
        alert("Admission form will open soon for Rehman Groups of Colleges!");
    });
});

// Change header color on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#001f3f";
    } else {
        header.style.background = "#003366";
    }
});