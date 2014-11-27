	
$(document).ready(function(){
	
	$(".tabs > .menu-btt").click(function(){
		$(".nav-menu").toggle();
	});

	$(".nav-menu").find("a[href='#search']").click(function(){
		$("svg").css("visibility", "hidden");
		$(this).find("svg").css("visibility", "visible");
		
		$(".video-list").hide();
		$("#results").show();
		
		$(".nav-menu").hide();
	});

	$(".nav-menu").find("a[href='#history']").click(function(){
		$("svg").css("visibility", "hidden");
		$(this).find("svg").css("visibility", "visible");

		$(".video-list").hide();
		$("#history").show();

		$(".nav-menu").hide();
		
		getRecents();
	});

});


function getRecents() {
	socket.emit("get history");
}

function searchHistory(q) {
	socket.emit("search history", {q:q});
}

socket.on("history", function(videos){

	$('#history').html('');
  var $template = $(".__templates .video");

	if( typeof videos === 'undefined' || videos.length <= 0 ){ return; }

	videos.forEach(function(video){
    // You should really use something like handlebars here
    var $video = $template.clone();

		$video.data('id', video.id);
    $video.data('title', video.title);
    $video.data('thumbnail', video.thumbnail);

    $video.find('img').attr('src', video.thumbnail );
    $video.find('h2').text( video.title );

    $('#history').append($video);
  });

});
