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
		'jquery': 'libs/jquery.min'
	}
});
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
 require(['jquery'], function($) {

     console.log($ === jQuery);


     // require() 함수 내부의 콜백 함수는 DOMReady 된 이후 실행된다.

     var $body = $('body');

     // 만약 body 요소의 margin 설정 값이 존재하면.... 초기화하라.
     if ( parseInt($body.css('margin')) > 0 ) {
         $body.css('margin', 0);
     }

     // 동적으로 #page 요소를 만든다. body 요소의 마지막 자식요소로 붙인다.
     var $page = $('<div id="page"/>').appendTo('body');
     // console.log($page);

     // 브라우저 창의 뷰포트 높이만큼을 #page 요소의 높이로 설정한다.
     var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
     // document.documentElement.clientHeight;
     // 구형 IE 경우 body 요소의 높이를 가져오기 때문에 그리고 또한 doctype이 정의 되어있지 않을 경우를 대비
     // console.log(viewportHeight);
     // var $doc = $('html, body');
     $page.height(viewportHeight);

     // #page 요소에 배경이미지를 설정하고, 배경이미지 크기를 cover로 변경한다. 가운데 배치한다.
     var bgImgPath = 'https://unsplash.imgix.net/photo-1430760814266-9c81759e5e55?dpr=2&fit=crop&fm=jpg&h=750&q=75&w=1050';

     var page_cssMap = {
         'background': 'url('+ bgImgPath +') no-repeat center',
         'background-size': 'cover'
     };

     $page.css(page_cssMap);

/*
 	$('body')
 		.addClass('assign-jquery')
 		.height(window.innerHeight)
 		.attr('data-body', 'root');
*/

 });



