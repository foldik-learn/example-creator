/* Don't delete it */
var app = app || {};

app.logger = function (elementId) {
    function log(text) {
        $('#' + elementId).append('<div>' + text + '</div>');
    }

    return {
        log: log
    }
};
app.mapClickEvent = function (id, callbackFun, shouldEmpty) {
    $(id).click(function () {
        if (shouldEmpty) {
            $(id).empty();
        }
        callbackFun();
    });
}

app.randomColor = function() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ' )';
}