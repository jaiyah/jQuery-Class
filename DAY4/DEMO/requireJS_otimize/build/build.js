({
	// r.js 설정 API
	// https://github.com/jrburke/r.js/blob/master/build/example.build.js

    name                    : "main",

	// build/ 디렉토리 기준으로 설정
	// (현재 build 기준이기 때문에 배포할 기준의 js 로 이동하기 위해 build 폴더에서 나가서 js로 설정)
    baseUrl                 : "../js/",

    // build 할 JS 파일디렉터리와 js 파일명을 출력 설정
    out                     : "../js/build/build.min.js",

    // main.js 파일 위치 설정
    mainConfigFile          : "../js/main.js",

    // 삽입할 라이브러리 설정
    include                 : ["requireLib"],

    // 경로 설정
    paths                   : { requireLib: 'libs/require.min' },

    // 최적화 설정
     optimize                : "uglify2", // "none", "uglify2", "uglify" uglify 를 쓸때는 소스맵을 못쓴다. uglify2를 쓰면 가능하다.

    // 소스맵 생성 설정
     generateSourceMaps      : true, // 소스맵은 오류가 난 js를 알려준다. 압축된 js는 찾기가 어렵기 때문에 소스맵이 있어야 오류 파일의 라인을 알려준다.

    // 저작권 주석 보존 설정
     preserveLicenseComments : false
})