window.onload=main;

var control;

function main()
{
    control=new _mapControl;
}

function htest()
{
    console.log("he");
    var r=new XMLHttpRequest();

    r.open("GET","https://districtlands.herokuapp.com/");

    r.onreadystatechange=()=>{
        if (r.readyState==4)
        {
            console.log(r.response);
        }
    };

    r.send();
}