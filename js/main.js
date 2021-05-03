$(document).ready(function() {
    $(".profile__select").select2({
        minimumResultsForSearch: Infinity,
        placeholder: {
            id: 'Выберите город...',
            text: 'Выберите город...'
        },
        dropdownCssClass: "profile__select-dropdown",
    });
    $(".profile__select--sphere").select2({
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "profile__select-dropdown",
    });
    $(".modal-prem__selection").select2({
        minimumResultsForSearch: Infinity,
        dropdownCssClass: "modal-prem__select-dropdown",
    });
		$(".modal-store__selection").select2({
			minimumResultsForSearch: Infinity,
			dropdownCssClass: "modal-store__select-dropdown",
			placeholder: {
				id: 'size', 
				text: 'Выберите размер'
		},
	});
    (function () {

        const cropElement = document.querySelectorAll('.chat__text'),
              size = 32,                                             
              endCharacter = '...';
    
        cropElement.forEach(el => {
            let text = el.innerHTML;
    
            if (el.innerHTML.length > size) {
                text = text.substr(0, size);
                el.innerHTML = text + endCharacter;
            }
        });
    
    }());

    $(function() {
        var tab = $('.chat__tab-inner > div'); 
        tab.hide().filter(':first').show(); 
        
        $('.chat__tab-link').click(function(){
            tab.hide(); 
            tab.filter(this.hash).show(); 
            $('.chat__tab-link').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });

    $(function() {
        var tab = $('.tasks__wrap > div'); 
        tab.hide().filter(':first').show(); 
        
        $('.tasks__link').click(function(){
            tab.hide(); 
            tab.filter(this.hash).show(); 
            $('.tasks__link').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });

    $(function() {
        var tab = $('.store__wrap > div'); 
        tab.hide().filter(':first').show(); 
        
        $('.store__link').click(function(){
            tab.hide(); 
            tab.filter(this.hash).show(); 
            $('.store__link').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });

    $(function() {
        var tab = $('.courses__wrap > div'); 
        tab.hide().filter(':first').show(); 
        
        $('.courses__link').click(function(){
            tab.hide(); 
            tab.filter(this.hash).show(); 
            $('.courses__link').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });

    $(function() {
        var tab = $('.modal__wrap > div'); 
        tab.hide().filter(':first').show(); 
        
        $('.modal__link').click(function(){
            tab.hide(); 
            tab.filter(this.hash).show(); 
            $('.modal__link').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });
    
    $( function() {
        $( ".friend-profile__activity-status" ).progressbar({
          value: 80
        });
    } );

    $(".search__btn").click(function(){
        $(".search__filters").slideToggle();
        $(".search__btn-img").toggleClass('active');
    });

    $(".mask-birth").mask("99 / 99 / 9999").datepicker();
    $(".mask-phone").mask("+9 (999) 999-99-99");
    $(".modal-prem__input--number").mask("9999 9999 9999 9999");
    $(".modal-prem__input--date").mask("99 / 99");
    $(".modal-prem__input--cvc").mask("999");
});

$('.overlay').click(function () {
    $(this).fadeOut();
    $('.modal').fadeOut();
});
$('.button').click(function() {
    $('.overlay').fadeIn();
    $('.modal').fadeIn();
});
$('.modal__close').click(function () {
    $(this).closest('.modal').fadeOut();
    $('.overlay').fadeOut();
});

$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        $('.modal').fadeOut();
        $('.overlay').fadeOut();
    }
});



const swiper = new Swiper('.friend-profile__photo', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


