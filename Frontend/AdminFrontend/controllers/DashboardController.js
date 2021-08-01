hideAll();
function hideAll() {
    $('#homePage,#customerPage,#vehiclePage,#driverPage,#requestPage,#paymentPage').css('display','none');
}

$('#homePage').css('display','block');


$('#homeLink').click(function () {
    hideAll();
    $('#homePage').css('display','block');
});

$('#customerLink').click(function () {
    hideAll();
    $('#customerPage').css('display','block');
});
$('#vehicleLink').click(function () {
    hideAll();
    $('#vehiclePage').css('display','block');
});
$('#driverLink').click(function () {
    hideAll();
    $('#driverPage').css('display','block');
});
$('#requestLink').click(function () {
    hideAll();
    $('#requestPage').css('display','block');
});
$('#paymentLink').click(function () {
    hideAll();
    $('#paymentPage').css('display','block');
});
