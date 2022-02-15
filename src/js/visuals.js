window.onload = onResize;
window.onresize = onResize;

function onResize(){
    const height = `${window.innerHeight}px`;
    
    var wrapper = document.getElementById('wrapper'); 
    wrapper.style.height = height;
    
    var elements = document.getElementsByClassName('full-screen-section');
    Array.prototype.filter.call(elements, function(e){
        e.style.minHeight = height;
    });
}