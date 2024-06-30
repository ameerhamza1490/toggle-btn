let btn = document.querySelector("#btn");
let paragraph = document.querySelector("#demo");

btn.addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
})