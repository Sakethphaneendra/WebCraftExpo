document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.shapesss');
    const shapes = document.querySelectorAll('.shape');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const shapeWidth = shapes[0].offsetWidth;
    const totalShapes = shapes.length;

    function moveShapes(direction) {
        if (direction === 'next') {
            currentIndex++;
            if (currentIndex >= totalShapes) {
                currentIndex = 0;
            }
        } else if (direction === 'prev') {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalShapes - 1;
            }
        }

        const displacement = currentIndex * -shapeWidth;
        sliderContainer.style.transform = `translateX(${displacement}px)`;
    }

    prevBtn.addEventListener('click', () => {
        moveShapes('prev');
    });

    nextBtn.addEventListener('click', () => {
        moveShapes('next');
    });
});


