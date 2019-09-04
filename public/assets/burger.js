var burgers = [];



$('.submit-button').on('click', function (event) {
    postBurger();
});



$('.burger-button').on('click', function () {
    var id = $(this).attr("data-name");
    console.log(id)

    $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: { devoured: true }
    }).then(function (req, res) {
        console.log(req)
        console.log(res)
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


//posts a burger, and afterwards gets all burgers and reloads the page
function postBurger() {
    let burgerValues = {
        'burger_name': $('.burger-name').val(),
        'devoured': false
    };

    //posts the burger name
    $.post('/api/burgers', burgerValues, function () {
        $('.burger-name').val('')
    }).then(function() {
        getBurgers();
        location.reload();
    })
};