$(function(){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('select').styler();  
    
    //Date
    let today = new Date().toLocaleDateString('ua-UA', {
        day : 'numeric',
        month : 'numeric',
    }).split(' ').join(' ');
    $('.news__date').text(today);
    console.log(today);

   //Burger menu
    $('.header__btn-menu, .menu a').on('click', function(){
        $('.menu ul').slideToggle();
    })

    //scroll 
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 110;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
        e.preventDefault();
    });

});
    //fixed header при скроле
window.onscroll = function showheader() {
    let header = document.querySelector('.header__content');
    if (window.pageYOffset > 100) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}


