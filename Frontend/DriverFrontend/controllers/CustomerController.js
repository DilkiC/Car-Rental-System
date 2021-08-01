/*...getting cid*/
$('#custId').text(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/CarRentalNew_war_exploded/customer/custId",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#custId').text(resp.data);

        }

    })
)

function clear(){
    $('#custId').text(null);
    $('#custName').val(null);
    $('#custEmail').val(null);
    $('#custContact').val(null);
    $('#custPassword').val(null);
    $('#nicImageCust').val(null);
}


/*.........register.........*/
$('#registerBtnCust').click(function () {
    let id = $('#custId').text();
    let name = $('#custName').val();
    let email = $('#custEmail').val();
    let contact = $('#custContact').val();
    let password = $('#custPassword').val();

    localStorage.setItem('regAlertId',id);
    localStorage.setItem('regAlertName',name);

    let formData = new FormData();
    for (let file of document.getElementById('nicImageCust').files) {
        formData.append("file", file);
    }
    formData.append("cid", id);

    //.......................................................
    $.ajax({
        method: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8081/CarRentalNew_war_exploded/customer/uploadIdImage",
        async: true,
        data: formData,
        success: function (resp) {
            console.log(resp.data);
            if (resp.code == 200) {
                $.ajax({
                    method: "POST",
                    contentType: "application/json",
                    url: "http://localhost:8081/CarRentalNew_war_exploded/customer/register",
                    data: JSON.stringify({
                        cid: id,
                        name: name,
                        email: email,
                        contact: contact,
                        password: password,
                        nicImage: resp.data
                    }),
                    success: function (resp) {
                        if (resp.code == 200) {
                            alert("Registration Done.Please remember your ID ("+id+") and Password");
                            clear();

                        }
                    }
                });
            } else {
                alert("Please Upload a NID")
            }

        }

    })

});

function sendMessage(){

}

/*$('#btn-sign-in').click(function () {
    alert("clicked1");
    //$('#popupRegister').css('display','block');
    //$('#popupRegister').show();
    $('#popupRegister').load('user_profile.html');
    //window.location.replace('https://lochanathiwanka.github.io/Easy_Car_Rental_Admin_Dashboard/');
     window.location.replace('user_profile.html');
    //alert("clicked2");
    //$('#popupBookings').show();
});*/

$('#btn-sign-in').click(function () {
    //alert("clicked");
    let cid=$('#txtCid').val();
    let password=$('#txtPassword').val();


        $.ajax({
            method:"GET",
            url:"http://localhost:8081/CarRentalNew_war_exploded/customer/"+cid,
            contentType: "application/json",
            async:true,
            success:function (resp) {
                console.log(resp.data);
                if(resp.data.password==password){
                    //$('#popupBookings').css('display','block');
                    //$('#popupRegister').show();

                    //window.location.replace('user_profile.html');
                    //window.location='user_profile.html?data='+cid;
                    localStorage.setItem('cid',cid);
                    localStorage.setItem('name',resp.data.name);
                    window.location='user_profile.html';
                    cid.val(null);
                    password.val(null);


                }else {
                    alert("Invalid Password");
                }
            }

        })

});


