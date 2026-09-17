// ======================================
// CURRENT YEAR
// ======================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ======================================
// PROJECT FILTER
// ======================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projects =
    document.querySelectorAll(".portfolio-project");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state
        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        projects.forEach(project => {

            const category =
                project.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});