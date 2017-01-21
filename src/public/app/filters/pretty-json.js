app.filter('prettyJson', function () {
    return function (input) {
        return JSON.stringify(input, null, 2);
    };
});
