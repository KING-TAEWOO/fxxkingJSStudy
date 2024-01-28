/*
	Async / Await
*/

// resolve일 때
//const getPromise = (seconds) => new Promise((resolve, reject) => {
//	setTimeout(() => {
//		resolve('완료'); // resolve는 then이 실행되었을 때 반환하는 값
//	}, seconds * 1000);
//});

//async function runner(){ // 주의할 점 : await는 promise함수에다가만 사용할 수 있다
//	const result1 = await getPromise(1); // await를 사용한 함수의 반환값은 그냥 넣어주면 됨
//	console.log(result1);
//	const result2 = await getPromise(2);
//	console.log(result2);
//	const result3 = await getPromise(1);
//	console.log(result3);
//}
console.log('-------------------------------------------------------------------');

// reject일 때
const getPromise = (seconds) => new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('error!!!');
	}, seconds * 2000);
});

async function runner() {
	try {
		const result1 = await getPromise(1);
		console.log(result1);
		const result2 = await getPromise(2);
		console.log(result2);
		const result3 = await getPromise(1);
		console.log(result3);
	} catch (e) {
		console.log('--- catch e ---');
		console.log(e);
	} finally {
		console.log('--- finally ---');
	}
}

runner();
console.log('실행 끝');