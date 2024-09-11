$(document).ready(function() {
    document.querySelectorAll('.about-faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            const arrowIcon = item.querySelector('img');

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the answer
            }

            answer.classList.toggle('active');
            arrowIcon.classList.toggle('rotate');
        });
    });


    const counters = document.querySelectorAll('.about-amount-content-value span');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    function startCounter(counter) {
        const targetValue = +counter.getAttribute('data-target');
        let startValue = 0;
        const duration = 500;
        const increment = targetValue / (duration / 16);

        function updateCounter() {
            startValue += increment;
            if (startValue < targetValue) {

                if (targetValue === 5000) {
                    counter.innerText = Math.ceil(startValue);
                } else {
                    counter.innerText = Math.ceil(startValue).toLocaleString();
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (targetValue === 5000) {
                    counter.innerText = targetValue;
                } else {
                    counter.innerText = targetValue.toLocaleString();
                }
            }
        }

        updateCounter();
    }

});







