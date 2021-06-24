/*setting current date ....................................................*/
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
$('#lblreturndate').text(today);
$('#bDate').val(today);
$('#regDate').val(today);

//button to top...............................
$(window).load(function (){
    $('.top-btn').fadeOut();
});

$(window).scroll(function () {
    if ($(this).scrollTop() >100) {
        $('.top-btn').fadeIn();
    }
    else {
        $('.top-btn').fadeOut();
    }
});

$('.top-btn').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 900);
    return false;
});


///////////////////////////

