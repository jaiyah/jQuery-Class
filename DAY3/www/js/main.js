/**
 * --------------------------------
 * require([의존파일리스트], 콜백함수)
 * --------------------------------
 */


/**
 * --------------------------------
 * RequireJS 환경설정
 * --------------------------------
 */
require.config({
	baseUrl: 'js',
	paths: {
		'jQuery': 'libs/jquery.min',
        'isJquery': 'libs/modules/isJquery',
        'isJqueryVersion': 'libs/modules/isJqueryVersion',
        'assignBgImageforPage': 'libs/modules/assignBgImageforPage'
	}
});
// AMD 방식의 함수들
// 모듈 정의
// define(id, [dependencies], callback);
// require([dependencies], callback);

// # 모듈을 불러오지 않을때 사용하는 방법
/*
 DOMScript Code
require([], function() {
	var body = document.body;
	body.classList.add('no-assign-jquery');
	body.style.height = window.innerHeight + 'px';
	body.setAttribute('data-body', 'root');

})
*/

// require() 는 모듈을 호출할 때 사용한다.
// define() 함수는 모듈을 정의할 때 사용한다. id, [], 콜백함수

/**
 * --------------------------------
 * jQuery Code
 * jQuery 모듈 호출
 * --------------------------------
 */

 // # 모듈을 불러오는 경우에 사용하는 방법
/*require(['assignBgImageforPage'], function($, isJquery, isJqueryVersion) {

    // console.log(isJquery(), isJqueryVersion);

});*/

// 모듈 호출
require([
        'isJquery',
        'isJqueryVersion',
        'assignBgImageforPage'
    ],
    function(
        isJquery,
        isJqueryVersion
    ) {
        console.log(isJquery(), isJqueryVersion);
    });



