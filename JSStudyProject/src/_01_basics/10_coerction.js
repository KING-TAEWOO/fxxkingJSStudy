/*
	타입 변환
	
	Type Conversion
	1) 명시적(해당 타입을 이 타입으로 바꿔라 -> 약간 강제적)
	2) 암묵적
*/
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
console.log('--------------------');

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2); // String에는 곱한다는 개념이 없기 때문에 암묵적으로 Number로 변환이되어 계산
console.log('98' - 2); // 위와 마찬가지
console.log('--------------------');

/*
	명시적 변환 추가내용
*/
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());
console.log('--------------------');

/*
	숫자 타입으로 변환
*/
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +1);
console.log('--------------------');

/*
	Boolean 타입으로의 변환
*/
console.log(!!'');
// String값 같은 경우 Boolean타입으로 변환을 했을 때 값이 있냐(true), 없냐(false)로 반환

console.log(!!0); // 0은 false
console.log(!!'0'); // 0이라는 String은 true
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
// 아무것도 들어있지 않은 오브젝트의 경우, boolean값으로 변환 시 무조건 true가 나옴
console.log(!![]);
// Array도 마찬가지로 값이 있던 없든, 위와 같음

/*
	false를 반환하는 경우
	1) 아무 글자도 없는 String
	2) 값이 없는 경우
	3) 숫자 0일 때
*/