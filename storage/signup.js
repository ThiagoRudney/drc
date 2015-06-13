(function(){

    var input = document.querySelectorAll('input:not([type=button])');

    var buttonDelete = document.body.querySelector('#buttonDelete');

    var buttonSave = document.body.querySelector('#buttonSave');

    var signup = {};

    var save = function (key, value) {
        localStorage[key] = JSON.stringify(value);
    }

    var loadFormValues = function () {
        for (var i = 0; i < input.length; i++) {
            setObject(input[i].name, input[i].value);
        }
        save('signup', signup);
    };

    var setObject = function(property, value){
        signup[property] = value;
    };

    buttonSave.onclick = function(){
        loadFormValues();
    };



})();
