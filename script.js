
$('#form').click(function() {
    $('#form').toggleClass('active');
    $('.texts').toggleClass('active');
    $('#form').removeClass('top');
    $('#results').removeClass('top');
    $('#results').empty();
    $('#text-input').val("");
    $('#handle').toggleClass('active');
    $('#collapse-btn').toggleClass('active');
    $('#text-input').toggleClass('active');
    $("#text-input").focus();
    return false;
});

$("#form input").click(function(e) {
        e.stopPropagation();
});

$('#text-input').keypress(function (e) {
  if (e.which == 13) {
  	var inptVal = $("#text-input").val();

  	var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + inptVal + "&callback=?";

  	$('#results').empty();
    $('#form').submit(console.log(inptVal + " " + url));

	$.getJSON(url, function(json) {
		
		console.log(json);

		$('#form').addClass('top');
		$('#results').addClass('top');

		$.each(json.query.pages, function (i) {
			$('#results').append("<div class='result-box'><a href='https://en.wikipedia.org/?curid=" + json.query.pages[i].pageid + "' target='_blank'><h2>" + json.query.pages[i].title + "</h2><p>" + json.query.pages[i].extract + "</p></a></div>");
	                        // console.log(json.query.pages[i].pageid);
	                        // console.log(json.query.pages[i].title);
	                        // console.log(json.query.pages[i].extract);
	  });

  });

    console.log("got this far - finally it is sorta working!");

  }
});


