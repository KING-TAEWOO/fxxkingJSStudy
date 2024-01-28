/**
 * 	Hoisting
 */

console.log('Hello');
console.log('World!');
console.log('-------------------');

//console.log(name);
//var name = '코드팩토리';
//console.log(name);

//var name;
//console.log(name);
//name = '코드팩토리';
//console.log(name);

/*
	 Hoisting은 무엇인가?
	
	 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다
	 (이동이 실제로 되는것은 아님)
*/
console.log(yuJin);
//let yuJin = '안유진';
/*
	Hoisting현상은 var키워드는 막아주지 못하는데
	let과 const는 미리 방지 가능
*/
