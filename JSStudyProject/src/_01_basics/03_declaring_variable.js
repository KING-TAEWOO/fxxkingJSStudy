/**
 * 		Variable
 */
 
 // 1) var - 더이상 쓰지 않는다
 // let, const 키워드가 대체
 
 var name = '코드팩토리';
 console.log('코드팩토리');
 console.log(name);
 
 var age = 32;
 
 let ive = '아이브';
 console.log(ive);
 
 // let과 var로 선언하면 값을 추후 변경할 수 있다
 // 좋은기능인가? 나중에는 좋지 않은 기능일 수 있음
 
 ive = '안유진';
 console.log(ive);
 
 const newJeans = '뉴진스';
 console.log(newJeans);
 
 // newJeans = '코드팩토리';	//Assignment to constant variable.
 // const변수로선언하면 나중에 바꿀 수 없다
 
 
 /*
 선언과 할당
 
 1) 변수를 선언하는 것
 var name;
 
 2) 할당
 선언한 변수에 값을 넣어주는 것
 var name='코드팩토리';
*/

let girlFriend;
console.log(girlFriend); // undefined

// const girlFriend2; // const키워드는 무조건 값이 초기화된 상태로 선언을 해야한다
// let과 var키워드는 초기화 안해도 undefined로 값이 할당됨

