/*.........navigation................*/
hideAll();
function hideAll() {
    $('#home,#booking,#notiPage').css('display','none');

}
$('#home').css('display','block');

$('#homeLink').click(function () {
    hideAll();
    $('#home').css('display','block');

});
$('#bookingLink').click(function () {
    hideAll();
    $('#booking').css('display','block');

});
$('#notiLink').click(function () {
    hideAll();
    $('#notiPage').css('display','block');

});

/*.......getting cid and name*/
var cid=localStorage.getItem('cid');
var name=localStorage.getItem('name');
console.log(cid+" "+name);
$('#userId').text(cid);
$('#userName').text("Hi "+name);
$('#custId2').text(cid);

/*......getting last booking id.......*/
$('#boookId2').text(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/CarRentalNew_war_exploded/booking/getLastId",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#boookId2').text(resp.data);

        }

    })
)

/*.getting reg messge*/
var regId=localStorage.getItem('regAlertId');
var regName=localStorage.getItem('regAlertName');
console.log(regId,regName);
$('#regNoti').text(regName+", your registration done successfully.remenber your id"+regId+", and password.Now you can book your day.")

//window.onload=alert(localStorage.getItem("regAlertId"));