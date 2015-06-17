/**
 * --------------------------------
 *
 * --------------------------------
 */

define(['plugins/jquery.radioClass','plugins/redify'], function () {

    'use strict';

    $('ul li').on('click', function () {
        $(this).radioClass('selected').redify();
    })

    $.each(['a','b','c','d'], function ( i, k ) {
        console.log('i: ', i, '\nk: ', k);
    })

});