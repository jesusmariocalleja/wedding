countdown();

function countdown(){
    const targetTime = moment('2022-11-05 12:00');
    var element = document.getElementById('countdown'); 
    
    printTime(element, targetTime);
    setInterval(function(){
        printTime(element, targetTime);
    }, 1000);
}

function printTime(element, targetTime){
    const timeBetween = moment.duration(targetTime.diff(moment()));
    // Días
    element.innerText = `${parseInt(timeBetween.asDays())} días, ${timeBetween.hours()} horas, ${timeBetween.minutes()} minutos y ${timeBetween.seconds()} segundos`;
    // Meses y días
    //element.innerText = `${timeBetween.months()} meses, ${timeBetween.days()} días, ${timeBetween.hours()} horas, ${timeBetween.minutes()} minutos y ${timeBetween.seconds()} segundos`;
}