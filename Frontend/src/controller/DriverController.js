//.................................driver login....................
/*$('#driverLogin').click(function () {
    $('#driverPage').css('display','none')
    $('#driverManagePage').css('display','block');
});*/

//.........add driver...............
$('#driverRegBtn').click(function () {
    let did=$('#dId').val();
    let dname=$('#dName').val();
    let daddress=$('#dAddress').val();
    let dcontact=$('#dContact').val();

    $.ajax({
        method:"POST",
        url:"http://localhost:8081/Backend_war_exploded/driver/register",
        contentType:"application/json",
        async:true,
        data:JSON.stringify({
            driverId:did,
            driverName:dname,
            driverAddress:daddress,
            driverContact:dcontact
        }),
        success:function (data) {
            console.log(data);
            if(data.code==200){
                alert("Registration done successfully...Thankyou!")
            }else if(data.code==500){
                alert("Registration Failed....Try again....Server Error....")
            }else if(data.code==404){
                alert("Registration Failed....Try again....Not found....")
            } else{
                alert("Registration Failed....Try again....Bad request.....")

            }

        }
    });

});