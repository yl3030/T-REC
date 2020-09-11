// 影片播放
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player("#banner-video", {
		events: {
			onReady: yt.onPlayerReady, //當播放器準備就緒時執行
			onStateChange: yt.onPlayerStateChange, //當播放器狀態改變時執行
		},
	});
}
function onPlayerReady(event) {
	event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
		done = true;
	}
}
function stopVideo() {
    player.stopVideo();
}

$("#video-cont")
	.children(".modal-dialog")
	.children(".modal-content")
	.children(".modal-header")
	.children(".close")
	.click(stopVideo());
