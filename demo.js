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

*/
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

