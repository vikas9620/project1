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
*/

var li = document.getElementsByTagName("li")
li[4].style.color = "yellow"

var items = document.getElementsByClassName("list-group-item")
for (var i=0; i<items.length; i++){
    items[i].style.fontWeight = "bold"
    items[i].style.color = "lightgreen"
}



