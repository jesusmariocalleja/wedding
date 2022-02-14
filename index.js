window.onload = onResize;
window.onresize = onResize;

function onResize(){
    var elements = document.getElementsByClassName('full-height');
    Array.prototype.filter.call(elements, function(e){
        e.style.height = `${window.innerHeight}px`;
    });
}