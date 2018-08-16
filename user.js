/*window.onload = logHandler;


	function logHandler() {
		var p1 = document.getElementById("p1");
		var p2 = document.getElementById("p2");
		var a = document.getElementsByClassName("log")[0];


		p1.onclick = function () {
			alert("Проверка");
		};

		p2.onclick = myFint;

	

	}

	function myFint() {
			alert('Это снова Я');
		}*/


/*alert('Hello World');
document.write("Hello World");*/

/*start*/
/*console.log(a);
var a = 10;
var b = "Hello";
document.write(a);
document.write("<br/>");
document.write(b);*/
/*start*/
/*var a = "10";
var b = 2;
console.log(a+b);
console.log(a*b);
console.log(a/b);
document.write(a+b+"<br/>");
document.write(a*b+"<br/>");
document.write(b/a*20);
// document.write(a/b);*/
/*start*/
/*var a = true;
var b = false;
console.log(a);
console.log(b);*/
/*start*/

/*var a = prompt('Введите значение', 'сюда');
var b = prompt('Введите значение', 'сюда');
var c = prompt('Введите значение', 'сюда');
console.log(a);
console.log(b);
console.log(c);
document.writeln(a);
document.writeln(b);
document.writeln(c);*/
/*start*/

/*var conf = confirm('Вы уверенны что хотите покинуть страницу?');
document.write(conf);*/

/*var x = +prompt('Введите первое значение', '0');
var y = +prompt('Введите второе значение', '0');
var result = x + y;
if (x >= 0) {
} 
else if (y >=0) {
	expression
} else {
	alert("Вы ввели не число!");
}
document.write(x + '<br/>');
document.write(y + '<br/>');
document.write("Итого:" + result);
console.log(result);*/

/*start*/

/*var a = 10;
console.log(a++);
var b = 10;
console.log(++b);*/

/*start*/

/*var age = +prompt("Введите свой возраст");
var pen = +prompt("Введите пенсионный возраст");

var maxAge = 120;
if (age < pen) {
	alert('Вам ещё рано на пенсию');
}else if (age < maxAge) {
	alert('Пора задуматься');
} else {
	alert('Люди столько не живут');
} */

/*start*/

/*var number = +prompt("Введите число 1 или 2:");
switch(number) {
	case 1:	
				alert('Вы ввели число один');
				alert('Вы молодец!');
		break;
	case 2:
       	alert('Вы ввели число два');
       	alert('Вы молодец!');
		break;
		default:
			alert('Ошибка');
		}*/

		/*????????????????????????????????????????*/

/*var a = +prompt('Число А');
var b = +prompt('Число Б');
var max = 0;

max = (a > b) ? a : b;
console.log(max);
document.write('Число А : ' +  a + '<br/>');
document.write('Число Б : ' + b + '<br/>');
document.write('Большее число: ' +  max);

/*??????????????????????????????????????????*/

/*var a = +prompt('Введите промокод');
var b = 100;

var c = 0;
var d = 0;

max = 0;

max = (a > b) ? (c = a) : (d = a);
console.log(c);
console.log(d);
document.write('Промо : ' + max + '<br/>');*/

/*????????????????????????????????????*/

/*var shop = +prompt('Ведите количество товарных единиц:');
var price = 20;
var discount = 0.75 
var cost;

cost = shop >= 10 ? shop * price * discount : shop*price;
document.write('Сумма к оплате: ' + cost + '<br/>');
var costss = cost / shop;
document.write('Цена за штуку: ' + costss);*/

/*?????????????????????????????????????????????????????*/

/*var counter = 0;

while (counter < 10) {
	counter++;
	console.log(counter);
	document.write('Итерация № ' + counter + '<br/>');
}*/
/*var counter = 0;

while (counter < 10) {
	counter++;
	console.log(counter);
	document.write('Итерация № ' + counter + '<br/>');
	break;
}*/

/*var counter = 0;

while (counter < 10) {
	counter++;
	console.log(counter);
	document.write('Итерация № ' + counter + '<br/>');
	continue;
}*/

/*????????????????????????????????????*/
/*Угадайте цвет с 5 попыток*/


