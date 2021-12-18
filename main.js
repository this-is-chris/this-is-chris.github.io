const calendarContainer = document.querySelector(".container");

const calendarDays = 24;
const currentDate = new Date();
const currentDay = currentDate.getDate();

const openDoorFirst = (day, event) => {
    event.target.style.opacity = "0.66";
    event.target.addEventListener("click", openDoorSecond.bind(null, day));
}

const openDoorSecond = (day, event) => {
    if (day <= currentDay) {
        if (day == 18 && currentDay >= 23) {
            event.target.parentNode.style.backgroundImage = `url(./images/tuer-18-23.png)`;
            calendarContainer.style.backgroundImage = `url(./images/calendar-23.png)`;
        } else if (day == 18 && currentDay == 22) {
            event.target.parentNode.style.backgroundImage = `url(./images/tuer-18-22.png)`;
            calendarContainer.style.backgroundImage = `url(./images/calendar-22.png)`;
        } else {
            event.target.parentNode.style.backgroundImage = `url(./images/tuer-${day}.png)`;
        }
        event.target.addEventListener("click", openDoorThird.bind(null, day));
    }
}

const openDoorThird = (day, event) => {
    event.target.style.opacity = "0";
    if (day == 24) {
        //change background-img to calendar-24.png
    }
}

const createCalendar = () => {
    for(let i = 0; i  < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        day = i + 1;

        calendarDoorText.addEventListener("click", openDoorFirst.bind(null, day));
    }
}