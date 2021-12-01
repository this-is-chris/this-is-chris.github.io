const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (day, event) => {
    event.target.style.opacity = "0.66";
    event.target.addEventListener("click", openDoorSecond.bind(null, day));
}

const openDoorSecond = (day, event) => {
    if (day == 1) {
        event.target.parentNode.style.backgroundImage = `url(./images/tuer-${day}.png)`;
        event.target.addEventListener("click", openDoorThird.bind(null, day));
    }
}
/*
const openDoorThird = (day, event) => {
    if (day == 1) {
        let url = `./tueren/tuer-${day}.html`;
        window.open(url, '_blank').focus();
    }
}
*/
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

        calendarDoorText.addEventListener("click", openDoor.bind(null, day));
    }
}