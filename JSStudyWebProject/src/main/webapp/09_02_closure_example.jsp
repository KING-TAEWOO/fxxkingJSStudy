<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	function getNumber() {
		var number = 5;

		function innerGetNumber() {
			return number;
		}

		return innerGetNumber;
	}

	var runner = getNumber();
	console.log(runner());
</script>
</head>
<body>

</body>
</html>