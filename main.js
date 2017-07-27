var HTMLimages = "";
for(var n = 1; n<=151; n++){
    HTMLimages += "<img src='http://pokeapi.co/media/img/"+n+".png' alt='"+n+"'>"
}
// not sure if it matters if function is inside or outside of .ready??
function info(pm){
    $.get("http://pokeapi.co/api/v1/pokemon/"+pm+"/", function(res) {
        var html_str = "";
        html_str += "<h1>" +res.name+ "</h1>";
        html_str += '<img src="http://pokeapi.co/media/img/'+pm+'.png" alt="'+pm+'">'
        html_str += "<h3>Types</h3>";
        html_str += "<ul>"; 
        for(var i = 0; i < res.types.length; i++) {
            html_str += "<li>" + res.types[i].name + "</li>";
        }
        html_str += "</ul>";
        html_str += "<h3>Height</h3>";
        html_str += "<h5>"+res.height+"</h5>";
        html_str += "<h3>Weight</h3>";
        html_str += "<h5>"+res.weight+"</h5>";
        $("#pokedex").html(html_str);
    }, "json");
}


$(document).ready(function(){
    $("#poketainer").html(HTMLimages);

    $("#poketainer img").click(function() {
        var imgclicked = $(this).attr("alt");
        info(imgclicked);

        
    });
    

})
