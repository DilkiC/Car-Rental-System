hideAll();
function hideAll() {
$('#homePge,#carItemPge,#bookingPge,#custRegisterPge,#bookingOrderPage,#adminPage,#driverPage,#adminManagePage,#addCarPage,#paymentPage,#driverManagePage,#addDriverPage,#manageCustBookingPage,#adminHomePage').css('display','none');
}

$('#homePge').css('display','block');

$('#easyCarLink').click(function () {
    hideAll();
    $('#homePge').css('display','block');

});

$('#homeLink').click(function () {
hideAll();
$('#homePge').css('display','block');
});

$('#bookingLink').click(function () {
hideAll();
$('#bookingPge').css('display','block');
});

$('#carItemLink').click(function () {
hideAll();
$('#carItemPge').css('display','block');
});

$('#custRegisterLink').click(function () {
hideAll();
$('#custRegisterPge').css('display','block');
});

$('#adminLink').click(function () {
hideAll();
$('#adminPage').css('display','block');
});

$('#driverLink').click(function () {
    hideAll();
    $('#driverPage').css('display','block');
});

////////////////////////home page...................................

$('#cardRegUsers').text(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/customer/custcount",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#cardRegUsers').text(resp.data);
        }
    })
)
//...........................................................................
$('#cardTotBooking').text(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/booking/gettodaybookcount",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#cardTotBooking').text(resp.data);
        }
    })
)
//............................................................................
$('#cardNoCars').text(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/caritem/getidcount",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#cardNoCars').text(resp.data);
        }
    })
)
//.....................................................
$('#cardNoDriver').text(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/driver/getidcount",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#cardNoDriver').text(resp.data);
        }
    })
)

//login controller......................
//to booking.......

$('#custLogin').click(function () {
    if( $('#loginUserName').val()=="customer" && $('#loginPassword').val()=="1234"){
        $('#bookingPge').css('display','none')
        $('#bookingOrderPage').css('display','block');

        //getting custid according to the user name and password and set it to the cust id input field

    }else{
        alert("Wrong User Name or Password");
    }
});
//to admin..........................
$('#adminLoginBtn').click(function () {
    if( $('#loginAdminName').val()=="admin" && $('#loginAdminPassword').val()=="1234"){
        $('#adminPage').css('display','none')
        //$('#adminHomePage').css('display','block');
        $('#adminManagePage').css('display','block');


        //getting custid according to the user name and password and set it to the cust id input field

    }else{
        alert("Wrong User Name or Password");
    }
});
//to driver
$('#driverLogin').click(function () {
    if( $('#loginDriverName').val()=="driver" && $('#loginDriverPassword').val()=="1234"){
        $('#driverPage').css('display','none')
        $('#driverManagePage').css('display','block');


        //getting custid according to the user name and password and set it to the cust id input field

    }else{
        alert("Wrong User Name or Password");
    }
});

