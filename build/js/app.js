// Variable Declaration
let date = new Date();
let currentDate = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

let daysElapsed = 0;
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let mayanMonths = ['Pop', 'Wo\'', 'Sip', 'Sotz\'', 'Sek', 'Xul', 'Yaxk\'in', 'Mol', 'Ch\'en', 'Yax', 'Sak\'', 'Keh', 'Mak', 'K\'ank\'in', 'Muwan', 'Pax', 'K\'ayab\'', 'Kumk\'u', 'Unlucky Days'];
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

// Debug Date
// daysElapsed = 26;

mayanMonth = Math.floor(daysElapsed/20);

if(daysElapsed / 20 == Math.floor(daysElapsed/20)) {
    mayanMonth -= 1;
}

switch(mayanMonth) {
    case 0:
        monthIcon.src = 'assets/1_pop.svg';
        monthName.innerHTML = mayanMonths[0];
        break;
    case 1:
        monthIcon.src = 'assets/2_wo.svg';
        monthName.innerHTML = mayanMonths[1];
        break;
    case 2:
        monthIcon.src = 'assets/3_sip.svg';
        monthName.innerHTML = mayanMonths[2];
        break;
    case 3:
        monthIcon.src = 'assets/4_sotz.svg';
        monthName.innerHTML = mayanMonths[3];
        break;
    case 4:
        monthIcon.src = 'assets/5_sek.svg';
        monthName.innerHTML = mayanMonths[4];
        break;
    case 5:
        monthIcon.src = 'assets/6_xul.svg';
        monthName.innerHTML = mayanMonths[5];
        break;
    case 6:
        monthIcon.src = 'assets/7_yaxkin.svg';
        monthName.innerHTML = mayanMonths[6];
        break;
    case 7:
        monthIcon.src = 'assets/8_mol.svg';
        monthName.innerHTML = mayanMonths[7];
        break;
    case 8:
        monthIcon.src = 'assets/9_chen.svg';
        monthName.innerHTML = mayanMonths[8];
        break;
    case 9:
        monthIcon.src = 'assets/10_yax.svg';
        monthName.innerHTML = mayanMonths[9];
        break;
    case 10:
        monthIcon.src = 'assets/11_sak.svg';
        monthName.innerHTML = mayanMonths[10];
        break;
    case 11:
        monthIcon.src = 'assets/12_keh.svg';
        monthName.innerHTML = mayanMonths[11];
        break;
    case 12:
        monthIcon.src = 'assets/13_mak.svg';
        monthName.innerHTML = mayanMonths[12];
        break;
    case 13:
        monthIcon.src = 'assets/14_kankin.svg';
        monthName.innerHTML = mayanMonths[13];
        break;
    case 14:
        monthIcon.src = 'assets/15_muwan.svg';
        monthName.innerHTML = mayanMonths[14];
        break;
    case 15:
        monthIcon.src = 'assets/16_pax.svg';
        monthName.innerHTML = mayanMonths[15];
        break;
    case 16:
        monthIcon.src = 'assets/17_kayab.svg';
        monthName.innerHTML = mayanMonths[16];
        break;
    case 17:
        monthIcon.src = 'assets/18_kumku.svg';
        monthName.innerHTML = mayanMonths[17];
        break;
    default:
        monthIcon.src = '?';
        monthName.innerHTML = mayanMonths[18];
        break;
}
