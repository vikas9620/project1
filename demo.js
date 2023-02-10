console.log(document.domain)
console.log(document.URL)
console.log(document.title)


//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)
//console.log(document.all[10])
//document.all[10].textContent = "hello"
//console.log(document.forms)
//console.log(document.links)
/*var headerTitle=document.getElementById('main-header')
headerTitle.style.borderBottom = "1px solid black"



var header = document.getElementById('title')
console.log(header)
header.style.fontWeight = "bold"
header.style.color = "lightgreen"


var li = document.getElementsByTagName("li")
li[4].style.color = "yellow"

var items = document.getElementsByClassName("list-group-item")
for (var i=0; i<items.length; i++){
    items[i].style.fontWeight = "bold"
    items[i].style.color = "lightgreen"
}


var secondItem = document.querySelector(".list-group-item:nth-child(2)")
secondItem.style.backgroundColor = "green"
var thirdItem = document.querySelector(".list-group-item:nth-child(3)")
thirdItem.style.display = "none"


var items = document.querySelectorAll("li")
items[1].style.color ="green"
var odd = document.querySelectorAll("li:nth-child(odd)")
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green"
}
*/
var itemList = document.querySelector('#items')
itemList.parentElement.style.backgroundColor = "green"
console.log(itemList.parentElement.parentElement.parentElement)


itemList.children[1].style.backgroundColor = "yellow"

itemList.firstElementChild.textContent = 'hello world item 1'

itemList.lastElementChild.textContent = 'hello 4'

itemList.previousElementSibling.style.color = "green"

var newDiv = document.createElement("div")

newDiv.className = "hello"
newDiv.id = 'hello1'

newDiv.setAttribute("title", "hello div")

var newDivText = document.createTextNode('hello world')

newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
var h2 = document.querySelector('items h2')
newDiv.style.fontSize = "30px"
container.insertBefore(newDiv, h1)
