var emotions = ["Happy", "Sad", "Mad"];

	      // displayMovieInfo function re-renders the HTML to display the appropriate content
	    function displayEmotion() {

	        var emotion = $(this).attr("data-name");
	        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&limit=10&api_key=DHsjRmQevQ0JKl36B2yOJJUp85Zt0VvF";

	        
	        $.ajax({
	          url: queryURL,
	          method: "GET"
	        }).then(function(response) {
	        	for(var i = 0; i < response.data.length; i++ ){
	        		console.log(response.data[i].rating);

	        	var emotionDiv = $("<div class='emotion'>");
	        	var rating = response.data[i].rating;
	        	var p1 = $("<p>").text(rating[i]);
	        	emotionDiv.append(p1);
				var giphUrl = response.data[i].images.fixed_height.url;
	        	var giph = $("<img>").attr("src", giphUrl);
	        	emotionDiv.append(giph);
	        	}

	        	
	   //      	var rating1 = response.data[1].rating;
	   //      	var p2 = $("<p>").text(rating1);
	   //      	emotionDiv.append(p2);
				// var giphUrl1 = response.data[1].images.fixed_height.url;
	   //      	var giph1 = $("<img>").attr("src", giphUrl1);
	   //      	emotionDiv.append(giph1);

	   //      	var rating2 = response.data[2].rating;
	   //      	var p3 = $("<p>").text(rating2);
	   //      	emotionDiv.append(p3);
				// var giphUrl2 = response.data[2].images.fixed_height.url;
	   //      	var giph2 = $("<img>").attr("src", giphUrl2);
	   //      	emotionDiv.append(giph2);

	   //      	var rating3 = response.data[3].rating;
	   //      	var p4 = $("<p>").text(rating1);
	   //      	emotionDiv.append(p4);
				// var giphUrl3 = response.data[3].images.fixed_height.url;
	   //      	var giph3 = $("<img>").attr("src", giphUrl3);
	   //      	emotionDiv.append(giph3);

	   //      	var rating4 = response.data[4].rating;
	   //      	var p5 = $("<p>").text(rating4);
	   //      	emotionDiv.append(p5);
				// var giphUrl4 = response.data[4].images.fixed_height.url;
	   //      	var giph4 = $("<img>").attr("src", giphUrl4);
	   //      	emotionDiv.append(giph4);

	        	


	        	$("#emotion-view").html(emotionDiv);
	          
	        });

	    }

	      
	      function renderButtons() {

	        
	        $("#buttons-view").empty();

	        // Looping through the array of movies
	        for (var i = 0; i < emotions.length; i++) {

	        	console.log(emotions[i])

	          // Then dynamicaly generating buttons for each movie in the array
	          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
	          var a = $("<button>");
	          // Adding a class of movie-btn to our button
	          a.addClass("emotion-btn");
	          // Adding a data-attribute
	          a.attr("data-name", emotions[i]);
	          // Providing the initial button text
	          a.text(emotions[i]);
	          // Adding the button to the buttons-view div
	          $("#buttons-view").append(a);
	        }
	      }

	      // This function handles events where a movie button is clicked
	      $("#add-emotion").on("click", function(event) {
	        event.preventDefault();
	        // This line grabs the input from the textbox
	        var emotion = $("#emotion-input").val().trim();

	        // Adding movie from the textbox to our array
	        emotions.push(emotion);

	        // Calling renderButtons which handles the processing of our movie array
	        renderButtons();
	      });

	      // Adding a click event listener to all elements with a class of "movie-btn"
	      $(document).on("click", ".emotion-btn", displayEmotion);

	      // Calling the renderButtons function to display the intial buttons
	      renderButtons();