/*
	Immutable Object
*/
const yuJin = {
	name: '안유진',
	year: 2003,

	get age() {
		return new Date().getFullYear - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear - age;
	}
}

console.log(yuJin);

/*
	Extensible
	확장이 가능한지 여부를 설정할 수 있음
*/
console.log(Object.isExtensible(yuJin)); // 객체 생성시에 확장 여부 기본값은 true
yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));
yuJin['groupName'] = 'ive';
console.log(yuJin); // groupName이라는 property는 생성되지 않음(에러는 던져지지 않음)

delete yuJin['position'];
console.log(yuJin); // 삭제는 할 수 있다. 값을 추가할수만 없다
console.log('-------------------------------------------------------------------');

/*
	Seal
	봉인
*/
const yuJin2 = {
	name: '안유진',
	year: 2003,

	get age() {
		return new Date().getFullYear - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear - age;
	}
}
console.log(yuJin2);
console.log('isSealed?? ' + Object.isSealed(yuJin2)); // 봉인이 되어있냐? 안되어있냐? -> 기본값은 false

Object.seal(yuJin2);
console.log('isSealed?? ' + Object.isSealed(yuJin2));

yuJin2['groupName'] = 'ive';
console.log(yuJin2); // isExtensible 처럼 추가가 되지 않는것을 확인

delete yuJin2['name'];
console.log(yuJin2); // 삭제도 되지 않는 것을 확인!

Object.defineProperty(yuJin2, 'name', {
	writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // seal을 하는 것은 configurable을 false로 바꾸는 것과 같다
console.log('-------------------------------------------------------------------');

/*
	Freezed
	가장 높은 immutable 프로그래밍의 등급
	아예 동결시키는 것
	
	읽기 외에 모든 기능을 불가능하게 만든다
*/
const yuJin3 = {
	name: '안유진',
	year: 2003,

	get age() {
		return new Date().getFullYear - this.year;
	},

	set age(age) {
		this.year = new Date().getFullYear - age;
	}
}
console.log('isFrozen?? ' + Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log('isFrozen?? ' + Object.isFrozen(yuJin3));

yuJin3['groupName'] = 'ive';
console.log(yuJin3); // groupName 당연히 추가가 안됨

delete yuJin3['name'];
console.log(yuJin3); // 역시나 name 삭제도 안됨

//Object.defineProperty(yuJin3, 'name',{
//	value: '코드팩토리', // TypeError: Cannot redefine property: name value 변경 불가능
//});
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name')); // enumerable 빼고 전부 false로 바뀌어있음
console.log('-------------------------------------------------------------------');

const yuJin4 = {
	name: '안유진',
	year: 2003,
	wonYoung: { // 오브젝트안에 오브젝트를 또 만들 수 있음
		name: '장원영',
		year: 2002,
	},
};

Object.freeze(yuJin4);
console.log('isFrozen?? ' + Object.isFrozen(yuJin4));

console.log('isFrozen?? ' + Object.isFrozen(yuJin4['wonYoung'])); // false?
// 상위의 오브젝트를 freeze했다고 해서, 하위의 오브젝트까지 모두 freeze가 되는게 아니다
// extensible, seal도 마찬가지이다
