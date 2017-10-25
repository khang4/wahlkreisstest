class _mapControl
{
    constructor()
    {
        this.map=new google.maps.Map(document.querySelector(".map"),{
            center:{lat:38.682,lng:-77.344},
            zoom:8
        });

        this.direction=new google.maps.DirectionsService();

        this.menu=document.querySelector(".menu-bar");

        this.menuSet();
        this.mapButtons();
    }

    menuSet()
    {
        this.menu.querySelector(".minimise").addEventListener("click",(e)=>{
            this.menu.classList.remove("expanded");
            this.menu.classList.add("hidden");
            this.menuShow.classList.remove("hidden");
        });

        this.menu.querySelector(".test1").addEventListener("click",(e)=>{
            this.loadGeoJsonTest();
        });

        this.menu.querySelector(".expand").addEventListener("click",(e)=>{
            this.menu.classList.add("expanded");
        });
    }

    mapButtons()
    {
        this.menuShow=document.createElement("div");
        this.menuShow.classList.add("menu-show","hidden");
        this.menuShow.innerHTML="▴";

        this.menuShow.addEventListener("click",(e)=>{
            this.menu.classList.remove("hidden");
            this.menuShow.classList.add("hidden");
        });

        this.map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(this.menuShow);
    }

    //draw a polyline from a coordinate to another, following
    //roads by using the direction api
    roadLineDrawtest()
    {
        this.direction.route({
            origin:{lng:-78,lat:39.137},
            destination:{lat:39.281,lng:-76.60},
            travelMode:google.maps.TravelMode.DRIVING
        },(r,s)=>{
            var pathPoints=r.routes[0].overview_path;
            var path=new google.maps.Polyline({
                path:pathPoints
            });

            path.setMap(this.map);
        });
    }

    //load geojson from a file and alternate colouring
    //between red and blue
    loadGeoJsonTest()
    {
        this.map.data.loadGeoJson("md-district.geojson");

        var mapcolorCount=1;

        this.map.data.setStyle((f)=>{
            var color="red";

            if (mapcolorCount%2)
            {
                color="blue";
            }

            mapcolorCount++;

            return {fillColor:color,strokeColor:color,strokeWeight:1};
        });
    }
}