/*var str = 'Угадайте цвет с пяти попыток. ';

var maxTab = 5;
var counter = 0;
var color = "red";

while (counter < maxTab) {
	counter++;

 value = prompt(str + 'Попытка № ' + counter, "");

 if (value == null) {
 	break;
 }
 if (value != color) {
 	str = 'Вы не угадали. ';
 	continue;
 }


  document.write('Поздравляем! Вы угадали цвет с ' + maxTab + ' попытки.');
   break;
}

document.write('<p>Конец игры');*/

/*???????????????????????????????????????????????????*/

/*var counter = prompt('Введите число');
var factorial = 1;

document.write('Факториал числа ' + counter +  " = ");

do {
	if (counter == 0 && counter == null) {
		factorial = 1;
		break;
	}

   factorial = factorial * counter;
   counter = counter - 1;


} while (counter > 0);

document.write(factorial);*/

/*??????????????????????????????????????????*/

/*function addChess(argument) {
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			if ((i%2==0 && j%2==0)|| (i%2!=0 && j%2!=0)) {
				document.write("<img src='img/white.png' width = '50' height = '50' />");
			} else {
				document.write("<img src='img/black.png' width = '50' height = '50' />");
			}
		}
			document.write('<br/>');
	}

}

addChess();*/

/*????????????????????????????????????????????????????????*/


/*var arr = Array(5);
console.log(arr);

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

console.log(arr);

arr[4] = 'Hello';

console.log(arr);

arr[10] = 'End';
console.log(arr);

arr.length = 2;
console.log(arr);
arr.length = 20;
console.log(arr);

arr.length = 5;
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i] + '<br/>');
}

arr[2] = 11;
document.write(arr);*/


/*?????????????????????????????????????????????????????*/

/*var arr = ['January','February','March',
           'April','May','June','July','August',
           'September','October','November','December'];

document.write("<ul><li>");
var res = arr.join("</li><li>");
document.write(res);

document.write("</li></ul>");*/

/*?????????????????????????????????????????????????????*/

/*var arr = [1,2,3,4,5,6,7,8,9];

arr.splice(0,1);
console.log(arr);*/

/*???????????????????????????????????????????????????*/

/*var numericSort2 = function(a,b){
	return a - b;
}

var numericSort = function (a, b) {
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
	}
}


var arr = [1,2,32,12,15,50,150,370,25,0,8,-5];

arr.sort(numericSort);
console.log(arr);

var str = arr.join(" , ");
console.log(str);

var spt = str.split(', ');

console.log(spt);*/



/*var topss = Array(10);
console.log(topss);
var topr = topss.join('hello ');
document.write(topr);*/

/*???????????????????????????????????????????????????*/




/*var arr = ['January','February','March','April','May','June'];

var sast = arr.push("[1,2,3,4,5,5]");
console.log(sast);
document.write(arr.join(', '));*/

/*?????????????????????????????????????????????????*/
/*??????????????????????????????????????????????????*/

 /*function MyFirstFanction() {
 	document.write("<p> Привет Это Я.");
 	document.write("<p> Привет Это Она.");
 	document.write("<p> Привет Это Они.");
 	document.write("<hr/>");
 }

MyFirstFanction();
MyFirstFanction();
MyFirstFanction();*/

/*???????????????????????????????????????????????????????????*/


// ОЧЕРЕДЬ


/*?????????????????????????????????????????????????????????????????*/


/*var name;
var sname;
var age;

function asc() {
	name = prompt('Введите своё имя');
	sname = prompt('Введите свою фамилию');
	age = prompt('Введите свой возраст');
}

function say() {
	document.write("Имя: " + name + "<br/>");
	document.write("Фамилия: " + sname + "<br/>");
	document.write("Возраст: " + age + "<br/>");
	document.write("<hr/>");
}



do {
	asc();
	say();
	var repeater = confirm('Пройти заполнение ещё раз?');
} while (repeater);*/


// КОНЕЦ ПРОГРАММЫ


/*?????????????????????????????????????????????????????????????????????*/
/*??????????????????????????????????????????????????????????????????????*/


// Найти максимальное числовое значение

