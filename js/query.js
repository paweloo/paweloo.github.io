$('document').ready(function() {
    
    $('.cv').mouseover(function() {
        $('.cv').animate({backgroundPositionX: "100%"}, 20)
    });
    
    $('.cv').mouseleave(function() {
        $('.cv').animate({backgroundPositionX: 0}, 20)
    });
    
    $('.scroll').click(function() {
        $('html').animate({scrollTop: $(".timeline").offset().top }, 1000);
    });
    
    $(".pricerScreen1").css("opacity","0");
    $(".pricerScreen2").css("opacity","0");
    
    $(".pmScreen1").css("opacity","0");
    $(".pmScreen2").css("opacity","0");
    $(".pcScreen").css("opacity","0");
    $(".munScreen").css("opacity","0");
    
    $(".phone").css("transform","translate(52px, -60px)");
    $(".phone2").css("transform","translate(-35px, 40px)");
    $(".phone3").css("transform","translate(65px, -80px");
    $(".phone4").css("transform","translate(-32px, 40px)");
    $(".phone5").css("transform","translate(20px, -20px)");
    
    $(window).on("scroll", function() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 0) {
            $(".scroll").fadeOut();
        }
        
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            

            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},800);
                
            }
        }); 
        
        $('.fuelly').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            

            if( bottom_of_window > (bottom_of_object - 100) ){
                $(".phone").addClass("animation");
                $(".phone2").addClass("animation2");
                $(".phone3").addClass("animation3");
                $(".phone4").addClass("animation4");
                $(".phone5").addClass("animation5");
            }
        }); 
        
        $('.pawelooMusic').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            

            if( bottom_of_window > bottom_of_object ){
                $(".pmScreen1").addClass("animationPhone1");
                $(".pmScreen2").addClass("animationPhone2");
            }
        }); 
        
        $('.pawelooChat').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            

            if( bottom_of_window > bottom_of_object ){
                $(".pcScreen").addClass("animationPhone3");
            }
        }); 
        
        $('.mun').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            

            if( bottom_of_window > bottom_of_object ){
                $(".munScreen").addClass("animationPhone4");
            }
        }); 
    });
});