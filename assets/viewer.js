var view = document.getElementById('inner-view')
var loader = new Nanobar()

/* heating why the fuck do you need to use ws smh */
// var ws = new WebSocket('wss://vrrr.strodl.co/ws')
import imageURL from './oops.png'

var audio = document.getElementById('opus-stream')

audio.src = 'https://vrrr.strodl.co/woosh.opus?_' + new Date().getTime()

$('img').on('load', function() {
        loader.go(100)
})
loader.go(50)
view.src = 'https://vrrr.strodl.co/woosh.jpg?_' + new Date().getTime()
$('img').on('error', function() {
        $(this).attr('src', imageURL)
	$('.oopsie-woopsie').css('visibility', 'inherit')
})
loader.go(75)
function updateVideo() {
	view.src = 'https://vrrr.strodl.co/woosh.jpg?_' + new Date().getTime()
}
setInterval(updateVideo, 800)
