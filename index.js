function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = 30 * hours + minutes / 2 + seconds / 120;
    const minuteAngle = 6 * minutes + seconds / 10;
    const secondAngle = 6 * seconds;

    document.querySelector('.hour-hand').style.transform = `rotate(${hourAngle}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondAngle}deg)`;
}

setInterval(updateClock, 1000);
