$(function(){
   const initSliders = () => {
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });
   }
    
    //Date
    const initDatePost = () => {
        let today = new Date().toLocaleDateString('ua-UA', {
            day : 'numeric',
            month : 'numeric',
        }).split(' ').join(' ');
        $('.news__date').text(today);
    }
 
   //Burger menu
   const initBurgerMenu = () => {
    $(document).on('click', '.header__btn-menu, .menu a',  function(e) {
        $('.menu ul').stop().slideToggle();
    })

   }

    //scroll 
    const initSmoothScrooll = () => {
        $("body").on('click', '[href*="#"]', function(e){
            e.preventDefault();
            let fixed_offset = 110;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);

        });
    }

    const initAddRemoveClassHeader = () => {
        let header = $('.header__content');
        let scroll = $(window).scrollTop();
        
        function AddRemoveFixed (scrollTop) {
            if (scrollTop > 100) {
                header.addClass('header__fixed');
            } else {
                header.removeClass('header__fixed');
            }
        }

        AddRemoveFixed (scroll)

        $(window).scroll(function() {    
            let scroll = $(window).scrollTop();
            AddRemoveFixed (scroll)
        });
    
    }
 

    $('select').styler();  
    initDatePost();
    initSliders();
    initBurgerMenu();
    initSmoothScrooll();
    initAddRemoveClassHeader();

});



