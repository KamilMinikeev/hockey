$(function () {

    let body = document.querySelector("body");

    //headerFixed
    let headerMenu = document.querySelector('.bottom-header');
    let headerMenu2 = document.querySelector('.top-header');
    let sectionTop = document.querySelector('.header');
    let sectionTopHeight = sectionTop.clientHeight;
    let scrollPos = window.pageYOffset;
    checkScroll(scrollPos, sectionTopHeight);
    window.addEventListener("scroll", headerFixed);
    window.addEventListener("resize", headerFixed);
    function headerFixed() {
        let sectionTopHeight = sectionTop.clientHeight;
        let scrollPos = window.pageYOffset;
        checkScroll(scrollPos, sectionTopHeight);
    }
    function checkScroll(scrollPos, sectionTopHeight) {
        if (scrollPos > sectionTopHeight) {
            headerMenu.classList.add("fixed");
            headerMenu2.classList.add("fixed");
        }
        else {
            headerMenu.classList.remove("fixed");
            headerMenu2.classList.remove("fixed");
        }
    }

    /*scrol to*/
    body.addEventListener("click", function (event) {
        // event.preventDefault();
        let targetW = event.target;
        dataBlock = targetW.getAttribute('data-scroll');
        if (dataBlock) {
            event.preventDefault();
            let dataClass = document.querySelector(`.` + dataBlock);
            dataClass.scrollIntoView({
                behavior: 'smooth',

            })
            popupMenu.classList.remove('is-active');
            // headerMenu.classList.add('fixed');
            body.classList.remove('no-scroll');
        }
    })

    // slider 

    $('.header__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    });

    //content-more

    let contentMoreBtn = document.querySelector('.section-about__more');
    let contentMoreBtnRemove = document.querySelector('.section-about__more-remove');
    let contentMore = document.querySelector('.section-about__content-more');
    let textMore1 = document.querySelector('.section-about__text-more1');

    contentMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        contentMore.classList.add("is-active");
        textMore1.classList.add("is-active");
        contentMoreBtn.classList.add("is-active");
    })
    contentMoreBtnRemove.addEventListener("click", function (a) {
        a.preventDefault();
        contentMore.classList.remove("is-active");
        textMore1.classList.remove("is-active");
        contentMoreBtn.classList.remove("is-active");
    })

    //telInput
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {

        utilsScript: "js/utils.js"
    });

    //video
    let video = document.querySelector(".section-about__video");
    video.addEventListener("click", function () {
        document.getElementById('vidwrap').innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zhgLk2gPv_M" frameborder="0"></iframe>';
    })


    //popup

    let btnMenu = document.querySelector('.header__hamburger');
    let popupMenu = document.querySelector('.popup-menu');

    btnMenu.addEventListener('click', function () {
        popupMenu.classList.add('is-active');
        headerMenu.classList.remove('fixed');
        body.classList.add('no-scroll');
        if (popupMenu.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupMenu.classList.remove('is-active');
                    headerMenu.classList.add('fixed');
                    body.classList.remove('no-scroll');
                }
            })
        }
    })
    body.addEventListener('click', function (a) {
        let target = a.target;
        if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
            popupMenu.classList.remove('is-active');
            // headerMenu.classList.add('fixed');
            body.classList.remove('no-scroll');
        }
    })


})