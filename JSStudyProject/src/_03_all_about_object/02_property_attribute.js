/*
	Property Attribute
	프로퍼티에 속성이 추가 되는것이다
	
	property 구분
	1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
	2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
		ex) getter, setter
*/

const yuJin = {
	name: '안유진',
	year: 2003
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
console.log('-------------------------------------------------------------------');

/*
	1) value
		- 실제 프로퍼티 값
	2) writable
		- 값을 수정할 수 있는지 여부, false로 설정하면 프로퍼티 값을 수정할 수 없다
	3) enumerable
		- 열거가 가능한지 여부이다. for...in 룹 등을 사용할 수 있으면 true를 반환한다
	4) configurable
		- 프로퍼티 어트리뷰티의 재정의가 가능한지 여부를 판단한다
		- false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다
		- 단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능하다
*/
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
	name: '안유진',
	year: 2003,

	get age() {
		return new Date().getFullYear() - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear() - age;
	}
}

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
// yuJin2.height = 172;
// yuJin2['weight'] = 55;
// console.log(yuJin2);
// console.log(Object.getOwnPropertyDescriptor(yuJin2,'weight'));
console.log('-------------------------------------------------------------------');

Object.defineProperty(yuJin2, 'height', {
	value: 172,
	// writable, enumerable, configurable을 입력을 안하고 실행을 하게 되면, 기본값이 모두 false로 설정된다
	// 지금까지 배운 내용으로는 기본값이 true로 들어가게 되는데
	// Object.defineProperty를 정의하여 사용 시에 writable, enumerable, configurable을 초기화 해주지 않으면
	// 전부 false로 들어간다는 것을 알 수 있다
	writable: true,
	enumerable: true,
	configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

yuJin2.height = 180;
console.log(yuJin2);
console.log('-------------------------------------------------------------------');

/*
	writable test
*/

Object.defineProperty(yuJin2, 'height',{
	writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 172;
console.log(yuJin2); // 에러는 나지 않았지만 height는 그대로 180의 값을 유지
// writable을 false로 만들어버리면 값을 변경하지 못하도록 만듦
console.log('-------------------------------------------------------------------');

/*
	enumerable test
*/

console.log(Object.keys(yuJin2));
console.log(Object.values(yuJin2));

for(let key in yuJin2){
	console.log(key); // 열거기능이 되기 때문에 가능하다
}

Object.defineProperty(yuJin2, 'name',{
	enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log(Object.keys(yuJin2)); // name 키가 사라짐
for(let key in yuJin2){
	console.log(key); // 마찬가지로 name 키가 사라짐 - 더이상 열거가 되지 않음
}
console.log(yuJin2); // name이 출력이 안됨
// 그렇다면 name이란게 사라졌나?? -> No
console.log(yuJin2.name); // 존재하지만 다만 열거를 하지 않는것일 뿐임
console.log('-------------------------------------------------------------------');

/*
	configurable
*/
Object.defineProperty(yuJin2, 'height',{
	writable: true,
	configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
//Object.defineProperty(yuJin2, 'height',{
//	enumerable: false, // TypeError: Cannot redefine property: height
//});
Object.defineProperty(yuJin2, 'height',{
	value: 172,
});
// writable이 true면 configurable이 false더라도 value는 바꿀 수 있다
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height',{
	writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// configurable을 false로 만들면 일단 기본적으로 property attribute는 변경이 불가능하다(default 값)
// 예외1) 기본 writable이 true일 경우에는, value값을 변경할 수 있다
// 예외2) writable을 true에서 false로 바꿀 수도 있다 -> 하지만 false에서 true로 바꾸는것은 불가능!!
Object.defineProperty(yuJin2, 'height',{
	writable: true, // TypeError: Cannot redefine property: height
});