// ハンバーガーボタンの動き
function hamburger() {
    document.getElementById('top').classList.toggle('bar--active');
    document.getElementById('middle').classList.toggle('bar--active');
    document.getElementById('bottom').classList.toggle('bar--active');
    document.getElementById('nav').classList.toggle('nav--slide');
    document.getElementById('bg_layer').classList.toggle('bg_layer--active');
}

document.getElementById('hamburger').addEventListener('click', function () {
    hamburger();
});

document.getElementById('bg_layer').addEventListener('click', function () {
    hamburger();
});

$('a[href^="#"]').click(function () {
    var speed = 500;
    var headerH = $(".header").height();
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerH;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    hamburger();
    return false;
});


let list = document.getElementsByClassName('nav_menu');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        hamburger();
    });
}


// headerの高さ分bodyを下げる
$(function () {
    var height = $("#header").height();
    $("body").css("margin-top", height + 0);//0pxだけ余裕をもたせる
});

// スマホのアドレスバー対策
$(".fv").css("height", $(window).height());


// tellボタン（スマホのみ現れる）
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);

if (!isMobile) {
    $('a[href^="tel:"]').on('click', function (e) {
        e.preventDefault();
    });
}


// // ページトップへ戻るボタン
$(function () {
    // TOPに戻るボタン
    var topBtn = $('.pagetop');
    topBtn.hide();

    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        var w = $(window).width();
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    //スムーススクロールでページトップへ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


// // スクロール禁止
// // （.hamburger = メニューのボタン　.nav　=　メニューの本体）
// $(function () {
//     var state = false;
//     var scrollpos;

//     $('.hamburger').on('click', function () {
//         if (state == false) {
//             scrollpos = $(window).scrollTop();
//             $('body').addClass('fixed').css({ 'top': -scrollpos });
//             $('.nav').addClass('open');
//             state = true;
//         } else {
//             $('body').removeClass('fixed').css({ 'top': 0 });
//             window.scrollTo(0, scrollpos);
//             $('.nav').removeClass('open');
//             state = false;
//         }
//     });
// });
