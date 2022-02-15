countdown();

function countdown(){
    const targetTime = moment('2022-11-05 13:00');
    var element = document.getElementById('countdown'); 
    
    printTime(element, targetTime);
    setInterval(function(){
        printTime(element, targetTime);
    }, 1000);
}

function printTime(element, targetTime){
    const timeBetween = moment.duration(targetTime.diff(moment()));
    element.innerText = `${timeBetween.months()} meses, ${timeBetween.days()} días, ${timeBetween.hours()} horas, ${timeBetween.minutes()} minutos y ${timeBetween.seconds()} segundos`;
}