const shareBtn = document.getElementById("share-icon");
const activeFooter = document.getElementById("active-footer");
const footer = document.getElementById("footer");

shareBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    footer.classList.toggle("hidden");
    activeFooter.classList.toggle("hidden");
});

