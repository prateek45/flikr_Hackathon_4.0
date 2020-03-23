$("#fadein").css("display","none");
$("#second").css("display","none");
$("#third").css("display","none");
$(document).on('click','#news', function(){
    console.log("hi");  
    $(".fadeout").addClass("elementToFadeOut");
    
    setTimeout(function(){
        $(".fadeout").css("display","none");
        },2000
    )
    $("#fadein").addClass("elementToFadeIn");
    $("#second").addClass("elementToFadeIn");
    $("#third").addClass("elementToFadeIn"); 
    setTimeout(function(){
        $("#fadein").css("display","block");
        $("#second").css("display","block");
        $("#third").css("display","block");    
    },2500
    )
});