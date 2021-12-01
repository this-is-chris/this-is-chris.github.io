const calendarContainer = document.querySelector(".container");

const boxCount = 2;

const createCalendar = () => {
    for(let i = 0; i  < boxCount; i++) {
        const box = document.createElement("div");
        const boxText = document.createElement("div");

        box.classList.add("image");
        box.style.gridArea = "text" + (i + 1);
        calendarContainer.appendChild(box);

        boxText.classList.add("text");
        boxText.innerHTML = i + 1;
        box.appendChild(boxText);
        box.id = "t" + (i + 1);
    }
    document.querySelector(".t1").innerHTML = "Text";
}
//document.getElementById("t1").innerHTML = "Text";

/*
window.addEventListener("load", function(){
    document.getElementById("div1").innerHTML = "Text";
})*/
;