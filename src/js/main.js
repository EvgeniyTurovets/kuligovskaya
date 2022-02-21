$(function(){
    $(document).on('scroll', function(){
        if(window.pageYOffset > 0){
            $('#header').addClass('fix')
        }else{
            $('#header').removeClass('fix')
        }
    })


    if($(window).width() > 991){
        const swiper = new Swiper('#main-slider', {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                
                formatFractionCurrent: function(number) {
                    if (number < 10) {
                    number = '0' + number
                    }
                    return number
                },
                formatFractionTotal:function(number) {
                    if (number < 10) {
                    number = '0' + number
                    }
                    return number
                },
                renderFraction: function (currentClass, totalClass, index, total) {
                    return '<span class="' + currentClass + '">0 '+ index +' </span>' +
                        ' <span class="line"></span> ' +
                        '<span class="' + totalClass + '">0 '+ total +' </span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: "fade",
            lazy: true,
            slidesPerView: 1,
            loop: true,
            allowTouchMove: true,
            breakpoints: {
                992: {
                    allowTouchMove: false,
                    effect: "fade",
                }
            }
        });
    }else{
        const swiper = new Swiper('#main-slider', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: "slide",
            lazy: true,
            slidesPerView: 1,
            loop: true,
            allowTouchMove: true,
            spaceBetween: 20,
        })
    }
    


    const swiperImgTmb = new Swiper('#main-slider-img-sub', {
        slidesPerView: 'auto',
        spaceBetween: 9,
        loop: true,
        lazy: true,
        autoplay: {
            delay: 5000,
        },
        allowTouchMove: false,
        watchSlidesProgress: true,

    })


    const swiperImg = new Swiper('#main-slider-img', {
        lazy: true,
        loop: true,
       
        allowTouchMove: false,
        breakpoints: {
            992: {
                effect: "fade",
            }
        }
    })


})