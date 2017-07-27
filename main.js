var HTMLimages = "";
for(var n = 1; n<=151; n++){
    HTMLimages += '<img src="http://pokeapi.co/media/img/'+n+'.png" alt="pokeman '+n+'">'
}

$(document).ready(function(){
    $("#poketainer").append(HTMLimages);

// everything after this is just messing around while following lessons
    $.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
        console.log(res);
        console.log(res.types["0"].name);
        for(var i=0; i<res.types.length; i++) {
            console.log(res.types[i].name);
        }
    }, "json");

    $.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
        var html_str = "";
        html_str += "<h4>Types</h4>";
        html_str += "<ul>"; 
        for(var i = 0; i < res.types.length; i++) {
            html_str += "<li>" + res.types[i].name + "</li>";
        }
        html_str += "</ul>";
        $("#bulbasaur").html(html_str);
    }, "json");


})
