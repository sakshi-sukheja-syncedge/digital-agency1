fetch("navbar.html")
.then(response => response.text())
.then(data => {

    document.getElementById("navbar").innerHTML = data;

    // Current page
    const currentPage = window.location.pathname.split("/").pop();

    // Sab nav links
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {

        const linkPage = link.getAttribute("href");

        if(linkPage === currentPage){

            link.classList.add("active");

        }

    });

});