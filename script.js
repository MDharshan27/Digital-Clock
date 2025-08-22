//Find the hour, minute, second and date elements
const hourElement = document.querySelector(".hour");
const minElement = document.querySelector(".minutes");
const secElement = document.querySelector(".sec");
const dateElement = document.querySelector(".date_time p");

//Fix leading zeros
function addZero(num){
    return num < 10 ? "0" + num : num;
}

//Getting the current time
//Make it update every sec
function updateClock(){
    const now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    //Show it in the page
    hourElement.textContent = addZero(hour);
    minElement.textContent = addZero(min);
    secElement.textContent = addZero(sec);

    //Add date

    const weekday = now.toLocaleDateString('en-US', {weekday: 'long'});
    const day = now.getDate();
    const month = now.toLocaleDateString('en-US', { month: 'short'});
    const year = now.getFullYear();

    dateElement.textContent = `${weekday}, ${day} ${month} ${year}`;
}

//Call function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

updateClock();





