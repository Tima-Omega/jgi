$(document).ready(function() {
    $(".profile__select").select2({
        minimumResultsForSearch: Infinity,
        placeholder: {
            id: 'Выберите город...', // the value of the option
            text: 'Выберите город...'
        }
    });
});