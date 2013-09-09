/*
Not using this yet....don't want to use Javascript for styling, but might need to dynamically size the pricing box.
Consider other options.
*/

var maxHeight = Math.max.apply(null, $(".pricing-col").map(function () { return $(this).height(); }).get());