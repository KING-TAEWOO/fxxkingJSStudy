/*
	Callback
*/
function waitAndRun() {
	setTimeout(() => { // setTimeout 가장 앞에 나오는 함수가 callback 함수이다
		// callback은 다시 불리다이기 때문에, 뒤의 시간이 지난 후에 다시 불리는 함수가 됨
		// 정의 한다고 해서 바로 실행되는 함수가 아님 나중에 실행이 됨
		console.log('끝');
	}, 2000);
}

// waitAndRun();
console.log('-------------------------------------------------------------------');

function waitAndRun2() {
	// 콜백안에 콜백안에 콜백안에...... 이런 코드는 좋지 않음
	// 예시를 위한 코드
	setTimeout(() => {
		console.log('1번 콜백 끝');

		setTimeout(() => {
			console.log('2번 콜백 끝');

			setTimeout(() => {
				console.log('3번 콜백 끝');

			}, 2000);
		}, 2000);
	}, 2000);
}

// waitAndRun2();

/*
	Promise
*/
const timeoutPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('완료');
	}, 2000);
});

timeoutPromise.then((res) => { // resolve함수에서 받은 값이 res로 들어오게 됨
	//console.log('-------then-------');
	//console.log(res);
});
console.log('-------------------------------------------------------------------');

//const getPromise = (seconds) => new Promise((resolve, reject) => {
//	setTimeout(() => {
//		resolve('완료!!!');
//	}, seconds * 1000);
//});

//getPromise(3).then((res) => {
//	console.log('---- first then ----');
//	console.log(res);
//
//	return getPromise(3);
//}).then((res) => {
//	console.log('---- second then ----');
//	console.log(res);
//
//	return getPromise(10);
//}).then((res) => {
//	console.log('---- third then ----');
//	console.log(res);
//});
console.log('-------------------------------------------------------------------');

const getPromise = (seconds) => new Promise((resolve, reject) => {
	setTimeout(() => {
		//이런식으로 분기문으로 작성해서 판단하도록 가능
		//if (xxx) {
		//	resolve('성공');
		//} else {
		//	reject('에러');
		//}
		resolve('에러!!!');
	}, seconds * 1000);
});

//getPromise(3).then((res) => {
//	console.log('---- first then ----');
//	console.log(res);
//
//}).catch((res) => {
//	console.log('---- first catch ----')
//	console.log(res);
//}).finally(() => { // finally는 callback함수의 argument를 받지 않는다
//	console.log('---- finally ----'); // catch가 걸렸던 then이 걸렸던 무조건 실행이 됨
//});
// resolve를 실행하면 then을 실행시킬 수 있고, reject를 실행하면 catch를 실행시킬 수 있다

Promise.all([ // 가장 느린함수 기준으로 then, catch가 불린다
	getPromise(1),
	getPromise(4),
	getPromise(1),
]).then((res) => {
	console.log(res);
});