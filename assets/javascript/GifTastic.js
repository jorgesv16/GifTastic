var search = "chicken";
var topic =[];

for (var i = 0; i < topic.length; i++) {
  $("")
}

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=b4H9jZJL8ilOBzfKXEwUDjItsnyYMWdZ&q=" + search + "&limit=1&offset=0&rating=G&lang=en";

$.ajax({
  url: queryURL,
  method: 'GET'
  }).done(function(response) {

    var im = response.data['0'].images.fixed_height.url;

    $("#gifs").append("<img src='" + im + "'>");
    console.log(response);
  });