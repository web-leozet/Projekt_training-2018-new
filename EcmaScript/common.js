'use strict'

/*let a = 10;
console.log(a);

let [firsrName, lastName] = ["Юра", "Lena"];
alert(firsrName + ' ' + 'и' + ' ' + lastName)


let [, , title] = "hello praga world".split(" ");
alert(title);

function showName(firstName, centreName, lastName, ...rest) {
	alert(firstName + ' ' + centreName + ' ' + lastName + ': ' + rest);
}

showName("Список", "транспортных", "средств", "машина", "поезд.");
*/
const obj = {
	color: 'green',
	href: 'https',
	alt: 'new',
	target: '_blank',
	name: 'list',
}

console.log(obj);

// A(obj);

// console.log(obj);

/*function A(color = 'red', ...rest) {
	return <A style = '{color:${color}}'
	'{...rest}' /
	>
}*/

let numbers = [2, 3, 20];
let max = Math.max(...numbers);

alert(max);
document.write(max);