/*
	All about objects
	
	객체를 선언할 때 사용할 수 있는 방법들
	1) object를 생성해서 객체 생성 - 기본기 {}
	2) class를 인스턴스화해서 생성 - class와 OOP
	3) class키워드가 존재하기 전부터 있던 방법 - function을 사용해서 객체 생성
	
*/

// 1)
const yuJin = {
	name: '안유진',
	year: 2003
};
console.log(yuJin);

// 2)
class IdolModel{
	name;
	year;
	
	constructor(name,year){
		this.name = name;
		this.year = year;
	}
}
console.log(new IdolModel('안유진', 2003));

// 3) 생성자 함수
// 오래된 라이브러리나 오래된 프로젝트에서 코딩을 하게 될 때 이러한 형태를 많이 보게 될것이다
function IdolFunction(name, year){ // 함수에는 constructor라는 키워드가 존재하지 않기 때문에 이렇게 파라메터로 받는다
	this.name = name;
	this.year = year;
}

const gaEul = new IdolFunction('가을', 2002); // 함수 내에 this키워드를 이용했을때에만 new 키워드를 사용해서 생성
console.log(gaEul);