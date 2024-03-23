const banner = document.querySelector(".banner")
const button = document.querySelector(".banner_close")
const date = new Date();
const today = date.getDay();
//console.log(`date:${date} today:${today}`)

button.addEventListener("click", function() {
    this.closest(".banner").style.display = "none"
});

if (today == 1 || today == 2 || today == 3) {
    banner.style.display = "flex"
} else {
    banner.style.display = "none"
};
