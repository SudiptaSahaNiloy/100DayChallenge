class local_storage {
    // function to save data in local storage
    static saveDaysToLS(day) {
        let days;
        if (localStorage.getItem('days') == null) {
            days = [];
        } else {
            days = JSON.parse(localStorage.getItem('days'));
        }
        days.push(day);
        localStorage.setItem('days', JSON.stringify(days));
    }

    // funtion to remove days done from the local storage
    static dayUnDone(unDoneDay) {
        let days;
        if (localStorage.getItem('days') == null) {
            days = [];
        } else {
            days = JSON.parse(localStorage.getItem('days'));
        }

        // console.log(days[0]);

        days.forEach((day, index) => {
            if (unDoneDay.textContent == day) {
                days.splice(index, 1);
            }
        });

        localStorage.setItem('days', JSON.stringify(days));
    }
}