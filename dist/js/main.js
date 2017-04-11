"use strict";

/**
 * Created by Павел on 07.04.2017.
 */
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
});