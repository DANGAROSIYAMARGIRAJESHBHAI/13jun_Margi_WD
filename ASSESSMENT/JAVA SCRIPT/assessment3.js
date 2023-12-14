function date() {
    let date = new Date();
    let date1 = date.getDate().toString()
    // condition for day
    let day = date.getDay().toString()
    if (day == 0) {
        (day = 'Sunday')
    } else if (day == 1) {
        (day = 'Monday')
    } else if (day == 2) {
        (day = 'Tuesday')
    } else if (day == 3) {
        (day = 'Wednesday')
    } else if (day == 4) {
        (day = 'Thursday')
    } else if (day == 5) {
        (day = 'Friday')
    } else if (day == 6) {
        (day = 'Saturday')
    } else {
        (day = 'false value')
    }
    // condition for month
    let month = date.getMonth().toString()
    if (month == 0) {
        month = 'January'
    } else if (month == 1) {
        month = 'febuary'
    } else if (month == 2) {
        month = 'March'
    } else if (month == 3) {
        month = 'April'
    } else if (month == 4) {
        month = 'May'
    } else if (month == 5) {
        month = 'June'
    } else if (month == 6) {
        month = 'July'
    } else if (month == 7) {
        month = 'August'
    } else if (month == 8) {
        month = 'September'
    } else if (month == 9) {
        month = 'Octomber'
    } else if (month == 10) {
        month = 'November'
    } else if (month == 11) {
        month = 'December'
    } else {
        month = 'false value'
    }
    console.log(month)

    let year = date.getFullYear().toString()
    let fulldate = day + ',' + '   ' + month + '  ' + date1 + ',' + '   ' + year;
    document.getElementById('date').innerHTML = fulldate;
}

date();

function clock() {
    let date = new Date();
    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let ampm;

    if (hours < 12) {
        ampm = "AM"
    } else {
        ampm = "PM"
    }
    if (hours > 12) {
        hours -= 12;
    }
    let time = hours + ':' + min + ':' + sec + ampm;
    document.getElementById('clock').innerHTML = time;



}
setInterval(clock);
clock();