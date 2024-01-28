/**
 * 
 
	  Operators
 	
	  연산자
 */

/*
	 산술연산자
	 1) 덧셈
	 2) 뺄셈
	 3) 곱셈
	 4) 나눗셈
	 5) 나머지
*/
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 * (10 + 10));
console.log('------------------------');

/*
	증가와 감소
*/
let number = 1;
number++;
console.log(number);

number--;
console.log(number);
console.log('------------------------');

/*
	연산자의 위치
*/
let result = 1;
console.log(result);
result = number++;
console.log(result, number);
result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);
result = --number;
console.log(result, number);
console.log('------------------------');


/*
	숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
*/
let sample = '99';
console.log(+sample);
console.log(typeof +sample); // Number타입으로 변환

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample); // NaN -> Not a Number

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/*
	할당 연산자 (assiginment operator)
*/
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/*
	비교 연산자
	
	1) 값의 비교		(==)
	2) 값과 타입의 비교	(===)
*/
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log('***************');

console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log('***************');

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log('***************');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log('------------------------');

/*
	대소 관계 비교 연산자
*/
console.log(100 > 1);
console.log(100 < 1);
console.log('------------------------');

/*
	삼항 조건 연산자(ternary operator)
*/
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
console.log('------------------------');

/*
	논리 연산자
	
	1) &&
	2) ||
*/
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('------------------------');

// ||(or)조건은 하나만 true여도 true를 반환한다
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('------------------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log('------------------------');

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('------------------------');

/*
	단축평가 (short circuit evaluation)

	&&를 사용했을 때 좌측이 true면 우측 값 반환
	&&를 사용했을 때 좌측이 false면 좌측 값 반환
	||를 사용했을 때 좌측이 true면 좌측 값 반환
	||를 사용했을 때 좌측이 false면 우측 값 반환
*/
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');
console.log('------------------------');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('------------------------');

/*
	지수 연산자
*/
console.log(2 ** 2);
console.log(10 ** 3);
console.log('------------------------');

/*
	null 연산자
*/
let name;
console.log(name);

name = name ?? '코드팩토리';
// ??같은 경우는 좌측값이 null이거나 undefined일 때 오른쪽 값을 반환
console.log(name);

name = name ?? '아이브';
console.log(name);
// 206번째 줄에서 이미 name에 '코드팩토리'라는 값을 넣어줌
// 따라서 210번째에서 연산을 진행할 때는 name에는 이미 '코드팩토리'라는 값으로 연산이 진행되기 때문에
// 왼쪽값 name(즉, 코드팩토리)가 반환됨
console.log('------------------------');

let name2;
name2 ??= '코드팩토리';
console.log(name2);
console.log('------------------------');