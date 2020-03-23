
 $('#types').css('display', 'none');
 $('#teams').css('display', 'none');
 $('#Advisors').css('display', 'none');
 
$(document).on('click','#partners', function(){
    console.log("hi")
    $('#types').css('display', 'table');
});
$(document).on('click','#all', function(){
    console.log("hi")
    $('html, body').animate({
        scrollTop: $("#teams").offset().top
      }, 1000);
    $('#teams').css('display', 'block');
    $('#Advisors').css('display', 'block');
});
$(document).on('click','#in', function(){
    console.log("hi")
    $('html, body').animate({
        scrollTop: $("#teams").offset().top
      }, 1000);
    $('#teams').css('display', 'block');
    $('#Advisors').css('display', 'none');
});
$(document).on('click','#ina', function(){
    console.log("hi")
    $('html, body').animate({
        scrollTop: $("#Advisors").offset().top
      }, 1000);
    $('#teams').css('display', 'none');
    $('#Advisors').css('display', 'block');
});