(function(){

    function success(geoPosition) {
        showIt(geoPosition);

    }

    function error(positionError) {
        showIt(positionError);
    }

    function showIt(object){
        var content = '';

        for (var property in object) {
            content += '<h1>' + property + ": " + object[property] + '</h1>';
        }

        document.body.innerHTML = content;
    }

    navigator.geolocation.getCurrentPosition(success, error)
})();