var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
   console.log("yyyy");
   player = new YT.Player('banner-video', {
	   videoId: '1n94tWxNcZ4',
	   events: {
		   'onReady': onPlayerReady
	   }
   });
}


$("#youtubeWrap").children(".close-btn").click(function(){
	$(this).parents("#mediaOverlay").hide();
	player.stopVideo();
});

// function pp() {
//    player.stopVideo();
// }

function onPlayerReady(event) {
 

