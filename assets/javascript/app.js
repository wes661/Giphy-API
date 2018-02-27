var emotions = ["Happy", "Sad", "Mad", "Excited", "Furious", "Delighted", "Emotional", "Confused", "Depressed", "Laughing", "Crying", "Nervous", "Anxious"];

	    function displayEmotion() {

	        var emotion = $(this).attr("data-name");
	        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&limit=10&api_key=DHsjRmQevQ0JKl36B2yOJJUp85Zt0VvF";

	        
	        $.ajax({
	          url: queryURL,
	          method: "GET"
	        }).then(function(response) {
	        	var gifDiv = $("<div class='gifStill' data-state='still'> ");

	        	for(var i = 0; i < response.data.length; i++ ){
	        		console.log(response.data[i]);
	        		
	   			var rating = response.data[i].rating;
	        	var p1 = $("<p class='rating'>").text("Rated: " + rating);
	        	var gifUrl = response.data[i].images.fixed_height_small_still.url;
				
	        	var gif = $("<img class='gifImg col-sm-12'>");
	        	gif.attr("src", gifUrl);
	        	gif.attr({'data-animate' : response.data[i].images.fixed_height_small.url});
	        	gif.attr({'data-still' : response.data[i].images.fixed_height_small_still.url});
	        	gif.attr({'data-state' : 'still' });
	        	gifDiv.append(p1);
	        	gifDiv.append(gif);
	        	$('#emotion-view').html(gifDiv)
	        	}

	        	animate();
			});
		}

			function animate(){

				$('.gifImg').on('click', function(){
					if($(this).attr('data-state') === 'still'){
						$(this).attr('src', $(this).attr('data-animate'));
						$(this).attr('data-state', 'data-animate');
					} else {
				        $(this).attr("src", $(this).attr("data-still"));
				        $(this).attr("data-state", "still");
				    }
				})
			}

	      
	      function renderButtons() {

	        
	        $("#buttons-view").empty();

	        for (var i = 0; i < emotions.length; i++) {

	        	console.log(emotions[i])

	          
	          var a = $("<button>");
	          // Adding a class of emotion-btn to our button
	          a.addClass("emotion-btn");
	          // Adding a data-attribute
	          a.attr("data-name", emotions[i]);
	          // Providing the initial button text
	          a.text(emotions[i]);
	          // Adding the button to the buttons-view div
	          $("#buttons-view").append(a);
	        }
	      }

	      // This function handles events where a emotion button is clicked
	      $("#add-emotion").on("click", function(event) {
	        event.preventDefault();
	        // This line grabs the input from the textbox
	        var emotion = $("#emotion-input").val().trim();

	        // Adding emotion from the textbox to our array
	        emotions.push(emotion);
	        $("#emotion-input").val("");

	        // Calling renderButtons which handles the processing of our emotion array
	        renderButtons();
	      });

	      // Adding a click event listener to all elements with a class of "emotion-btn"
	      $(document).on("click", ".emotion-btn", displayEmotion);
	      	      // Calling the renderButtons function to display the intial buttons
	      renderButtons();