window.addEventListener("scroll", function () {

    const progressBar = document.getElementById("progressBar");

    if (!progressBar) return;

    let winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    progressBar.style.width = scrolled + "%";

});


