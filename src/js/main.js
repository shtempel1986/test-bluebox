"use strict";

/**
 * Created by Павел on 07.04.2017.
 */
function checkNumber(number) {
    if (number > 4) number = 0;
    if (number < 0) number = 4;
    return number;
}
$(document).ready(function () {
    var $fancybox = $(".fancybox"),
        $fancyClose = $(".fancybox__close"),
        $fancyImg = $(".fancybox img");
    $fancyClose.click(function () {
        $fancybox.css({ display: "none" });
    });
    $(".works-item__button").click(function () {
        var imgHeight = $(this).parent().siblings("img").height();
        $fancyImg.attr("src", $(this).parent().siblings("img").attr("src"));
        $fancyImg.css({
            marginTop: ($(window).height() - imgHeight) / 2
        });
        console.log(imgHeight);
        $fancybox.css({
            width: $(window).width(),
            height: $(window).height()
        }).fadeIn(500);
    });
    $fancybox.click(function () {
        $fancybox.css({ display: "none" });
    });

    //Слайдер для main-banner
    var $bannerItems = $(".main-banner__item");

    $(".main-banner__controls-next").click(function () {
        var current = $(".main-banner__item_active").index();
        $bannerItems.eq(current).removeClass("main-banner__item_active");
        $(".main-banner__item_next").removeClass("main-banner__item_next").addClass("main-banner__item_active");
        $(".main-banner__item_prev").removeClass("main-banner__item_prev");
        $bannerItems.eq(checkNumber(checkNumber(current + 1) + 1)).addClass("main-banner__item_next");
        $bannerItems.eq(current).addClass("main-banner__item_prev");
    });
    $(".main-banner__controls-prev").click(function () {
        var current = $(".main-banner__item_active").index();
        $bannerItems.eq(current).removeClass("main-banner__item_active");
        $(".main-banner__item_prev").removeClass("main-banner__item_prev").addClass("main-banner__item_active");
        $(".main-banner__item_next").removeClass("main-banner__item_next");
        $bannerItems.eq(checkNumber(checkNumber(current - 1) - 1)).addClass("main-banner__item_prev");
        $bannerItems.eq(current).addClass("main-banner__item_next");
    });
});