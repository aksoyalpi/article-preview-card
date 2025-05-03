const shareBtn = document.getElementById("share-icon");
const activeFooter = document.getElementById("active-footer");
const inactiveFooter = document.getElementById("inactive-footer");

shareBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    inactiveFooter.classList.toggle("hidden");
    activeFooter.classList.toggle("hidden");
});

