window.onload = function() {

    var typingElement = document.getElementById('typing-text');
    var words = ['Lulusan SMA IPA', 'Siap Kerja Lapangan', 'Minat Konstruksi Perkapalan'];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function typeEffect() {
        var currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex = charIndex - 1;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex = charIndex + 1;
        }

        var speed = 100;

        if (isDeleting) {
            speed = 50;
        }

        if (isDeleting == false && charIndex == currentWord.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting == true && charIndex == 0) {
            isDeleting = false;
            wordIndex = wordIndex + 1;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    if (typingElement) {
        typeEffect();
    }

    var navLinks = document.querySelectorAll('.nav-links a');
    var heroButtons = document.querySelectorAll('.hero-buttons a');

    function applySmoothScroll(elementList) {
        for (var i = 0; i < elementList.length; i++) {
            elementList[i].onclick = function(event) {
                var targetId = this.getAttribute('href');
                if (targetId.startsWith('#')) {
                    event.preventDefault();
                    var targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            };
        }
    }

    applySmoothScroll(navLinks);
    applySmoothScroll(heroButtons);

    var backToTopBtn = document.getElementById('backToTop');

    window.onscroll = function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    backToTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

};