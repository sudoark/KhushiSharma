// project reveal js
function toggleVisibility(show) {
    const div = document.querySelector(".reveal");
    const projectElements = ["p1", "p11", "p2", "p3", "p4"];
    const ind = document.querySelector(".number-indicators-project");
    const hideButton = document.getElementById("hide");
    const showButton = document.getElementById("show");
    const body = document.querySelector(".snap-y");

    div.style.display = show ? "block" : "none";
    body.style.overflow = show ? "hidden" : "scroll";
    projectElements.forEach(project => document.getElementById(project).style.display = show ? "none" : "");
    ind.style.display = show ? "none" : "";
    hideButton.style.display = show ? "" : "none";
    showButton.style.display = show ? "none" : "";

    if (show) {
        Reveal.initialize({
            scrollSnap: 'mandatory'
        });
    }
}
function show() {
    toggleVisibility(true);
}
function hide() {
    toggleVisibility(false);
}

// nav links js
document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".activedivs");
    const navLinks = document.querySelectorAll(".astro-UY3JLCBK nav div a");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active-link"));
                const link = document.querySelector(`.astro-UY3JLCBK nav div a[href="#${entry.target.id}"]`);
                if (link) {
                    link.classList.add("active-link");
                    console.log(`Active Section: ${entry.target.id}`);
                }
            }
        });
    }
    const observer = new IntersectionObserver(handleIntersection, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});

// canvas visibility js
document.addEventListener('DOMContentLoaded', function () {
    var divOne = document.getElementById('divOne');
    var canvas = document.getElementById('canvas3d'); // Changed variable name to 'canvas' for clarity
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                canvas.style.display = "block";
                console.log('Project div is active!');
            } else {
                canvas.style.display = "none";
            }
        });
    });
    observer.observe(divOne);
});

// project indicators hide/unhide
document.addEventListener('DOMContentLoaded', function () {
    var projectDiv = document.getElementById('project');
    var dotIndicatorDiv = document.getElementById('dot-indicator');
    var dotIndicatorProject = document.querySelector('.number-indicators-project');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                dotIndicatorDiv.classList.remove('lg:flex');
                setTimeout(function () {
                    dotIndicatorProject.classList.add('lg:flex');
                }, 100);

                console.log('Project div is active!');
            } else {
                dotIndicatorDiv.classList.add('lg:flex');
                dotIndicatorProject.classList.remove('lg:flex');
            }
        });
    });
    observer.observe(projectDiv);
});


