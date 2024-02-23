const visitDisp = document.querySelector(".visits");

let countVisit = Number(window.localStorage.getItem("countVisit-ls")) || 0;

if (countVisit !== 0) {
    visitDisp.textContent = countVisit;
} else {
    visitDisp.textContent = 'This your first visit! 😊 Welcome!';
}

countVisit ++;

localStorage.setItem("countVisit-ls",countVisit);