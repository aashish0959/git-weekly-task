$(document).ready(function () {
    $('.bars').click(function () {
        $('.off').addClass('on');
        $('.fa-xmark').addClass('on-xmark');
    });
    $('.fa-xmark').click(function () {
        $('.off').removeClass('on');
        $('.fa-xmark').removeClass('on-xmark');
    });
});