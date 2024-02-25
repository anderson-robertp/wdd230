let thisday = new Date();
console.log('today: '+ thisday);

let fourDays = thisday.getTime() - (4*86400000)
console.log('Fourdays: '+ fourDays);

let fourDate = new Date(fourDays);
console.log('New Date:' + fourDate)

localStorage.setItem("dateVisit-ls",fourDate)