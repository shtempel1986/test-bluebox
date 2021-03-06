/**
 * Created by Павел on 07.04.2017.
 */
function checkNumber(number) {
    if (number > 4) number = 0;
    if (number < 0) number = 4;
    return number;
}
$(document).ready(() => {
    let $fancybox = $(".fancybox"), $fancyClose = $(".fancybox__close"),
        $fancyImg = $(".fancybox img");
    $fancyClose.click(() => {
        $fancybox.css({display: "none"});
    });
    $(".works-item__button").click(function () {
        let imgHeight ,imgWidth;
        $fancybox.css({
            width: $(window).width(),
            height: $(window).height()
        }).show();
        $fancyImg.attr("src", $(this).parent().siblings("img").attr("src"));
        imgHeight=$fancyImg.height();
        imgWidth=$fancyImg.width();
        $fancyImg.css({
            marginTop: -(imgHeight/2),
            marginLeft: -(imgWidth/2)
        });
        $fancybox.hide();
        $fancybox.fadeIn(500);
    });
    $fancybox.click(() => {
        $fancybox.css({display: "none"});
    });

    //Слайдер для main-banner
    let $bannerItems = $(".main-banner__item");

    $(".main-banner__controls-next").click(() => {
        let current = $(".main-banner__item_active").index();
        $bannerItems.eq(current).removeClass("main-banner__item_active");
        $(".main-banner__item_next").removeClass("main-banner__item_next").addClass("main-banner__item_active");
        $(".main-banner__item_prev").removeClass("main-banner__item_prev");
        $bannerItems.eq(checkNumber(checkNumber(current + 1) + 1)).addClass("main-banner__item_next");
        $bannerItems.eq(current).addClass("main-banner__item_prev");
    });
    $(".main-banner__controls-prev").click(() => {
        let current = $(".main-banner__item_active").index();
        $bannerItems.eq(current).removeClass("main-banner__item_active");
        $(".main-banner__item_prev").removeClass("main-banner__item_prev").addClass("main-banner__item_active");
        $(".main-banner__item_next").removeClass("main-banner__item_next");
        $bannerItems.eq(checkNumber(checkNumber(current - 1) - 1)).addClass("main-banner__item_prev");
        $bannerItems.eq(current).addClass("main-banner__item_next");
    });

    //Переключение меню для маленького размера экрана
    $(".navbar-toggle").click(()=>{
        $(".header-nav").toggle(500);
    });
});