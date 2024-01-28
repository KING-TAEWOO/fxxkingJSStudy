/*
	Thread
		가장 작은 단위의 working unit, CPU가 동시에 몇개의 연산을 할 수 있냐?
	
	JS는 Single Thread이다
		JS는 어느 한 순간에 동시에 단 하나의 작업만 실행할 수 있다.
		
	Sync Programming(동기 프로그래밍)
		콘솔에 'Hello' 출력
		2초가 걸리는 작업 시작
		위 작업 시작 후(작업이 끝나기 전) 바로 'World' 출력
		2초가 걸리는 작업 완료 후 '완료' 출력
	
		위의 작업은 순서대로 진행하게 됨
*/
function longWork() {
	const now = new Date();

	/*
		milliseconds since epoch
		1970년도 1월 1일부터 지금까지 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다
	*/
	const milliseconds = now.getTime();
	const afterTwoSeconds = milliseconds + 2 * 1000;

	while (new Date().getTime() < afterTwoSeconds) {

	}

	console.log('완료');
}
console.log('Hello');
longWork();
console.log('World!');
console.log('-------------------------------------------------------------------');

function longWork2() {
	setTimeout(() => { // setTimeout함수는 비동기로 실행되는 함수이다
		console.log('완료')
	}, 2000); // 2초동안 기다렸다가 왼쪽의 함수가 실행된다
}
console.log('Hello');
longWork2();
console.log('World');

