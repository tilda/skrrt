var view = document.getElementById('inner-view')
var loader = new Nanobar()

loader.go(50)
view.src = 'https://vrrr.strodl.co/woosh.jpg?_' + new Date().getTime()
loader.go(60)
loader.go(80)
loader.go(100)
