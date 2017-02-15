window.onload =
    function () {


        function fslide(i) {


            var slides = document.querySelectorAll('#slides' + i + ' .slide');
            var currentSlide = 0;

            function nextSlide() {
                goToSlide(currentSlide + 1);
            }

            function previousSlide() {
                goToSlide(currentSlide - 1);
            }

            function goToSlide(n) {
                slides[currentSlide].className = 'slide';
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].className = 'slide showing';
            }

            var next = document.getElementById('next' + i);
            var previous = document.getElementById('previous' + i);

            next.onclick = function () {
                nextSlide();
            };
            previous.onclick = function () {
                previousSlide();
            };

        }

        fslide(1);
        fslide(2);
        fslide(3);


    }