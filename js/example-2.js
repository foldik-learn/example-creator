app.example2 = function() {
    var example2Logger = app.logger('example-2');

    /*
        Példa a timeout használatára
    */

    var timeoutFunList = [];
    
    for (var i = 0; i < 10; i++) {
         timeoutFunList.push((function(number) {
             return function() {
                 setTimeout(function() {
                     example2Logger.log(number + ' a harmadikon: ' + (number * number * number));
                 }, 500 + number * 100);
             }
         }(i)));      
    }

    timeoutFunList.forEach(function(fun) {
        fun();
    })
}