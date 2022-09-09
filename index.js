let display = document.getElementById("clock");
const audio =new Audio("alarm.mp3.wav");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime(){
const date = new Date();
const hour = formatTime(date.getHours());
const minutes = formatTime(date.getMinutes());
const seconds = formatTime(date.getSeconds());
display.innerHTML = hour + " : " + minutes + " : " + seconds;
}
function formatTime(time){
    if(time < 10)
    return "0" + time;
     return time;
}
setInterval(updateTime, 1000);

function setAlarmTime(value){
    alarmTime = value;
    
}
function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(function(){
                audio.play();
            }, timeout);
            alert("Alarm Set!")
        }
    }
}

function clearAlarm(){
    audio.pause();

    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert("Alarm cleared!");
    }
}