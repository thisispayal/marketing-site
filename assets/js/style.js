/*
Not using this yet....don't want to use Javascript for styling, but might need to dynamically size the pricing box.
Consider other options.
*/

$(document).ready(function () {
   /* var inputWidth = { value: "" };
    var inputHeight = { value: "" };
    inputWidth.value = $("input").width();
    inputHeight.value = $("input").height() + 5;
    $("select").css("width", inputWidth.value);
    $("select").css("height", inputHeight.value); */
    $(".landing_page_text").css("margin-top", $(".landing_page_image").height() * .12 * -1);
});