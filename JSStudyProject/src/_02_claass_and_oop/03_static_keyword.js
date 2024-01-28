/*
	Static Keyword
*/

class IdolModel {
	name;
	year;
	static groupName = '아이브'; // 객체에 귀속되지 않음

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	static returnGrouopName() {
		return '아이브';
	}
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

console.log(IdolModel.groupName); // 인스턴스에 귀속되지 않고 클래스 자체에 귀속이 된다
console.log(IdolModel.returnGrouopName()); // 인스턴스에 귀속되지 않고 클래스 자체에 귀속이 된다

/*
	Factory Constructor
*/
class NewIdolModel {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	static fromObject(object) {
		return new NewIdolModel(
			object.name,
			object.year
		);
	}
	
	static fromList(list){
		return new NewIdolModel(
			list[0],
			list[1]
		);
	}
}

const yuJin2 = NewIdolModel.fromObject({
	name: '안유진',
	year: 2003
});

console.log(yuJin2);

const wonYoung = NewIdolModel.fromList(
	[
		'장원영',
		2003
	]
);
console.log(wonYoung);