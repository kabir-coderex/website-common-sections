// Accordion.js
document.querySelectorAll(".gwpf-accordion-item").forEach((item) => {
    item.querySelector(".gwpf-accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
});

// Video Play
document.querySelector("#gwpf-play-video").addEventListener('click', ()=>{
    let iframeWrapper = document.getElementById('gwpf-iframe-wrapper');
    iframeWrapper.innerHTML = `<iframe id="gwpf-video-iframe" width="560" height="315" src="https://www.youtube.com/embed/AprdFvhjsH0?si=rNQY1iLpPGdCmkij?autoplay=1" title="Build LMS Funnel with WPFunnel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    // Hide the overlay
    document.querySelector('.gwpf-thumbnail-overlay').style.display = 'none';
})

// Carousle.js Starts

function getScrollAmount() {
    const width = window.innerWidth;
    if (width <= 575) {
        return 300;
    } else if (width <= 767) {
        return 420;
    } else if (width >= 768 && width <= 991) {
        return 620;
    } else {
        return 450; 
    }
}



const carrouselWrapper = document.querySelector('.gwpf-clients-review-section-container .gwpf-carousel-wrapper')
document.querySelectorAll('#gwpf-next-btn')?.forEach(item => {
    if(item){
        item.addEventListener('click', ()=>{
            if(carrouselWrapper){
                carrouselWrapper.scrollLeft += getScrollAmount();
            }
        })
    }
})

document.querySelectorAll('#gwpf-next-btn-mobile')?.forEach(item => {
    if(item){
        item.addEventListener('click', ()=>{
            if(carrouselWrapper){
                carrouselWrapper.scrollLeft += getScrollAmount();
            }
        })
    }
})

document.querySelectorAll('#gwpf-pre-btn')?.forEach(item => {
    if(item){
        item.addEventListener('click', ()=>{
            if(carrouselWrapper){
                carrouselWrapper.scrollLeft -= getScrollAmount();
            }
        })
    }
})

document.querySelectorAll('#gwpf-pre-btn-mobile')?.forEach(item => {
    if(item){
        item.addEventListener('click', ()=>{
            if(carrouselWrapper){
                carrouselWrapper.scrollLeft -= getScrollAmount();
            }
        })
    }
})

// Horizontal scroll with mouse drag section starts
let startX, scrollLeft, isDown;
function mouseIsDown(e) {
    isDown = true;
    startX = e.pageX - carrouselWrapper.offsetLeft;
    scrollLeft = carrouselWrapper.scrollLeft;
}

function mouseUp() {
    isDown = false;
}

function mouseLeave() {
    isDown = false;
}

function mouseMove(e) {
    if (isDown) {
    e.preventDefault();

    // Move Horizontally
    let x = e.pageX - carrouselWrapper.offsetLeft;
    let walkX = x - startX;
    carrouselWrapper.scrollLeft = scrollLeft - walkX;
    }
}

carrouselWrapper.addEventListener('mousemove', mouseMove);
carrouselWrapper.addEventListener('mouseleave', mouseLeave);
carrouselWrapper.addEventListener('mouseup', mouseUp);
carrouselWrapper.addEventListener('mousedown', mouseIsDown);


// Carousle.js Ends



