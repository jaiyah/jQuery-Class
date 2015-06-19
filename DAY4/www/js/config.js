/**
 * --------------------------------
 * requireJS 환경설정(Configuration)
 * --------------------------------
 */
require.config({

    // 기본 폴더 지정
    baseUrl: 'js',

    // 별칭 등록록
    paths: {
        // 라이브러리
        'jquery'    : 'libs/jquery.min',
        'modernizr' : 'libs/modernizr',
        'detectizr' : 'libs/detectizr.min',

        // 큰 모듈 관리
        'main' : 'modules/main',
        'other_main' : 'modules/other_main',

        // 플러그인
        'setHeight100vh' : 'plugins/jquery.setHeight100vh',
        'redify' : 'plugins/redify'

    },
    shim: {
        'modernizr': {
            exports: 'Modernizr'
        },
        'detectizr': {
            exports: 'Detectizr',
            deps: ['modernizr']
        }
    },

    // paths 에 별칭을 지정하게 되면 풀 경로를 설정하지 않아도 된다.
    // 큰 의존 모듈을 설정하여 main 모듈에 설정된 것만 쓸 것인지 other_main 모듈에 설정된 것만 쓸 것인지 설정할 수 있다.
    deps: [
         //'plugins/jquery.radioClass'
        //'init'
        'modules/main'
        //'other_main',
        //'modules/checkLibs'
    ],

    waitSeconds: 15,

    // url 의 인자로  타임세컨즈를 설정하여 캐시문제를 해결가능하다.
    urlArgs : 'ts=' + (new Date()).getTime()


});