/*function max() {
	
	var maxValue = Number.NEGATIVE_INFINITY;   
	// Или var maxValue = arguments[0];

	for (var i = 0; i < arguments.length; i++) 
		if (arguments[i] > maxValue)
			maxValue = arguments[i];
		return maxValue;
	}

	var res = max(10,20,30,100,-50,200,500,1000,20000,40000);

	document.write('Максимальное значение одного из аргументов функции = ' + res);*/



//    РЕКУРСИЯ

/*function f(counter) {
	counter--;
	document.write("<p style = 'background-color: green; color: silver; padding-top: 5px'> Первая половина метода: " + counter);

	if (counter != 0) 
		f(counter);
	document.write("<p style = 'background-color: yellow'> Вторая половина метода: " + counter);
}

f(5);*/

/*????????????????????????????????????????????????????????????????????*/



// ФАКТОРИАЛ


/*var input = prompt('Введите число: ');
input = parseInt(input);


function factorial(x) {
	if (x <= 1)
		return 1;
	return x * factorial(x - 1);
}

document.write("Факториал числа: " + input + " = " + factorial(input));*/


/*???????????????????????????????????????????????*/

// CALL BACK Function

/*var add = function (a,b) {
	return a + b;
}

var sub = function (a,b) {
	return a * b;
}

function show(cb,a,b) {
	var result = cb(a,b);
	document.write('<p>' + result);
}

show(add,5,5);
show(sub,5,5);*/


/*???????????????????????????????????????????????????*/


//  Конструктор Домика


/*var dom = new Object();

dom.createRoof = function () {
	document.write("<img src = 'img/dom/Roof.gif'>");
};
dom.createFirstFloor = function () {
	document.write("<img src = 'img/dom/FirstFloor.gif'>");
};
dom.createSecondFloor = function () {
	document.write("<img src = 'img/dom/SecondFloor.gif'>");
};
dom.createBasement = function () {
	document.write("<img src = 'img/dom/Basement.gif'>");
};

dom.createRoof();
dom.createSecondFloor();
dom.createFirstFloor();
dom.createFirstFloor();
dom.createFirstFloor();
dom.createBasement();
*/
/*????????????????????????????????????????????????*/


//  Конструктор DOM ( Проверка наличия свойства у объекта)


/*var house = {
	createRoof: "<img src = 'img/dom/Roof.gif'/> <br/>",
	createSecondFloor: "<img src = 'img/dom/SecondFloor.gif'/> <br/>",
	createFirstFloor: "<img src = 'img/dom/FirstFloor.gif'/> <br/>",
	createBasement: "<img src = 'img/dom/Basement.gif'/> <br/>"
}

// Удаление свойства объекта

if ("createSecondFloor" in house) {
	delete house.createSecondFloor;
}

// Вывод содержимого на екран

for (prop in house) {
	document.write(house[prop]);
}*/




/*????????????????????????????????????????????????????*/

// this для объектов

/*var human = {
	firsrName: "Yra",
	lastName: "Chab",
	age: "25",
	occupation: "<p><img src='img/19285.jpg'>",

// Метод show

show: function () {
	document.write("<p>firsrName: " + this.firsrName + "<br/>");
	document.write("<p>lastName: " + this.lastName + "<br/>");
	document.write("<p>age: " + this.age + "<br/>");
	document.write("<p>occupation: " + this.occupation + "<hr/>");
},

// Метод chengeWork

chengeWork: function (occupation) {
	this.occupation = occupation;
}

}



human.show();
human.chengeWork("<p><img src='img/Beer.png'>");
human.show();
*/

/*???????????????????????????????????????????????????????*/



// Конструкция for in  ( перебор значения свойств в объекте)

/*var arr = [
{
	name: "Olga",
	age: "25",
},
{
	name: "Yra",
	age: "30",
	lang: "ukr,rus,ing",
},
{
	name: "Jon",
	age: "45",
}
];



// Выводит как объекты
console.log(arr);



// Выводит как массив

for (var i = 0; i < arr.length; i++) {
	for (field in arr[i]) {
		console.log(arr[i] [field]);	
	}

	console.log('\n');

}
*/

/*????????????????????????????????????????????????????????????*/


// Конструктор Date()

/*var myDate = new Date().getFullYear();
document.write('Текущая дата и время: ' + myDate);
console.log(myDate);*/


