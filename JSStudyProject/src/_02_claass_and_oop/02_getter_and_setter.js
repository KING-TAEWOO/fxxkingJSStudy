/*
	Getter and Setter
*/

class IdolModel {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	/*
		Getter를 언제 사용하냐?!
		1) 데이터를 가공해서 새로운 데이터를 반환할 때
		2) private한 값을 반환할 때
	*/
	get nameAndYear() {
		return `${this.name}-${this.year}`;
	}

	/*
		Setter를 언제 사용하냐?!
		1) 값을 새로 저장할 때
	*/
	set setName(name) { // 바꾸고 싶어하는 변수이름과 똑같이 이름을 지정한다
		// setter같은 경우는 무조건 파라메터 하나를 받아야 한다
		this.name = name;
	}
}

const yuJin = new IdolModel('안유진', '2003');
console.log(yuJin);
console.log(yuJin.nameAndYear); // get은 하나의 키값처럼 () 없이 사용 / 함수처럼 정의했지만 함수가 아님

yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2 {
	#name; // #은 private한 값을 의미
	year;

	constructor(name, year) {
		this.#name = name;
		this.year = year;
	}
	
	get name(){
		return this.#name;
	}
	
	set name(name){
		this.#name = name;
	}
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name); // getter를 이용해서 private 값을 가져올 수 있다

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);