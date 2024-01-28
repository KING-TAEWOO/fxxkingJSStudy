/*
	function -> 함수

*/

/*
	만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 반환받고 싶다면
	어떻게 작성할까???
*/

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString()); // 3이라는 숫자로 적용하게 되면 3으로 바꿈
// 하지만 같은 내용의 코드가 반복됨!!! 좋지않음

console.log('--------------------');

/*
	개발자의 수칙
	DRY
	D -> Don't
	R -> Repeat
	Y -> Yourself
*/

function calculate() {
	console.log((2 * 10 / 2 % 3).toString());
}

//calculate();

function calculate(number) {
	console.log((number * 10 / 2 % 3).toString());
}
calculate(4);
/*
	함수에서 입력받는 값에대한 정의를 Parameter라고 한다
	실제 입력하는 값은 argument라고 한다
*/
calculate(5);

function multiply(x, y) {
	console.log(x * y);
}
multiply(2, 4);

function multiply(x, y = 10) {
	console.log(x * y);
}
multiply(2, 4);
multiply(2);

console.log('--------------------');

/*
	반환받기
	return 받기
*/

function multiply(x, y) {
	return x * y;
}
const result1 = multiply(2, 4);
console.log(result1);
const result2 = multiply(4, 5);
console.log(result2);


/*
	Arrow 함수
*/
const multiply2 = (x, y) => {
	return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y; // multiply2와 multiply3와 같은 것
// 훨신 간결하다
console.log(multiply3(4, 5));

const multiply4 = x => x * 2;
console.log(multiply4(3));

const multiply5 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
	return function(y) {
		return function(z) {
			return `x: ${x}, y: ${y}, z: ${z}`;
		}
	}
}
console.log(multiply6(3)(4)(5));
console.log('--------------------');

const multiplyTwo = function(x, y) {
	return x * y;
}
console.log(multiplyTwo(4, 5));
console.log('--------------------');

const multiplyThree = function(x, y, z) {
	console.log(arguments); // arguments 키워드임
	return x * y * z;
}
console.log(multiplyThree(4, 5, 6));
// [Arguments] { '0': 4, '1': 5, '2': 6 }
// 파라미터를 순서대로 0번째, 1번째, 2번째로 표현
console.log('--------------------');

const multiplyAll = function(...arguments) { // ...arguments는 무한히 parameter를 받을 수 있음
	return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));
console.log('--------------------');

// immediately invoked function 즉시 함수 실행하는법
(function(x, y){
	console.log(x * y);
})(4, 5)
console.log('--------------------');

console.log(typeof multiply);
console.log(multiply instanceof Object);
// instanceof -> 왼쪽 값이 오른쪽과 같은 타입인가?
