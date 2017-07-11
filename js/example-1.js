app.example1 = function () {
    var example1Logger = app.logger('example-1');

    var funcList = [];

    for (var i = 0; i < 10; i++) {
        /* Elkezdtünk belerakni függvényeket */
        funcList.push(/*Ez egy azonnal kiértékelődő függvény*/(function (number) {
            /*Visszatér egy függvénnyel ami belekerül a listába */
            return function () {
                example1Logger.log(number + ' négyzete: ' + (number * number));
            }
        })(i)/*Itt hívódik meg az azonnal kiértékelődő függvény*/);
    }

    /*Végig hívunk a függvényeken */
    funcList.forEach(function (fun) {
        fun();
    });
}