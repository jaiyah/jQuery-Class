/**
 * --------------------------------
 * Main Javascript File
 * RequireJS를 사용해서 모듈을 호출하는 코드
 *
 * define()
 * require() : 기존에 정의된 모듈을 호출할 경우에
 * --------------------------------
 */


/**
 * RequireJS 환경설정 객체
 * --------------------------------
 */
require.config({
    baseUrl : 'js/', // 루트 다음의 파일이 있는 상위폴더지정
    // 모듈의 단축 경로 지정 또는 이름 별칭(Alias)을 지정
    paths: {
        'jquery' : 'libs/jquery-1.11.3.min.js',
        'modernizr' : 'libs/modernizr.custom.73168.js',
        'detectizr' : 'libs/detectizr' // 디텍터나이저는 모던나이저에 의존한다. 즉, 모던나이저의 의존모듈인 것
    },
    // shim 설정 (modernizr 는 AMD 방식을 채용하지않고 있기 때문에 외부로부터 모듈을 호출하기 위해 shim 을 설정해준다.)
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




// .js 는 생략해야 한다
//무조건 배열로 받아오며 문자열로 받아온다. 별칭을 쓰면 좋다.
// RequireJS 모듈관리(의존성 관리)

// RequireJS 모듈 관리 (의존성관리)
// 디텍터나이저는 모던나이저에 의존하고 있는데 위에 config 에서 shim 에 deps 에 정의해 놓음
require(['libs/detectizr', 'jquery'], function(Detectizr, $) {
    /*console.log('Modernizr를 통해 Flexbox 신기술 적용 유무 체크: ' + Modernizr.flexbox);
    console.log('Detectizr: ' + Detectizr);
    console.log('jQuery 버전: ' + $.fn.jquery);*/

    var $html = $('html'),
        $body = $('body');

    // <html> 요소를 체크: Modernizr, Detectizr가 수행한 일

    // 사용자의 웹브라우저가 HTML 비디오 지원하나요?
    if ($html.hasClass('video')) {
        console.log('HTML5 Video를 지원해!!');
    } else {
        console.log('HTML5 Video를 지원 안해!!');
    }

    // 사용자는 모바일에서 접근했나요?
    if ($html.hasClass('desktop')) {
        console.log('데스크톱에서 접근했어요');
    } else {
        console.log('모바일에서 접근했어요');
    }

    // jQuery를 활용하여 DOM 조작
    $body
        .addClass('using-requirejs')
        .height(window.innerHeight)
        .css({
            'background' :'#e45e26',
            'color' : '#fff'
        })
        .append('<h1>wow! RequireJS</h1>');

});

