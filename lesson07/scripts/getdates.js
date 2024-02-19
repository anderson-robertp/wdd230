let year = new Date().getFullYear()
document.querySelector("#year").textContent = year;
let oLastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = oLastModif;