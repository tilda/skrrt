var view = document.getElementById('inner-view')
var loader = new Nanobar()
const ws = new WebSocket("ws://vrrr.strodl.co/ws");
ws.onmessage = m => {
    const data = JSON.parse(m.data)
    if(data.op == "frame") view.src = data.d.stream
}
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
