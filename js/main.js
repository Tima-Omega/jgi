$(document).ready(function() {
    $(".profile__select").select2({
        minimumResultsForSearch: Infinity,
        placeholder: {
            id: 'Выберите город...', // the value of the option
            text: 'Выберите город...'
        }
    });
    $(".profile__select--sphere").select2({
        minimumResultsForSearch: Infinity,
    });
    (function () {

        const cropElement = document.querySelectorAll('.chat__text'), // выбор элементов 
              size = 32                                             // кол-во символов 
              endCharacter = '...';                                  // окончание 
    
        cropElement.forEach(el => {
            let text = el.innerHTML;
    
            if (el.innerHTML.length > size) {
                text = text.substr(0, size);
                el.innerHTML = text + endCharacter;
            }
        });
    
    }());

    $(".mask-birth").mask("99 / 99 / 9999").datepicker();
    $(".mask-phone").mask("+9 (999) 999-99-99");
});

