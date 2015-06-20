(function(){


    (function(){

        var buttons = document.querySelectorAll('button');

        for (var i = 0; i < buttons.length; i++) {

            buttons[i].onclick = function(event){
                ajax(event.target.value);
            };
        };

        function ajax(method){

            var xhr = new XMLHttpRequest();

            xhr.open(method, 'http://127.0.0.1:8080/service',true);

            xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");

            xhr.onload = function(){
                var response = JSON.parse(xhr.responseText);
                document.body.innerHTML = '<h2>' + response.method + ': ' + response.name+'</h2>';
            };

            xhr.send(JSON.stringify({name: 'Raul Gil', password: 'raulgil'}));
        }

    })();

})();