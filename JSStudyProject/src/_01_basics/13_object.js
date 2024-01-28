/*
	Object / 객체
*/

// 객체 선언
// key : value pair
let yuJin = {
	name: '안유진',
	group: '아이브',

	// 함수도 추가 가능(method)
	dance: function() {
		return `${this.name}이 춤을 춥니다.`; // this : 현재 객체를 가리킴
	}
}
console.log(yuJin);
console.log(yuJin.name);	// 18line과 같은 의미
console.log(yuJin['name']);	// 17line과 같은 의미

const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance);
// 함수는 실행을 해야 반환값을 받을 수 있다
console.log(yuJin.dance());
console.log('--------------------');

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';
const yuJin2 = {
	[nameKey]: nameValue,
	[groupKey]: groupValue,
	dance: function() {
		return `${this.name}이 춤을 춥니다.`
	}
}
console.log(yuJin2);
console.log(yuJin2.dance());
console.log('--------------------');

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2); // 새로 속성이 생김
// 존재하지 않았던 키를 넣으면 새로 생성이 됨

delete yuJin2['englishName'];
console.log(yuJin2);
console.log('--------------------');

// const 값은 변경 불가한데 변경이 계속 되고 있다!!!
// 대체 왜??? copy by value, copy by reference

/*
	객체의 특징
	
	1) const로 선언할 경우 객체 자체를 변경할 수는 없다
	2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
*/
const wonYoung = {
	name: '장원영',
	group: '아이브'
}
console.log(wonYoung);

// wonYoung={};		오류 발생 -> wonYoung을 const로 생성했기 때문(1)번)
wonYoung['group'] = '코드팩토리';
console.log(wonYoung); // 2)번
console.log('-------------------------------------------------------------------');

console.log(Object.keys(wonYoung)); // 모든 키 값 다 가져오기
console.log(Object.values(wonYoung)); // 모든 벨류 값 다 가져오기

const name = '안유진';
const yuJin3 = {
	name
};
console.log(yuJin3);