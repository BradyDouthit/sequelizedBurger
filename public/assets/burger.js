//$(document).ready(function () {

var burgers = [];



$('.submit-button').on('click', function (event) {
    event.preventDefault();
    postBurger();
    getBurgers();
});



$('.burger-button').on('click', function () {
    $(this).attr('devoured', true)
    $.ajax('/api/burgers', {
        type: 'PUT',
        data: { devoured: true }
    }).then(function () {
        if ($(this).attr('devoured') === true) {
            $(this).appendTo('.devoured')
        }
    }
    );
});



//Gets all burgers
function getBurgers() {
    $.get('/api/burgers', function (data) {
        burgers = data
        console.log(burgers)
    });
};


//posts a burger when the user enters a name and clicks submit
function postBurger() {
    let burgerValues = {
        'burger_name': $('.burger-name').val(),
        'devoured': false
    };

    //console.log(`Burger name: ${burgerName.burger_name}`);

    //posts the burger name
    $.post('/api/burgers', burgerValues, function () {
        $('.burger-name').val('')
    }).then(function () {
        getBurgers();
    });
};


//});