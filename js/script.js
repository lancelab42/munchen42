$(document).ready(function(){
    //setSliderControlToCenter();
})

function setSliderControlToCenter() {
    var width = 0;
    $('.control__item').each(function(){
       width += $(this).outerWidth(true); 
    });
    $('.slider__control').css({
        width: width,
        display: 'block'
    })
}