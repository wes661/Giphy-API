var emotions = ["Happy", "Sad", "Mad"];

	      // displayMovieInfo function re-renders the HTML to display the appropriate content
	    function displayEmotion() {

	        var emotion = $(this).attr("data-name");
	        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=DHsjRmQevQ0JKl36B2yOJJUp85Zt0VvF";

	        // Creating an AJAX call for the specific movie button being clicked
	        $.ajax({
	          url: queryURL,
	          method: "GET"
	        }).then(function(response) {
	        	console.log(response.data[0]);
	        	var emotionDiv = $("<div class='emotion'>");
	        	var rating = response.data[0].rating;
	        	var p1 = $("<p>").text(rating);
	        	emotionDiv.html(p1);

	        	var giphUrl = response.data[0].bitly_gif_url 
	        	var giph = $("<img>").attr("src", giphUrl);
	        	emotionDiv.append(giph);

	        	$("#emotion-view").prepend(emotionDiv);
	          
	        });

	    }

	      
	      function renderButtons() {

	        
	        $("#buttons-view").empty();

	        // Looping through the array of movies
	        for (var i = 0; i < emotions.length; i++) {

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