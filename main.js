window.addEventListener('DOMContentLoaded', function(){
    'use strict';

//Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
         for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            }
        }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i< tab.length; i++) {
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

//Timer
    let deadline = '2019-10-24';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) %60),
        minutes = Math.floor((t/1000/60) %60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };
    };

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock (){
            let t = getTimeRemaining(endtime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock ('timer', deadline);

//modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    description = document.querySelectorAll('.description-btn');
    
more.addEventListener('click', function() {
    overlay.style.display = 'block';
    document.body.style.overflow = "hidden";
})

close.addEventListener ('click', function(){
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
})

for (let a = 0; a < description.length; a++) {
    description[a].addEventListener('click', function(){
        overlay.style.display = 'block';
        document.body.style.overflow = "hidden";
    })
}

//слайдер

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(slideIndex);
function showSlides(n){

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }
    slides[slideIndex - 1].style.display = 'block';

    dots.forEach((item) => item.classList.remove('dot-active'));
    dots[slideIndex - 1].classList.add('dot-active');
}
 
function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n); 
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});

});

