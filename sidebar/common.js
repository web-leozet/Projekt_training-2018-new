

var button = document.querySelector('.btn');
var sidebar = document.querySelector('.sidebar');

button.addEventListener('click', function (e) {
	sidebar.classList.toggle('is-hidden')
	button.classList.toggle('on')
}, false);


/*var button = document.querySelector('.btn');
var sidebar = document.querySelector('.sidebar');

button.onclick = function () {
	console.log(sidebar);
	sidebar.classList.toggle('is-hidden')
};*/

var linkOne = document.querySelector('.one');
linkOne.onclick = function () {
	alert('Link 1');
}





