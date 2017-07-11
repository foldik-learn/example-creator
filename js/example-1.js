app.example1 = function () {
    var example1Logger = app.logger('example-1');

    var funcList = [];

    for (var i = 0; i < 10; i++) {
        funcList.push((function (number) {
            example1Logger.log(number + ' négyzete: ' + (number * number));
        })(i));
    }

    funcList.forEach(function (fun) {
        fun();
    });
}

app.example1();