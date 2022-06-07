tippy('#donate_btn', {

    content: '<strong style="color: #536dfe">Підтримати</strong> <strong style="color: gold">ЗСУ</strong>',
    placement: 'bottom',
    arrow: false,
    duration: 500,
    allowHTML: true,
    animation: "scale",
    theme: "light",

});

tippy('#monobank', {

    content: 'MonoBank',
    placement: 'bottom',
    arrow: false,
    duration: 500,
    allowHTML: true,
    animation: "scale",
    theme: "material",

});

tippy('#privatebank', {

    content: '<span style="color: limegreen">ПриватБанк</span>',
    placement: 'bottom',
    arrow: false,
    duration: 500,
    allowHTML: true,
    animation: "scale",
    theme: "material",

});

tippy('#qr_code', {

    content: '<span style="color: #536dfe">QR - код</span>',
    placement: 'bottom',
    arrow: false,
    duration: 500,
    allowHTML: true,
    animation: "scale",
    theme: "material",

});

$("#donate_btn").click(function() {

    $("#popup").css("opacity", "1")
    $("#popup").css("visibility", "visible")
    $(".popup_body").css("opacity", "1")
    $(".popup_body").css("transform", "translate(0px, 0px)")

})

$("#popup_close").click(function() {

    $("#popup").css("opacity", "0")
    $("#popup").css("visibility", "hidden")
    $(".popup_body").css("opacity", "0")
    $(".popup_body").css("transform", "translate(0px, -100%)")

})

$("#qr_code").click(function() {

    $("#popup_qr_code").css("opacity", "1")
    $("#popup_qr_code").css("visibility", "visible")
    $(".popup_body_qr_code").css("opacity", "1")
    $(".popup_body_qr_code").css("transform", "translate(0px, 0px)")

})

$("#popup_close_qr_code").click(function() {

    $("#popup_qr_code").css("opacity", "0")
    $("#popup_qr_code").css("visibility", "hidden")
    $(".popup_body_qr_code").css("opacity", "0")
    $(".popup_body_qr_code").css("transform", "translate(0px, -100%)")

})