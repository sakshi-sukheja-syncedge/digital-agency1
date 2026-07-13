fetch("footer.html")
.then(response => {
    if (!response.ok) {
        throw new Error("Footer not found");
    }
    return response.text();
})
.then(data => {
    const footer = document.getElementById("footer");

    if (footer) {
        footer.innerHTML = data;
    }
})
.catch(error => console.error(error));