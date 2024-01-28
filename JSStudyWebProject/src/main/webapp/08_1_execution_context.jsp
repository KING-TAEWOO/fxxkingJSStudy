<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	function one() {
		console.log('run one');
		console.log('run one finished');
	}
	function two() {
		console.log('run two');
		one();
		console.log('run two finished');
	}
	function three() {
		console.log('run three');
		two();
		console.log('run three finished');
	}

	three();
</script>
</head>
<body>
	<!--
	Execution Context
	
	Execution Context는 실행하려는 JS코드와 코드를 실행할 때 필요한 정보를 담고있는 특수한 환경이다.
	코드 실행에 필요한 모든 데이터를 들고있는 환경이라고 생각하면 된다.
	
	Execution Context는 크게 두가지로 나뉘어진다.
		- Global Context
			최상위 Execution Context
			코드를 실행하면 무조건 생성되는 context로, 웹에서의 window객체나 nodeJS에서의 global객체를 생성하고 들고있는다
		- Function Context
			함수가 실행될 때마다 함수별로 실행되는 context
			함수실행에 대한 모든 정보를 갖고있다
	
	JS는 싱글스레드 프로그램
		싱글스레드 내에는 하나의 Memory Heap과 하나의 Call Stack(Execution Context Stack)이 존재한다
	
	Stack -> 가장 늦게 들어온게 가장 먼저 나가는 구조
	
	Execution Context Stack
		Creation Phase
			- Global Object를 생성한다.
			- window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다
			- this를 window 또는 global에 바인딩한다
			- 변수와 함수를 Memory Heap에 배정하고 기본값을 undefined로 저장한다(Hoisting)
		Excution Phase
			- 코드를 실행한다
			- 필요하다면 새로운 Execution Context를 생성한다
		Creation Phase가 먼저 실행되고 Execution Phase가 실행된다
-->
</body>
</html>