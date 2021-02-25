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

jQuery('a[href^="#"]').click(function () {
    var speed = 500;
    var headerH = jQuery(".header").height();
    var href = jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerH;
    jQuery("html, body").animate({ scrollTop: position }, speed, "swing");
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
jQuery(function () {
    var height = jQuery("#header").height();
    jQuery("body").css("margin-top", height + 0);//0pxだけ余裕をもたせる
});

// スマホのアドレスバー対策
jQuery(".fv").css("height", jQuery(window).height());


// tellボタン（スマホのみ現れる）
var ua = navigator.userAgent.toLowerCase();
var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);

if (!isMobile) {
    jQuery('a[href^="tel:"]').on('click', function (e) {
        e.preventDefault();
    });
}


// // ページトップへ戻るボタン
jQuery(function () {
    // TOPに戻るボタン
    var topBtn = jQuery('.pagetop');
    topBtn.hide();

    //スクロールが100に達したらボタン表示
    jQuery(window).scroll(function () {
        var w = jQuery(window).width();
        if (jQuery(this).scrollTop() > 200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    //スムーススクロールでページトップへ
    topBtn.click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


// // スクロール禁止
// // （.hamburger = メニューのボタン　.nav　=　メニューの本体）
// jQuery(function () {
//     var state = false;
//     var scrollpos;

//     jQuery('.hamburger').on('click', function () {
//         if (state == false) {
//             scrollpos = jQuery(window).scrollTop();
//             jQuery('body').addClass('fixed').css({ 'top': -scrollpos });
//             jQuery('.nav').addClass('open');
//             state = true;
//         } else {
//             jQuery('body').removeClass('fixed').css({ 'top': 0 });
//             window.scrollTo(0, scrollpos);
//             jQuery('.nav').removeClass('open');
//             state = false;
//         }
//     });
// });