/*?????????????????????????????????????????????????*/

// Конструктор new String

/*var objectStr = new String('Деструктеризация');

for (i in objectStr) {
	console.log(objectStr[i]);
}
console.log(objectStr);*/


/*var a = [1,2,3,4,5];

var b = a.reverse();
console.log(b);*/

/*????????????????????????????????????????????*/


// РЕВЕРС ОТ ДИМЫ ИВЧЕНКО


/*var a = [1,2,3,4,5,6,7,-5,8,9,10,-20];
var tmp;
for (var i = 0; i < a.length /2; i++) {
	tmp = a[a.length-1-i];
	a[a.length-1-i] = a[i];
	a[i] = tmp;
}	
console.log(a);
console.log(tmp);*/

/*arr = [1,2,3]

a = arr.reverse() // [ 3, 2, 1]
// console.log(a)
for(var i=0; i<a.length; i++) {
  console.log(a[i]) // 3, 2, 1
}
console.log(a);*/

/*???????????????????????????????????????????????????????????????????*/


// ШАХМАТЫ ОТ ДИМЫ ИВЧЕНКО


/*var a = [];
var table = Array(10);

for (var i = 0; i < table.length; i++) {
	table[i] = Array(10);
}


for (var row = 0; row < table.length; row++) {
	for (var col = 0; col < table[row].length; col++) {
		if ((row + col) % 2 == 1) 
			table[row][col] = "<img src='img/black.png' width = '50' height = '50'/>";
		else
			table[row][col] = "<img src='img/white.png' width = '50' height = '50'/>";
	}

}


for (var row = 0; row < table.length; row++) {
	for (var col = 0; col < table[row].length; col++) {
		document.write(table[row][col]);
	}
	document.write("<br>");
}
*/

/*?????????????????????????????????????????????????????????????????????????????????????/*/

/*function Rectangle(w,h) {
	this.width = w;
	this.height = h;
}

Rectangle.prototype.getSum = function () {
	return this.width + this.height;
}

 Rectangle.prototype.name = "RECTANGLE";




var rect = new Rectangle(100, 50);
var rect2 = new Rectangle(50, 50);
document.write("Площадь треугольника: 1 " + rect.name + '<br/>');
document.write("Площадь треугольника: 2 " + rect2.name + '<br/>');
document.write("Площадь треугольника: 1 " + rect.getSum() + '<br/>');
document.write("Площадь треугольника: 2 " + rect2.getSum() + '<br/>');*/


/*??????????????????????????????????????????????????????????????*/


//  Наследование

/*function Human(name) {
	this.name = name;
	this.talk = function () {
		document.write("Hello My Name is  " + this.name + '<br/>');
	}
}
Human(name);

function Worker(name) {
	this.name = name;
	this.speciality = "Software developer";
}

var human = new Human("name");
Worker.prototype = human;

var Andrew = new Worker("Andrew");
var Yurii = new Worker("Yurii");

Andrew.talk();
Yurii.talk();*/



//  typeof  проверка по типу данных


/*function PrintMessage(message) {
	if (typeof message != "string") 
		alert('Вы ввели не строку');
	 else 
		document.write(message);
	
}
PrintMessage([1,2,3,]);
PrintMessage("kjshdkahd");*/




//   События


/*function MyClick() {
	alert('Внимание!!!\n---------------\nКнопка нажата!\nНадихнувшись недавньою погодою, ми проаналізували, що походи із парасолею');
}*/





//  Самовызывающая функция


/*(function () {
	var message = "Hello Message 1";
	alert(message);
})();

//  С передачей аргументов

(function (a, b) {
	alert("Сумма: " + (a + b));
})(10,20);*/


/*var paragraf = document.getElementById("output");
var huperLink = document.getElementById("input");


paragraf.innerHTML = '<span>Привет я span <br/><b>Привет я жирный</b> </span>';
huperLink.innerText = 'Привет я гиперссылка. Нажми меня!!!';*/



/*var s = Snap();
var bigCircle = s.circle(150, 150, 100);*/


/* function sum (x,y) {
 	y = 26.3;
	return x * y;
}

(function function_name(argument) {
	alert(sum(150));
})()*/

