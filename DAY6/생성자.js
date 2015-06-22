/**
 * --------------------------------
 *
 * --------------------------------
 */

(function (global, $) {

    var num = 10;
    var $body = $('body');


    global.data = {
        num : num,
        $body: $body
    };

})(window, window.jQuery);

function moving() {
    console.log(this)

}
moving();
document.body.onclick = moving;

function car(arg) {
    this.name = arg;
    console.log(this)
}

var a = new car('jaehee');
var b = new car('minsu');

console.log(a.name);
console.log(b.name);

function Human(name) {

    this.name = name;

}

var me = new Human('jaehee');
var he = new Human('minsu');
var she = new Human();

/**
 * --------------------------------
 * 마우스 객체
 * 오른쪽 클릭, 왼쪽 클릭영역, 스크롤등이 속성
 * 이런 작업이 추상화(설계)
 * --------------------------------
 */

/**
 * --------------------------------
 * 사람 객체
 * 1. 생각하다
 * 2. 심장
 * 3. 이름
 * 4. 성별
 * 5. 키
 * 6. 뛴다
 * 7. 잔다.
 * 위에 것들이 속성, 프로퍼티라고 한다.
 * 이 속성들 중에 동사가 메서드라고 한다.
 * method (방법)
 * 뛰게 하는 방법, 생각하게 하는 방법등을 정의
 * --------------------------------
 */

/*
$(), jQuery();

jQuery 는 생성자 함수다.
    $() 팩토리(공장)함수
    $() 는 내부적으로는 new JQuery() 를 init 하여 공장처럼 찍어낸다.
    돔객체를 던지면 제이쿼리 객체로 반환해준다.
    $() 는 함수를 호출하는 것이다.
    붕어빵 틀이 $() 짠 안에 인자를 넣으면 짠 하고 무언가 제이쿼리 객체가 나오지만 팩토리이기 때문에 계속 같은거를 던지지 말고
    한번만 던져서 캐시, 즉 참조해 놓는것이 같은 것을 만들어 내지 않는다.
    붕어빵 틀에서 붕어빵을 계속 찍어서 먹다보면 배가 부르겠죠?! 그러면 브라우저도 배가 부르겠죠?!

    jQuery.fn 의 정체는 jQuery 팀이 $ 에 능력을 부여하여 만들었지만
    그것을 사용자들에게 jQuery 기능을 확장하도록 가능하도록 해주는 것이 $.fn 이다.
    즉, jQuery 부모에 접근하여 모든 자식들이 상속받도록 하는 것이다.
*/

/**
 * --------------------------------
 * 나를 실행시킨 컨텍스트가 누구인가?
 * this 는 실행 컨텍스트에 따라서 달라진다.
 * --------------------------------
 */
var coffee = function (name) {
    console.log(name)
}

var Coffee = function (name) {
    this.name = name;
    this.drink = function () {
        return this.name + '마신다.';
    }
}


var latte = new Coffee();
var espresso = new Coffee();

console.log(latte.name);
console.log(espresso.name);
latte.drink();
espresso.drink();
/**
* 마신다는 행위는 같지만 누가 마시냐는 달라진다는 점이 포인드
* 같은 객체로 생성을 했지만 다르게 설정할 수 있다. 이것이 객체지향
 * 항상 바뀌는 엘리먼트나 기타등등은 this 로 사용하고
 * 공통적으로 사용하는 경우들은 Coffee.prototype.sss =  function() {}
 * 즉 프로토타입은 부모가 공통적으로 가지고 있는 것들이다.
*/

/**
 * --------------------------------
 * new 를 항상 붙이지 않고 제이쿼리처럼~
 * --------------------------------
 */

function Nav(el) {
    return new Navigation(el);
}

var a = Nav('ss');

/* 그럼 제이쿼리는 */

function $(el) {
    return new jQuery(el);
}

var b = $();