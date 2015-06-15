
/**
 * --------------------------------
 * RequireJS 환경설정(Configuration)
 * --------------------------------
 */
require.config({
    baseUrl : 'js/', // 루트 다음의 파일이 있는 상위폴더지정
    // 모듈의 단축 경로 지정 또는 이름 별칭(Alias)을 지정
    paths: {
        'jquery' : 'libs/jquery.min',
        'modernizr' : 'libs/modernizr',
        'detectizr' : 'libs/detectizr.min' // 디텍터나이저는 모던나이저에 의존한다. 즉, 모던나이저의 의존모듈인 것
    },

    // shim 설정 (modernizr 는 AMD 방식을 채용하지않고 있기 때문에 외부로부터 모듈을 호출하기 위해 shim 을 설정해준다.)
    // AMD 방식을 지원하지 않는 js는 shim 등록을 해준다.
    shim: {
        'modernizr': {
            exports: 'Modernizr'
        },
        'detectizr': {
            exports: 'Detectizr',
            deps: ['modernizr'] // 모던나이저에 의존하기 때문에 deps dependensy 의 약자
        }
    }
});


/**
 * --------------------------------
 * 모듈별 호출 코드
 * --------------------------------
 */
/*require(['detectizr','jquery'], function(detectizr, $) {

    // requrieJS 를 호출하고 main.js를 호출하고 modernizr.js 를 호출하고 detectizr.js를 호출한 다음에 callback
    Detectizr.detect();
    //console.log(jQuery.fn.jquery);

    $('body').height('100vh').css({
        'background' : '#FC414B'
    });

});*/

/*
require(['jquery', 'modernizr'], function($, Modernizr) {

    console.log($ === window.jQuery, Modernizr);

});*/

require( ['jquery'], function ($) {
    // jQuery 플러그인 $('').setHeigtht100vh();

    if( !$.fn.setHeigtht100vh ) {
        $.fn.setHeigtht100vh = function () {
            this.css('height','100vh');
            return this;
        }
    };

    if(!$.fn.redify) {
        $.fn.redify = function () {
            this.css('background','#FC414B');
            return this;
        }
    }

    $('body').setHeigtht100vh().redify();

});


