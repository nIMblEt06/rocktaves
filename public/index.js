const loader = document.getElementById("loader")
window.addEventListener("load", function () {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
})