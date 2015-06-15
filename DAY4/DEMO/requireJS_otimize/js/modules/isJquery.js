// 모듈 정의
define(['../libs/jquery.min'], function() {
	function isJquery () {
		return !!window.jQuery;
	}
	return isJquery;
});