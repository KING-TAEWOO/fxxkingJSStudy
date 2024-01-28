/*
	copy by value		값에 의한 전달
	copy by reference	참조에 의한 전달
	
	1) 기본적으로 모든 primitive값은 copy by value다
	2) 객체는 copy by reference다
*/

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);
console.log('-------------------------------------------------------------------');

clone += ' 안유진 입니다';
console.log(original);
console.log(clone);
// 값을 그대로 가져오는 형태 1)번
console.log('-------------------------------------------------------------------');


let originalObj = {
	name: '안유진',
	group: '아이브'
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('-------------------------------------------------------------------');

originalObj['group']='코드팩토리';
console.log(originalObj);
console.log(cloneObj);
// 레퍼런스를 그대로 가져오는 형태 2)번

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
	name: '최지호',
	group: '코드팩토리'
};
cloneObj = {
	name: '최지호',
	group: '코드팩토리'
};
console.log(originalObj === cloneObj); // 오브젝트 안에 값이 같다고해서 같은게 아니다
console.log('-------------------------------------------------------------------');


const yuJin1 = {
	name: '안유진',
	group: '아이브'
};

const yuJin2 = yuJin1;
const yuJin3 = {
	name: '안유진',
	group: '아이브'
}
console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false
console.log('-------------------------------------------------------------------');


/*
	Spread Operator
	
	Array에만 존재하는게 아니라 Object에서도 존재
*/
const yuJin4 = {
	...yuJin3
};
console.log(yuJin4); // Spread Operator은 Copy By Value가 된다
console.log(yuJin4 === yuJin3);

const yuJin5 = {
	year: 2003, // Spread Operator에서 추가가 가능 But 순서가 중요하다
	...yuJin3
};
console.log(yuJin5);

const yuJin6 = {
	...yuJin3,
	name: '코드팩토리'
};
console.log(yuJin6);

const numbers = [1, 3, 5];
const numbers2 = [
	...numbers,
	10
];
console.log(numbers2);