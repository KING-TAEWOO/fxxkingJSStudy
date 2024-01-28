/*
	Using Function To Create Objects
*/

function IdolModel(name, year){
	if(!new.target){
		return new IdolModel(name, year);
	}
	
	this.name = name;
	this.year = year;
	
	this.dance = function(){
		return `${this.name}이 춤을 춥니다.`;
	}
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
//console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003); // 함수형으로 실행을 해버리면 함수에서 반환해주는것이 아무것도 없기 때문에 undefined가 나와버림
// 함수가 생성자 함수라면 꼭 new키워드가 필요하다
console.log(yuJin2);
//console.log(global.name); // global객체 : 이 파일이 생성이 됐을 때 자동으로 생성되는 객체, 자바스크립트 엔진을 nodejs에서 실행할 때 필요한 값들을 다 들고 있음
// new 키워드를 사용하지 않고 생성자 함수를 실행해버리면, this키워드가 global에 붙어버려 global의 값들을 설정하게 된다

const IdolModelArrow = (name, year) =>{
	this.name = name;
	this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003); // TypeError: IdolModelArrow is not a constructor
// Arrow 함수에서는 new 키워드를 쓸 수 없다(일반 함수에서만 가능)

