/*
	Array Functions
*/

let iveMembers = [
	'안유진',
	'가을',
	'레이',
	'장원영',
	'리즈',
	'이서',
]

console.log(iveMembers);

// push()
console.log(iveMembers.push('코드팩토리')); // push하고 난 새로운 길이를 출력
console.log(iveMembers);
// 직접 변경됨
console.log('--------------------');


// pop()
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('--------------------');
// 마지막 값을 반환 & 삭제


// shift()
console.log(iveMembers.shift());
console.log(iveMembers);
// 첫번째 값을 반환 & 삭제
console.log('--------------------');


// unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
// push와 같음 but 첫번째에 추가됨
console.log('--------------------');


// splice()
console.log(iveMembers.splice(0, 3)); // 어떤 인덱스부터 몇개를 삭제를 할지
console.log(iveMembers);
console.log('--------------------');


iveMembers = [
	'안유진',
	'가을',
	'레이',
	'장원영',
	'리즈',
	'이서',
]

// concat()
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers); // 원래 Array는 변경되지 않은걸 알 수 있음
// concat()은 새로운 Array를 새로 만들어서 반환해줌
// 다른 메모리 공간에 저장된 값이 반환이 되는 것
console.log('--------------------');


// slice()
console.log(iveMembers.slice(0, 3)); // 0, 1, 2 인덱스 까지
// 몇번째 인덱스부터 몇번째 인덱스까지 자를지...(splice)와 조금 다름
console.log(iveMembers); // 원래 Array는 변경되지 않은걸 알 수 있음
console.log('--------------------');


// spread operator
let iveMembers2 = [
	...iveMembers,
];
console.log(iveMembers2); // iveMembers에 들어가 있는 내용들이 퍼져서 출력이 됨

// 비교를 위한
let iveMembers3 = [
	iveMembers,
];
console.log(iveMembers3); // 리스트속 리스트
console.log('--------------------');


let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);
console.log(iveMembers4 === iveMembers2);
// spread operator로 펼쳐놓으면 완전히 새로운 Array가 탄생(메모리 공간이 다름) 
console.log('--------------------');


///// 압도적으로 많이 쓰이는 것
console.log(iveMembers.join()); // comma를 기준으로 모든 값들을 합침
console.log(typeof iveMembers.join());
console.log(iveMembers.join('/')); // '/'로 구분하도록 바꿀 수 있음
console.log('--------------------');


// sort()
// 오름차순
iveMembers.sort(); // sort는 반환값이 없음 출력해볼필요X
console.log(iveMembers);
// 내림차순
console.log(iveMembers.reverse());

let numbers = [
	1, 9, 7, 5, 3
];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면(뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면(앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
	return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);
console.log('--------------------');


// map();
// Array에 있는 모든 값을 순회하면서 그 각각의 값들을 변형시키는 역할을 함
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
	if (x == '안유진') {
		return `아이브: ${x}`;
	} else {
		return x;
	}
}));
console.log(iveMembers);
console.log('--------------------');


// filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));
// filter는 true에 해당이 되는 모든 값들을 다 찾음
console.log('--------------------');


// find()
console.log(numbers.find((x) => x % 2 === 0));
// find는 순서대로 보다가 가장 첫번째로 해당되는 값만 반환
console.log('--------------------');


// findIndex()
// find와 같지만 index를 반환한다
console.log(numbers.findIndex((x) => x % 2 === 0));
console.log('--------------------');


// reduce()
console.log(numbers.reduce((p, n) => p+n,0)); 
// 1번째 parameter : (p, n) => p+n	/ 콜백함수
// 2번째 parameter : 0				/ 초기값
// 값이 n에 하나씩 들어가게 됨
// 이 함수가 실행될 때마다(값이 하나씩 들어올 때마다)
// 기존 반환한 값이 p에 들어가고, 다음 새로운 값이 n에 들어감
// Array를 처음 looping할 때는 이전의 반환값이 없음
// 그 때 두번째 파라미터에 입력한 0이라는 값이 들어가게 됨

