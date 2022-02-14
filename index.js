window.onload = onResize;
window.onresize = onResize;

function onResize(){
    var wrapper = document.getElementById('wrapper');
    var elements = document.getElementsByClassName('full-screen-section');
    const height = `${window.innerHeight}px`;
    
    wrapper.style.height = height;
    Array.prototype.filter.call(elements, function(e){
        e.style.height = height;
    });
}