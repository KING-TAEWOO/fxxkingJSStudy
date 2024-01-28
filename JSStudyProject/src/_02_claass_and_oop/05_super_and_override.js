/*
	Super and Override
*/

class IdolModel {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	
	sayHello(){
		return `안녕하세요 ${this.name}입니다.`;
	}
}

class FemaleIdolModel extends IdolModel {
	// 노래, 춤, 특기
	part;
	
	constructor(name, year, part){
		super(name, year);
		this.part = part;
	}
	
	sayHello(){
		// return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다.`;
		// constructor가 아닌곳에서 super.name이라고 사용하지 않고 this.name이라고 써야한다
		// 병신같은 자바스크립트이다
		// 논리적으로라면 ${super.name}이 맞다
		
		// 함수 안에서 super클래스를 사용하면 안된다!!!
		
		return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
		// 함수는 super클래스로 사용할 수 있다
	}
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());

console.log(yuJin.sayHello());
