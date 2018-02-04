var addElem = document.getElementById('addElem');
var list = document.getElementById('list');
var listItems = list.getElementsByTagName('li');

addElem.addEventListener('click', function (e){
    var element = document.createElement('li');
    element.innerText = 'item ' + listItems.length;
    list.appendChild(element);
});