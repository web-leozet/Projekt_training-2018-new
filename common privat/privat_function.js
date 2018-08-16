

// функция для получения елементов страницы по ID

var get = function (id) {
	return window.getElementById(id);
}


// location



	(function function_name(argument) {
		document.write("<br/>");
		document.write("Location =  " + document.location + "<br/>");
		document.write("Protocol =  " + document.location.protocol + "<br/>");
		document.write("Host =  " + document.location.host + "<br/>");
		document.write("Pathname =  " + document.location.pathname + "<br/>");
		document.write("Search =  " + document.location.search + "<br/>");
	})();




// Ширина и высота окна браузера

	window.onload = function () {
		alert("Ширинa окна : " + screen.width + " см." + "\n" + "Высота окна: " + screen.height + " см.");
	}