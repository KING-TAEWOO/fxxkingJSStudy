/*
	try...catch
	
	에러를 잡는데 사용된다
	
	1) 발생시킬 때 -> 던진다고 한다 (throw)
	2) 명시적으로 인지할 때 -> 잡는다고 한다 (catch)
*/

function runner() {
	try {
		console.log('Hello');

		throw new Error('큰 문제가 생겼습니다!!!');
		// 에러를 던지는 순간에 함수가 정지가 되고 다음 코드가 실행히 되지 않음

		console.log('Code Factory');
	} catch (e) {
		console.log('----catch----');
		// console.log(e);
	} finally { // try에서 에러가 발생했던 아니던 무조건 finally가 실행됨
		// finally는 써도 되고 안써도 된다 optional
		console.log('----finally----');
	}
}
runner();