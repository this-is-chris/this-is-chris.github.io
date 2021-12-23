const calendarContainer = document.querySelector(".container");
const audio = document.querySelector("audio");

//const currentDate = new Date();
//const currentDay = currentDate.getDate();
const currentDay = 24;
var sumOfDays = 0;

const openDoorFirst = (day, event) => {
    event.target.style.opacity = "0.66";
    event.target.addEventListener("click", openDoorSecond.bind(null, day), { once: true });
}

const openDoorSecond = (day, event) => {
    if (day <= currentDay) {
        if (day == 18 && currentDay >= 23) {
            event.target.parentNode.style.backgroundImage = `url(./images/tuer-18-23.png)`;
            calendarContainer.style.backgroundImage = `url(./images/calendar-23.png)`;
        /*} else if (day == 18 && currentDay == 22) {
            event.target.parentNode.style.backgroundImage = `url(./images/tuer-18-22.png)`;
            calendarContainer.style.backgroundImage = `url(./images/calendar-22.png)`;*/
        } else {
            event.target.parentNode.style.backgroundImage = `url(./images/tuer-${day}.png)`;
        }
        event.target.addEventListener("click", openDoorThird.bind(null, day), { once: true });
    }
}

const openDoorThird = (day, event) => {
    event.target.style.opacity = "0";
    sumOfDays = sumOfDays + day;
    if (sumOfDays == 300) { // Summe von 1 bis 24
        calendarContainer.style.backgroundImage = `url(./images/calendar-24.png)`;
        document.querySelectorAll(".image").forEach((e) => e.parentNode.removeChild(e));
        audio.play();
    }
}

const createCalendar = () => {
    for(let i = 0; i < 24; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        day = i + 1;

        calendarDoorText.addEventListener("click", openDoorFirst.bind(null, day), { once: true });
    }
}