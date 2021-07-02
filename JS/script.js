// declaring UI
let day_button = document.querySelectorAll(".button-day");

// declaring event listener
day_button.forEach(element => { element.addEventListener('dblclick', dayDone); });
day_button.forEach(element => { element.addEventListener('click', clearDay); });
document.addEventListener('DOMContentLoaded', reloadDayDone);

// function to change color of the button day done
function dayDone(e) {
    e.target.style.background = '#1aff1a';
    local_storage.saveDaysToLS(e.target.textContent);
}

// function to get days done after reload
function reloadDayDone(e) {
    let days;
    if (localStorage.getItem('days') == null) {
        days = [];
    } else {
        days = JSON.parse(localStorage.getItem('days'));
    }

    for (x in days) {
        for (y in day_button) {
            if (days[x] == day_button[y].textContent) {
                day_button[y].style.background = '#1aff1a';
            }
        }
    }
}

// function to clear the day
function clearDay(e) {
    e.target.style.background = '';
    local_storage.dayUnDone(e.target);
}