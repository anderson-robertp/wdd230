
const dateDisp = document.querySelector("#date");

let today = new Date();
console.log('today: '+ today);

let lastVisit = new Date(window.localStorage.getItem("dateVisit-ls")) || 0;
/*let lastVisit = today - (4 * 86400000)*/
console.log('last visit: ' + lastVisit)

let sinceLastVisit = today.getTime() - lastVisit;
console.log('Since last visit: ' + sinceLastVisit)

if (sinceLastVisit  <= 86400000) {
    dateDisp.textContent = 'Back so soon! Awesome!';
} else if(sinceLastVisit > 86400000) {
    numDays = Math.round(sinceLastVisit / 86400000)
    if (numDays > 1) {
        dateDisp.textContent = 'You last visited ' + numDays + ' days ago.'
    } else {
        dateDisp.textContent = 'You last visited 1 day ago.'
    }
} else {
    dateDisp.textContent = 'Welcome! Let us know if you have any questions.';
    /*let fourDays = today - (4*86400000)
    localStorage.setItem("dateVisit-ls",fourDays)*/
}

/*localStorage.setItem("dateVisit-ls",today - (4*86400000));*/
if (sinceLastVisit == 0) {
    localStorage.setItem("dateVisit-ls",today);
}
