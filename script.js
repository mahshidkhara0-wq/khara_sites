

// ===============================
// CHART BUTTONS
// ===============================

const chartButtons =
    document.querySelectorAll(".chart-tab");


chartButtons.forEach(button => {

    button.addEventListener("click", () => {

        chartButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        document.querySelector(".chart-value").textContent =
            button.textContent;

    });

});



// ===============================
// HEADER ACTIVE LINK
// ===============================

const sections =
    document.querySelectorAll("section");

const links =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


