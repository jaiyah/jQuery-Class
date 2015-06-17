/**
 * --------------------------------
 * requireJS 환경설정(Configuration)
 * --------------------------------
 */
require.config({
	baseUrl: 'js',

    //
	paths: {
        // 라이브러리
		'jquery'    : 'libs/jquery.min',
		'modernizr' : 'libs/modernizr',
		'detectizr' : 'libs/detectizr.min',

	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'detectizr': {
			exports: 'Modernizr.Detectizr',
			deps: ['modernizr']
		}
	}
});

/**
 * 모듈 exports 테스트
 * --------------------------------
 */
// require(['modernizr', 'detectizr'], function(m, d) {
// 	console.log(m, d);
// });

/**
 * 모듈별 호출 코드
 * --------------------------------
 */
// 'libs/detectizr.min' 풀 경로를 쓰는 경우는 paths 에 별칭을 설정해 놓지 않은 경우에 풀 경로를 설정해주어야 한다.
require(['libs/detectizr.min', 'jquery','setHeight100vh', 'redify'], function(Detectizr, $) {
	'use strict';

	// 플러그인 실행 코드
	$('body').setHeight100vh().redify().addClass('body_el');

});





// require(['detectizr', 'jquery'], function(Detectizr, $) {

// 	// requireJS > main.js > modernizr.js > detectizr.js > callback
// 	Detectizr.detect();

// 	// requireJS > main.js > jquery.js > callback
// 	$('body').height('100vh').css({
// 		'background': '#FC414B'
// 	});
// });

// require(['jquery', 'modernizr'], function($, Modernizr) {
// 	console.log($ === window.jQuery, Modernizr);
// });