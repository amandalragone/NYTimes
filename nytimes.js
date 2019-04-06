$('#search-button').on("click", function(event) {
	event.preventDefault();
	 var searchTerm = $("#search-term").val();
	 var numRecords = $("#records").val();
	 var startDate = "&begin_date=" + $("#start-year").val();
	 var endDate = "&end_date=" + $("#end-year").val();
      // var searchTerm = 'election';
	  const apikey = "&api-key=GzrJfoaJ2Soki2xGNoS1CzWXguahXYmL";
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + apikey;
     

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.response;
		  console.log(results);
		});
});