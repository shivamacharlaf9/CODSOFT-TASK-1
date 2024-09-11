document.addEventListener("DOMContentLoaded", function() {
    // Navbar link active state
    const navLinks = document.querySelectorAll(".nav-links .link a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Scroll to section functionality (for future enhancement)
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetID = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetID);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
