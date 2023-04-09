const date = new Date();

const monthDays = document.querySelector(".day");

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let currentMonth = date.getMonth();
document.querySelector(".month ul .title").innerHTML = months[currentMonth];

document.querySelector(".month ul .year").innerHTML = date.getFullYear();

let day = "";
function displayMonth () {
    for(let i = 1; i <= lastDay; i++) {
        day += '<li>' + i + '</li>';
        monthDays.innerHTML = day;  
   }
}

displayMonth()

var incrementDays = 1;
function updateMonth() {
    day = "";
    incrementDays++;
    newDay = new Date(date.getFullYear(), date.getMonth() + incrementDays, 0).getDate();
    for(let i = 1; i <= newDay; i++) {
        day += '<li>' + i + '</li>';
        monthDays.innerHTML = day;  
   }
}

var incrementMonth = date.getMonth();
var incrementYear = date.getFullYear();

function nextMonth() {
    incrementMonth++;
    if (incrementMonth > 11) {
        incrementMonth = 0;
        incrementYear++;
    }
    document.querySelector(".month ul .title").innerHTML = months[incrementMonth];
    document.querySelector(".month ul .year").innerHTML = incrementYear;
    updateMonth();
}

function prevMonth() {
    incrementMonth--;
    if (incrementMonth < 0) {
        incrementMonth = 11;
        incrementYear--;
    }
    document.querySelector(".month ul .title").innerHTML = months[incrementMonth];
    document.querySelector(".month ul .year").innerHTML = incrementYear;
    updateMonth();
}

var remainingMonths = 0;
function nextCalendar() {
    var nextMonth = currentMonth + 1;
    remainingMonths = months.length() - nextMonth
    if (remainingMonths == 0) {
        nextMonth = 0;
    }
    document.querySelector(".month ul .title").innerHTML = months[nextMonth];
}

