let timerID = null;
let timerActif = false;

function stopClock()
{
    if (timerActif) clearTimeout(timerID);
    timerActif = false;
}

function startClock()
{
    stopClock();
    showtime();
}

function showtime()
{
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    heure = hour > 9 ? hour : "0" + hour;
    heure += ":" + (min > 9 ? min : "0" + min);
    heure += ":" + (sec > 9 ? sec : "0" + sec);
    document.Clock.Horloge.value = heure;
    window.status = heure;
    timerID = setTimeout("showtime()", 1000);
    timerActif = true;
}
