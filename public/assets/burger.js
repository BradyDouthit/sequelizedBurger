$('.submit-button').on('click', function(event) {
    event.preventDefault();
    let burgerName = {"burger_name": $(".burger-name").val()};
    
    console.log(`Burger name: ${burgerName.burger_name}`);

    //posts the burger name
    $.post('/api/burgers', burgerName, function(){
        $('.burger-name').val('')
    })
})