window.onload = function(){
    var container = document.querySelector('div.map');

    var latitude = -23.585427799999998, longitude = -46.67705420000001;

    var options = {
        zoom:20,
        center: new google.maps.LatLng(latitude, longitude)
    };

    var map= new google.maps.Map(container, options);
};