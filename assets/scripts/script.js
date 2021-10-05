$('.curation-slider').ready(() =>{
    $('.curation-slider').slick({
        arrows: false,
        dots: true,
        customPaging : function(slider, i) {
            return '';
        }
    })
});
$(document).on('scroll',()=>{
    if($(document).width() < 550){
        if($(window).scrollTop() > $('header').height()){
            $('.header__icons').css('position', 'fixed').css('padding', '.5vmax').css('border-bottom', 'solid .1vmax #000');
        } else{
            $('.header__icons').css('position', 'sticky').css('padding', '0 1vw 0 0').css('border-bottom', 'none');
        } 
    } 
});
$('.hamburger__button-open').on('click', function(){
        $('body').append(`<div class="responsive-navbar">
        <div class="hamburger__button-close">
        </div>
        <nav class="responsive__nav">
            <a href="" class="responsive__link">WHAT’S NEW</a>
            <a href="" class="responsive__link">BRANDS</a>
            <a href="" class="responsive__link">CURATIONS</a>
            <a href="" class="responsive__link">ART</a>
            <a href="" class="responsive__link">SELF CARE</a>
            <a href="" class="responsive__link">STYLE</a>
            <a href="" class="responsive__link">LIFESTYLE</a>
            <a href="" class="responsive__link">TECH</a>
            <a href="" class="responsive__link">STORIES</a> 
        </nav>
    </div>`);
    $('.responsive-navbar').animate({
        top : "0"
    }, 500, function(){
        $('body').css('overflow', 'hidden')
    })
    $('.hamburger__button-close').on('click', function(){
        console.log(0)
        $('.responsive-navbar').animate({
            top : "-100vh"
        }, 500, function(){
            console.log(1)
            $('body').css('overflowY', 'scroll');
            $('.responsive-navbar').remove();
        })   
    })      
});
$('.dropdown__header').after().on('click', function(){
    const dropdownContent = $($(this)[0].childNodes[3]);
    if(dropdownContent.css('display') == 'flex'){
        dropdownContent.animate({
            opacity: '0'
        }, 300, function(){dropdownContent.css('display', 'none')})
    } else{
        dropdownContent.css('display', 'flex');
        dropdownContent.animate({
            opacity: '1'
        }, 300)
    }
});

