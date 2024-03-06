window.document.write("olá mundo²<br>")
var p1 = document.getElementsByTagName('p')[0];//primeiro paragrafo que me ocorreu
window.document.write(p1.innerText)//apenas o texto
window.document.write(p1.innerText)//vem o texto com formatação HTML
p1.style.color = 'blue'

var d = document.getElementById('messagem1')
d.style.background = 'black'

var d2 = document.getElementsByName('msg2')[0]
d2.style.color = 'red'

var d3 = document.getElementsByClassName('msg3')[0]
d3.style.color = 'yellow'

var d3c = document.querySelector('div.msg3')
alert(document.querySelector('div.msg3'))
d3c.style.color = 'green'