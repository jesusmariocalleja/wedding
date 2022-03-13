window.addEventListener('load', scrollTo);
window.addEventListener('load', onResize);
window.addEventListener('load', appearOnScroll);
window.addEventListener('resize', onResize);

function scrollTo(){
    var wrapper = document.getElementById('wrapper'); 
    setTimeout(() => {
        wrapper.scrollTop = 0;
    }, 0)
}

function onResize(){
    const height = `${window.innerHeight}px`;
    
    var wrapper = document.getElementById('wrapper'); 
    wrapper.style.height = height;
    
    var elements = document.getElementsByClassName('full-screen-section');
    Array.prototype.filter.call(elements, function(e){
        e.style.minHeight = height;
    });
}

function appearOnScroll(){
    const intersectionScrollOpts = {
        threshold: 0.3 //0.5
    };
    const intersectionScrollObserver = new IntersectionObserver((entries, intersectionScrollObserver) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else{
                entry.target.classList.add('fade');
                intersectionScrollObserver.unobserve(entry.target);
            }
        })
    }, intersectionScrollOpts);

    const sections = document.querySelectorAll('.appear-on-scroll');
    sections.forEach(section => {
        intersectionScrollObserver.observe(section);
    })
}