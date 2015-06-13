window.onload = function(){

    navigator.geolocation.getCurrentPosition(
        //DOM do HTML5

        function(geoPosition) {
        //geoPosition é o objeto trazido em caso de sucesso

            addMap(geoPosition.coords.latitude, geoPosition.coords.longitude);
            //ele possui as propriedades latitude e longitude, aqui usadas como parametros da função addMap
        },
        function(error){
            alert('Failed');
        }
    );

    function addMap(latitude, longitude){

        var container = document.querySelector('div.map');

        //------API do Google Maps
        var options = {
            zoom:20,
            center: new google.maps.LatLng(latitude, longitude)
            //A var options é um objeto que carrega a latitude e longitude(trazidas por Parametro) e o zoom
        };

        var map= new google.maps.Map(container, options);
        //------Fim da API

        var marker = new google.maps.Marker({
            position: options.center,
            map: map,
            title: 'Você Está Aqui!'
        });

    }




};