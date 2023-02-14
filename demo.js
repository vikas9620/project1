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
*/
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  var editBtn = document.createElement('button');
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);

  var searchBox = document.createElement('textarea');
  searchBox.textContent = "Enter Description";
  searchBox.rows="1";
  searchBox.className = 'description';
  searchBox.id = 'info';
  li.appendChild(searchBox);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}