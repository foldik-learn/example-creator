/* Don't delete it */
var logger = function(elementId) {
    function log(text) {
        $('#' + elementId).append('<div>' + text + '</div>');
    }

	return {
		log: log
	}
};

/* Start from here*/

var example1Logger = logger('example-1');

example1Logger.log('Hello');