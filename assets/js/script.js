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

let list = document.getElementsByClassName('nav_menu');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        hamburger();
    });
}

$(function () {
    var height = $("#header").height();
    $("body").css("margin-top", height + 0);//0pxだけ余裕をもたせる
});

// スマホのアドレスバー対策
$(".fv").css("height", $(window).height());

