/*
	Scope
*/

var numberOne = 20;

function levelOne() {
	console.log(numberOne);
}

//levelOne();

function levelOne() {
	var numberOne = 40;

	console.log(numberOne);
}

//levelOne();

//console.log(numberOne);
console.log('-------------------------------------------------------------------');


function levelOne() {
	var numberOne = 40;
	function levelTwo() {
		var numberTwo = 99;

		console.log(`levelTwo numberTwo : ${numberTwo}`);
		console.log(`levelTwo numberOne : ${numberOne}`);
	}

	levelTwo();
	console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
// 모든 선언은 가장 가까운 scope에 있는 선언부터 활용을 하게 된다

console.log(numberOne);
// console.log(numberTwo);

/*
	JS -> Lexical Scope
		- 선언된 위치가 상위 스코프
	
	Dyanamic Scope
		- 실행한 위치가 상위 스코프
*/
var numberThree = 3;

function functionOne() {
	var numberThree = 100;

	functionTwo();
}

function functionTwo() {
	console.log(numberThree);
}

functionOne(); // global scope에서 값을 가져왔다
console.log('-------------------------------------------------------------------');

var i = 999;
for (var i = 0; i < 10; i++) {
	console.log(i);
}
console.log(`i in global scope : ${i}`);
// var키워드를 썼을 때 스코프가 새로 생기는 경우는 함수를 선언했을 때만!!!
// for, if, while은 var 키워드를 썼을 때 새로운 스코프를 만들어내지 않는다 
console.log('-------------------------------------------------------------------');

i = 999;
for (let i = 0; i < 10; i++) {
	console.log(i);
}
console.log(`i in global scope : ${i}`);
// let, const 키워드를 사용을 하면, 함수에서 뿐만 아니라 for, if, while같은 블록레벨 스코프도 만들어낼 수 있다

/*
	var 키워드는 함수 레벨 스코프만 만들어낸다.
	
	let, const 키워드는 함수레벨 스코프와 블록레벨 스코프를 만들어낸다.
*/
