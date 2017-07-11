/* Don't delete it */
var app = app || {};

app.logger = function(elementId) {
    function log(text) {
        $('#' + elementId).append('<div>' + text + '</div>');
    }

	return {
		log: log
	}
};