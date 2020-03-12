// Variable Declaration
let date = new Date();
let currentDate = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

let daysElapsed = 0;
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let mayanMonth = 0;

// Determine if is a leap year
if(currentYear % 4 == 0) {
    if(currentYear % 100 == 0) {
        if(currentYear % 400 == 0) {
            daysInMonth[1] = 29;
        }
    } else {
        daysInMonth[1] = 29;
    }
}

// Get current days elapsed in the year
for(let i = 0; i < date.getMonth(); i++) {
    daysElapsed += daysInMonth[i];
}

daysElapsed += currentDate;

mayanMonth = Math.floor(daysElapsed/20);

console.log(mayanMonth);