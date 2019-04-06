
$("search-button").on("click", function() {
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "GzrJfoaJ2Soki2xGNoS1CzWXguahXYmL"

$.ajax({
    url: queryURL,
    method: "GET"
  })

  .then (function(response) {
      console.log(response)
  });
});

