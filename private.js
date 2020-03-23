$(document).on('click','#all', function(){
    $('.Consumer').css('display', 'block');
    $('.Education').css('display', 'block');
    $('.Enterprise').css('display', 'block');
    $('.Industrials').css('display', 'block');
    $('.IT').css('display', 'block');
    $('.Finance').css('display', 'block');
    $('.HealthCare').css('display', 'block');
    $('.Logistics').css('display', 'block');
   
});

$(document).on('click','#consumer', function(){
    $('.Consumer').css('display', 'block');
    $('.Education').css('display', 'none');
    $('.Enterprise').css('display', 'none');
    $('.Industrials').css('display', 'none');
    $('.IT').css('display', 'none');
    $('.Finance').css('display', 'none');
    $('.HealthCare').css('display', 'none');
    $('.Logistics').css('display', 'none');
});

$(document).on('click','#ed', function(){
    $('.Education').css('display', 'block');
    $('.Consumer').css('display', 'none');
    $('.Enterprise').css('display', 'none');
    $('.Industrials').css('display', 'none');
    $('.IT').css('display', 'none');
    $('.Finance').css('display', 'none');
    $('.HealthCare').css('display', 'none');
    $('.Logistics').css('display', 'none');
});

$(document).on('click','#en', function(){
    $('.Enterprise').css('display', 'block');
    $('.Education').css('display', 'none');
    $('.Consumer').css('display', 'none');
    $('.Industrials').css('display', 'none');
    $('.IT').css('display', 'none');
    $('.Finance').css('display', 'none');
    $('.HealthCare').css('display', 'none');
    $('.Logistics').css('display', 'none');
});

$(document).on('click','#fin', function(){
    $('.Finance').css('display', 'block');
    $('.Enterprise').css('display', 'none');
    $('.Education').css('display', 'none');
    $('.Consumer').css('display', 'none');
    $('.Industrials').css('display', 'none');
    $('.IT').css('display', 'none');
    $('.HealthCare').css('display', 'none');
    $('.Logistics').css('display', 'none');
});

$(document).on('click','#hc', function(){
    $('.HealthCare').css('display', 'block');
    $('.Logistics').css('display', 'none');
    $('.Finance').css('display', 'none');
    $('.Enterprise').css('display', 'none');
    $('.Education').css('display', 'none');
    $('.Consumer').css('display', 'none');
    $('.Industrials').css('display', 'none');
    $('.IT').css('display', 'none');
});

$(document).on('click','#ind', function(){
    $('.Industrials').css('display', 'block');
    $('.HealthCare').css('display', 'none');
    $('.Logistics').css('display', 'none');
    $('.Finance').css('display', 'none');
    $('.Enterprise').css('display', 'none');
    $('.Education').css('display', 'none');
    $('.Consumer').css('display', 'none');
    $('.IT').css('display', 'none');
});

$(document).on('click','#logi', function(){
    $('.Logistics').css('display', 'block');
    $('.Industrials').css('display', 'none');
    $('.HealthCare').css('display', 'none');
    $('.Finance').css('display', 'none');
    $('.Enterprise').css('display', 'none');
    $('.Education').css('display', 'none');
    $('.Consumer').css('display', 'none');
    $('.IT').css('display', 'none');

});

$(document).on('click','#it', function(){
    $('.IT').css('display', 'block');
    $('.Logistics').css('display', 'none');
    $('.Industrials').css('display', 'none');
    $('.HealthCare').css('display', 'none');
    $('.Finance').css('display', 'none');
    $('.Enterprise').css('display', 'none');
    $('.Education').css('display', 'none');
    $('.Consumer').css('display', 'none');
});
