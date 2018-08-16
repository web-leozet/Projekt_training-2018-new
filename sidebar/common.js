var button = document.querySelector('.btn');
var sidebar = document.querySelector('.sidebar');

button.addEventListener('click', function (e) {
	sidebar.classList.toggle('is-hidden')
}, false);