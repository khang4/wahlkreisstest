window.onload=main;

var map;
var direction;

function main()
{
    map=new google.maps.Map(document.querySelector(".map"),{
        center:{lat:38.682,lng:-77.344},
        zoom:8
    });
}

//draw a polyline from a coordinate to another, following
//roads by using the direction api
function roadLineDrawtest()
{
    direction=new google.maps.DirectionsService();

    direction.route({
        origin:{lng:-78,lat:39.137},
        destination:{lat:39.281,lng:-76.60},
        travelMode:google.maps.TravelMode.DRIVING
    },(r,s)=>{
        var pathPoints=r.routes[0].overview_path;
        var path=new google.maps.Polyline({
            path:pathPoints
        });

        path.setMap(map);
    });
}

//load geojson from a file and alternate colouring
//between red and blue
function loadGeoJsonTest()
{
    map.data.loadGeoJson("md-district.geojson");

    var mapcolorCount=1;

    map.data.setStyle((f)=>{
        var color="red";

        if (mapcolorCount%2)
        {
            color="blue";
        }

        mapcolorCount++;

        return {fillColor:color,strokeColor:color,strokeWeight:1};
    });
}