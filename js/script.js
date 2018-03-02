var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola']

console.log(femaleNames);

var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

console.log(maleNames);

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

console.log(allNames);

var newName2 = 'Asia';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

console.log(allNames);