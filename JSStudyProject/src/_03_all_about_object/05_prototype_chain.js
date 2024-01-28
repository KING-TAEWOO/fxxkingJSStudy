/*
	Prototype
*/

const testObj = {

};
console.log(testObj.__proto__); // __proto__ 는 모든 객체에 존재하는 프로퍼티이다
// class 강의에서 배울 때, 상속에서 부모 클래스에 해당되는 값이다

function IdolModel(name, year) {
	this.name = name;
	this.year = year;
}

console.log(IdolModel.prototype); // 감춰져 있어서 빈 객체로 보임

// 감춰져 있는 값 보는 법
console.dir(IdolModel.prototype, {
	showHidden: true,
});

// circular reference - 서로가 서로를 참조하고 있는 상태
console.log(IdolModel.prototype.constructor === IdolModel); // 같은 메모리주소를 참조하고 있다
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);
console.log('-------------------------------------------------------------------');

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);

console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(yuJin.toString());
console.log(Object.prototype.toString());
console.log('-------------------------------------------------------------------');

function IdolModel2(name, year) {
	this.name = name;
	this.year = year;

	this.sayHello = function() {
		return `${this.name}이 인사를 합니다.`;
	}
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello);
// 같은 기능의 sayHello지만 메모리공간에서는 다른 곳을 차지하고 있음

// hasOwnProperty : 상속을 받은 property인지, 고유로 가지고 있던 yuJin2만의 property인지 확인 가능
console.log(yuJin2.hasOwnProperty('sayHello')); // true -> 상속받은게 아니라 yuJin2만의 고유 property이다
console.log('-------------------------------------------------------------------');

function IdolModel3(name, year) {
	this.name = name;
	this.year = year;
}

IdolModel3.prototype.sayHello = function() {
	return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello); // 한 공간에만 sayHello가 저장되어 있음

console.log(yuJin3.hasOwnProperty('sayHello')); // false -> 상속받은 property이다

IdolModel3.sayStaticHello = function() {
	return `안녕하세요 저는 static method 입니다.`;
}

console.log(IdolModel3.sayStaticHello());

/*
	Overriding
*/
function IdolModel4(name, year) {
	this.name = name;
	this.year = year;

	this.sayHello = function() {
		return `안녕하세요 저는 인스턴스 메서드 입니다!`;
	}
}

IdolModel4.prototype.sayHello = function() {
	return `안녕하세요 저는 prototype 메서드 입니다!`;
}

const yuJin4 = new IdolModel4('안유진', 2003);

// property shadowing - class override와 같음
console.log(yuJin4.sayHello());

/*
	getPrototypeOf, setPrototypeOf
	
	인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
*/

function IdolModel(name, year) {
	this.name = name;
	this.year = year;
}

IdolModel.prototype.sayHello = function() {
	return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
	this.name = name;
	this.year = year;
	
	this.dance = function(){
		return `${this.name} 춤을 춥니다.`;
	}
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul)); // getPrototypeOf : gaEul의 프로토를 가져옴
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);

Object.setPrototypeOf(ray, IdolModel.prototype); // 프로토타입 변경!!!
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel); // 원래의 프로토타입과의 연결이 완전히 끊겨버림
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

FemaleIdolModel.prototype = IdolModel.prototype;
// 우리가 프로토타입을 직접 변경해 버리면, new 키워드로 인스턴스를 생성을 할 때 변경된 프로토타입을 그대로 상속을 받기 때문에
// 세개의 값들이 전부 같아짐

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);