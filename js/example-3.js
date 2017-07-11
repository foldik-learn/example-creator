app.example3 = function() {
    $('#example-3-rectangle')
        .fadeOut(1000, function() {
            $(this).css('background-color', app.randomColor())
        })
        .fadeIn(1000)
        .animate({
            width: 50,
            opacity: 0.25,
        }, 5000);
}