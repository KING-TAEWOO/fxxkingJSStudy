/**
 * Loops
 
	1) for
	2) while
 */

for (let i = 0; i < 10; i++) {
	console.log(i);
}
console.log('--------------------');

for (let i = 10; i > 0; i--) {
	console.log(i);
}
console.log('--------------------');

for (let i = 0; i < 3; i++) {
	for (let j = 3; j > 0; j--) {
		console.log(i, j);
	}
}
console.log('--------------------');

let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
	for (let j = 0; j < side; j++) {
		square += '*';
	}
	square += '\n';
}
console.log(square);
console.log('--------------------');

/*
	for...in 루프
*/
const yuJin = {
	name: '안유진',
	year: 2003,
	group: '아이브'
}

for (let key in yuJin) { // 키 값을 받을 수 있음
	console.log(key); // for in루프를 통해 오브젝트에서는 키값을 받음
}
console.log('--------------------');

const iveMembersArray = [
	'안유진',
	'가을',
	'레이',
	'장원영',
	'리즈',
	'이서'
];

for (let key in iveMembersArray) {
	console.log(key); // for in루프를 통해 리스트(array)에서는 인덱스값을 받음
	console.log(`${key}: ${iveMembersArray[key]}`);
}
console.log('--------------------');

/*
	for...of 루프
	
	루핑을 할 수 있는 값들에서만 사용 가능함
*/
for (let value of iveMembersArray) {
	console.log(value);
}

/*
	for...in : index값을 가져올 때
	for...of : 값(value)값을 가져올 때
*/
console.log('--------------------');

/*
	While loop
*/
let number = 0;
while (number < 10) {
	number++;
}
console.log(number);

/*
	do...while
*/
number = 0;
do {
	number++;
} while (number < 10);
console.log(number);
console.log('--------------------');

/*
	break
*/
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break;
	}
	console.log(i);
}
console.log('--------------------');

number = 0;
while (number < 10) {
	if (number === 5) {
		break;
	}
	number++;
	console.log(number);
}
console.log('--------------------');

/*
	continue
*/
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		continue;
	}
	console.log(i);
}

number = 0;
while (number < 10) {
	number++;

	if (number === 5) {
		continue;
	}
	console.log(number);
}
console.log('--------------------');

