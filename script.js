$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY>20){
 $('.navbar').addClass('sticky')
        }
        else{
            $('.navbar').removeClass('sticky')

        }
    })


//toggle menu bar and navbar
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")

})

    //typing style
let typed= new Typed(".typing",{
    strings:["Web Developer","Blogger", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
let typed2= new Typed(".typing2",{
    strings:["Web Developer","Blogger", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true



});





// owl carousel 
$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoPlayTimeOut:2000,
    autoPlayHoverPause:true,
    responsive:{
        0:{
            item:1,
            nav:false
        },
        600:{
            item:2,
            nav:false
        },
        1000:{
            item:3,
            nav:false
        }
    }
})

});
