$("button").on("click", function() {
      var searchTerm = 'election';
	  const apikey = "GzrJfoaJ2Soki2xGNoS1CzWXguahXYmL";
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + apikey;
        ;

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;