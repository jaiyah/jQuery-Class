/**
 * --------------------------------
 *
 * --------------------------------
 */

define(['jquery'], function ($) {
    'use strict';

    // jQuery 플러그인: $('body').setHeight100vh();
    // console.log( $.prototype === $.fn, $().jquery );

    if( !$.fn.setHeight100vh ) {
        $.fn.setHeight100vh = function() {
            // console.log(this); // jQuery Object
            this.css('height', '100vh');
            return this; // jQuery Object
        }
    }

});