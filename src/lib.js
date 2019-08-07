import $ from 'jquery';

// ×ボタンを押したときにアラートを非表示用
$("#btnAlert").on('click',function(){
  $("#header_alert").css('display','none');
});

// ハンバーガーメニュー用
$(function(){
    $('.nav-trigger').on('click', function() {
        $(this).toggleClass('_active');
        $('.gnav').toggleClass('_active');
        $('.header_outer').toggleClass('_active');
        $('.header_searchBox').toggleClass('_active');
    })
})
