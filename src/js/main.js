$(function(){
    lazyload();

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
            spaceBetween: 2000,
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

    })


    const swiperImg = new Swiper('#main-slider-img', {
        lazy: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        allowTouchMove: false,
        effect: "fade",
    })


    // табы на главной
    var customSwipers = document.querySelectorAll('.custom-swiper')
    if(customSwipers.length){
        customSwipers.forEach(function(el, index){
            var customSwiper = new Swiper(el, {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination-custom',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                },
                breakpoints: {
                    575: {
                        slidesPerView: 'auto',
                    }
                }
            })
        })        
    }

    $('.main-tabs__nav li').on('click', function(){
        if(!$(this).hasClass('active')){
            $('.main-tabs__nav li').removeClass('active')
            $(this).addClass('active')

            var index = $(this).index()
            $('.main-tabs__content').hide()
            $('.main-tabs__content').eq(index).fadeIn()
        }
    })

    $('.more-catalog-show').on('click', function(){
        $('.main-catalog__bot').addClass('active')
        $('.main-catalog__wrap--more').slideDown().css('display','flex')
    })

    $('.more-catalog-hide').on('click', function(){
        $('.main-catalog__bot').removeClass('active')
        $('.main-catalog__wrap--more').slideUp()
    })

    function refreshMainCompany(){
        if($(window).width() < 992){
            $('.company__media').appendTo('.company__mob')
            $('.company__btn').appendTo('.company__mob')
        }else{
            $('.company__media').appendTo('.company__left')
            $('.company__btn').appendTo('.company__right__wrap')
        }
    }   
    refreshMainCompany()

    $(window).on('resize', function(){
        refreshMainCompany()
    })
})