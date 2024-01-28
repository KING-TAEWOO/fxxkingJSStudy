/**
	Data Types
 
	  여섯개의 Primitive Type과
	  한개의 오브젝트 타입이 있다.
 	
	  자바스크립트의 타입을 구성하는 가장 작은 단위
	  Primitive 타입
	  1) Number		(숫자)
	  2) String		(문자열)
	  3) Boolean		(불리언)
	  4) undefined	(언디파인드)
	  5) null			(널)
	  6) Symbol		(심볼)
 	
	  오브젝트 타입
	  7) Object		(객체)
			Function
			Array
			Object
 */

const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('------------------');

// String 타입
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);
console.log('------------------');

/*
	 Template Literal
	 사람이 보는대로 값을 입력을 해줌
	
	 Escaping Character
	 1) newLine	-> \n
	 2) tab		-> \t
	 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
*/

const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리'
console.log(smallQutoation);

// 1왼쪽에 있는 키
const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2); // Template Literal을 사용하면 Escaping Character을 사용할 필요 없음
console.log(typeof iveWonYoung2);
console.log('------------------');

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

/*
	Boolean 타입
*/

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('------------------');

/*
	undefined
	사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
	
	직접 undefined로 값을 초기화하는건 지양해야한다
*/

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('------------------');

/*
	null타입
	
	undefined와 마찬가지로 값이 없다는 뜻이나
	JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용된다
*/

let init = null; // 개발자가 null로 인지시켜주는 경우 사용
console.log(init); // null
console.log(typeof init); // object?
// 일종의 버그임
// 실제로 개발자도 인정한 버그

// 이미 null타입이 object타입이라는 것을 기반으로 작성된 레거시 코드가 너무 많기때문에
// 변경이 되지 않고 있는 상황임
console.log('------------------');

/*
	Symbol 타입
	
	유일무이한 값을 생성할 때 사용한다
	다른 Primitive 값들과 다르게 Symbol 함수를 호출해서 사용한다
*/

const test1 = '1';
const test2 = '2';
console.log(test1 === test2); // false

const test11 = '11';
const test22 = '11';
console.log(test11 === test22); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // false
// 유일무이한 값을 가짐
console.log(typeof symbol1 + ', ' + typeof symbol2);
console.log('------------------');

/*
	Object 타입
	
	Map
	키:벨류의 쌍으로 이루어져있다.
	key:value
*/
const dictionary = {
	red: '빨간색',
	orange: '주황색',
	yellow: '노란색',
}
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);
console.log(typeof dictionary);
console.log('------------------');

/*
	Array 타입
	
	값을 리스트로 나열할 수 있는 타입
*/

const iveMembersArray = [
	'안유진',
	'가을',
	'레이',
	'장원영',
	'리즈',
	'이서'
];
console.log(iveMembersArray);
/*
	index
	
	0번부터 시작 -> 1씩 올라감
*/
console.log(iveMembersArray[0]);
console.log(iveMembersArray[3]);

iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/*
	static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다
	dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에의해 타입을 "추론"한다
		JS는 dynamic typing이다(var, let, const)
*/