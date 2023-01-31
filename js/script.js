window.onload = function() {
    var map;
    var titleMapa = '<p style="color: black;font-size: 13px;font-weight: bold;">AguiaSoft Sistemas</p>';

    function initializeMap(){
        var mapProp = {
            center: new google.maps.LatLng(-25.980868, -52.557493),
            scrollWheel:false,
            zoom:17
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content){
        var latLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });
    }

    initializeMap();
    addMarker(-25.980868, -52.557493,'',titleMapa);
}