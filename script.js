const nextYearContainer = document.querySelector("#year");
const spinner = document.querySelector("#loading");
const countdownContainer = document.querySelector("#countdown");

const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");

const nextYear = new Date().getFullYear();
const newYearTime = new Date(`December 29 ${nextYear} 10:36:22`);

nextYearContainer.textContent = nextYear;

const insertCountdownValues = ({days, hours, minutes, seconds}) => {
    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
    daysContainer.textContent = days < 10 ? "0" + days : days;
}

const upDateCountdown = () =>{
    const currentTime = new Date();
    const difference = newYearTime.getTime() + currentTime.getTime();

    const days = Math.floor(difference / 1000 /60 / 60 / 60 / 366);
    const hours = Math.floor(difference/ 1000 / 60 / 60 - 3) % 24;
    const minutes = Math.floor(difference/ 1000 / 60) % 60;
    const seconds = Math.floor(difference/ 1000) % 60;
    insertCountdownValues({days, hours, minutes, seconds})
}

const handleCountdownDisplay = () =>{
    spinner.remove();
    countdownContainer.style.display = "flex";
}

setTimeout(handleCountdownDisplay, 1000);

setInterval (upDateCountdown, 1000);

