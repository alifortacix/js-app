const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

setInterval(() => {
    getTimeDifference()
}, 1000)


function getTimeDifference() {
    const currentYear = new Date().getTime();
    const newYear = new Date('1 Jan 2023')
    var timeleft = newYear - currentYear;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    console.log(days, hours, minutes, seconds)

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds
}