/*var timer;
window.onload = function () {
	timer = window.setTimeout(showSet, 5000);
}


function showSet() {
	alert("Бинго!!! ");
}

function clearss() {
	clearTimeout(timer);
	console.log(timer);
}*/


/*	setTimeout(function () {
		alert("Hello World");
	}, 10000);*/





	// Location


/*	(function function_name(argument) {
		document.write("<br/>");
		document.write("Location =  " + document.location + "<br/>");
		document.write("Protocol =  " + document.location.protocol + "<br/>");
		document.write("Host =  " + document.location.host + "<br/>");
		document.write("Pathname =  " + document.location.pathname + "<br/>");
		document.write("Search =  " + document.location.search + "<br/>");
	})();*/









/*	window.onload = function () {



		var counter = 0;
		var intervalHandler;

		function count() {
			document.getElementById("output").innerHTML = counter;
			counter++;
		}



		document.getElementById("startButton").onclick = function () {
			intervalHandler = setInterval(count, 5);
		}

		document.getElementById("stopButton").onclick = function () {
			clearInterval(intervalHandler);
		}


	}*/


	// Ширина и высота окна браузера

/*	window.onload = function () {
		alert("Ширинa окна : " + screen.width + " см." + "\n" + "Высота окна: " + screen.height + " см.");
	}*/














	function createNewChild() {
		var list = document.getElementById("list");
		var str = document.createElement("li");
		console.log(str);
		str.innerHTML = "NewLastElement";
		str.setAttribute("style", "color:blue; font-Size:25px");
		list.appendChild(str);
	}

	function removeLastChild() {
		var list = document.getElementById("list");
		var str = list.lastChild;
		console.log(str);
		if (str != null) {
			list.removeChild(str);
			console.log(list);
		}else
		alert("No Last Element");
	}

	function removeFirstChild() {
		var list = document.getElementById("list");
		console.log(list);
		var str = list.firstChild;
		console.log(str);
		if (str != null ) {
			list.removeChild(str);	
		}else
		alert("No First Element");

	}

	function createChildAtStart() {
		var list = document.getElementById("list");
		var str = document.createElement("li");
		str.innerHTML = "FirstNewStart";
		if (list.firstChild != null || list.firstChild == null) {
			list.insertBefore(str, list.firstChild);
			str.setAttribute("style", "color: red; font-Size:25px");
		}
	}


/*		var a = new String("Hello World");
		console.log(a);
		var b = "Hello";
		console.log(b);

		document.write("<br/>");*/



// Регулярки

/*var text = "Строка 123 для те385кста как 899при569мер";
var pattern = /\d\d\d/g;
var result = text.replace(pattern, "");

console.log(result);

document.write(result);*/


document.write("<br/>");
document.write("<br/>");


var pattern = /\d\d\d/;

var input = "Hello World";
if (pattern.test(input)) {
	document.write("Тест пройден " + input + "  соответствует шаблону <br/>");
} else {
	document.write("Тест не пройден " + input + "  не соответствует шаблону <br/>");
}

input = "123";

if (pattern.test(input)) {
	document.write("Тест пройден " + input + "  соответствует шаблону <br/>");
} else {
	document.write("Тест не пройден " + input + "  не соответствует шаблону <br/>");
}


console.log("hello");


 /*   var vm = new Vue({
        el: '#app',
        data: {
            price: 5.00,
            quantity: 2
        },
        computed: {
            totalPriceWithTax() {
                return this.price * this.quantity * 1.03
            }
        }

    })*/













/*
let data = { price: 5, quantity: 2 }

let internalValue = data.price // начальное значение

Object.defineProperty(data, 'price', { // назначим геттер и сеттер только свойству price

    get() { // геттер
        console.log(`I was accessed ${internalValue}`)
    },

    set(newVal) { // сеттер
        console.log(`I was changed`)
    }
})
data.price // при обращении к свойству вызывается геттер
data.price = 20 // при установке свойства вызывается сеттер*/


// DOM  Learn JS


	// window.open("https://booking.uz.gov.ua/authorization/");
	






/*	(function () {
		document.body.style.backgroundColor = 'red';
		alert("Body стал красным,а сейчас вернёться обратно!");
		document.body.style.backgroundColor = '';
	})();*/