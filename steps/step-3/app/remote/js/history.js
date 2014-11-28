  
$(document).ready(function(){
  
  // Toggle Recent Videos
  $(".tabs button").click(function(){
    if( $(this).hasClass('recent') ) {

      $(".video-list").hide();
      $("#history").show();

      $(this).removeClass('recent');

      getRecents();
    }
    else {
      $(".video-list").hide();
      $("#results").show();

      $(this).addClass('recent');
    }
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
