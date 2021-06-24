function refreshCustomerRegisterPage() {
    $('#custName').val(null);
    $('#custAddress').val(null);
    $('#custContact').val(null);
    $('#custNIC').val(null);
    $('#custEmail').val(null);
    $('#regDate').val(null);
    $('#imgNIC').val(null);
    $('#password').val(null);
    $('#password1').val(null);

}
//add register .....................................................................................................
$('#registerBtn').click(function () {
    let cid=$('#custId').val();
    let cname=$('#custName').val();
    let caddress=$('#custAddress').val();
    let ccontact=$('#custContact').val();
    let cnic=$('#custNIC').val();
    let cemaiil=$('#custEmail').val();
    let cregdate=$('#regDate').val();
    let password=$('#password').val();

    let formData=new FormData();
    for(let file of document.getElementById('imgNIC').files){
        formData.append("file",file);
    }
    formData.append("cid",cid);

    //.......................................................
    $.ajax({
        method: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8081/Backend_war_exploded/customer/uploadIdImage",
        async: true,
        data: formData,
        success: function (resp) {
            console.log(resp.data);
            if (resp.code == 200) {
                $.ajax({
                    method: "POST",
                    contentType: "application/json",
                    url: "http://localhost:8081/Backend_war_exploded/customer/register",
                    data: JSON.stringify({
                        custId:cid,
                        custName:cname,
                        custAddress:caddress,
                        custContact:ccontact,
                        custNIC:cnic,
                        custEmail:cemaiil,
                        regDate:cregdate,
                        password:password,
                        nicImage:resp.data
                    })

                    /*success:function (resp) {
                        if (resp.code == 200) {
                            alert("Registration Done Successfully ");
                            setCustId();
                            refreshCustomerRegisterPage();
                        }else {
                            alert("Registration Failed ");
                        }
                    }*/

                });
            } else {
                alert("Please Upload a NID")
            }

        }
    });





    //........................................................
    /*$.ajax({
        method:"POST",
        url:"http://localhost:8081/Backend_war_exploded/customer/register",
        contentType:"application/json",
        async:true,
        data:JSON.stringify({
            custId:cid,
            custName:cname,
            custAddress:caddress,
            custContact:ccontact,
            custNIC:cnic,
            custEmail:cemaiil,
            regDate:cregdate,
            password:password

        }),
        success:function (data) {
            console.log(data);
            if(data.code==200){
                alert("Registration done successfully...Now you can book your rent car using your user name and password in booking section..Thankyou!")
            }else{
                alert("Registration Failed....Try again....Bad request.....")
            }
        }
    });
*/
});


//file uploading.....................................................................................................
/*
$('#registerBtn').click(function () {
    let cid = $('#custId').val();
    let cname = $('#custName').val();
    let caddress = $('#custAddress').val();
    let ccontact = $('#custContact').val();
    let cnic = $('#custNIC').val();
    let cemaiil = $('#custEmail').val();
    let cregdate = $('#regDate').val();
    //let cuname=$('#custUserName').val();
    //let cpassword=$('#custPassword').val();
    let fileName=$("#imgNIC")[0].files[0].name;
    let formData = new FormData();
    for (let file of document.getElementById('imgNIC').files) {
        formData.append("file", file);
    }
    formData.append("custId", cid);

    $.ajax({
        method: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8081/Backend_war_exploded/customer/uploadIdImage",
        async: true,
        data: formData,
        success: function (resp) {
            console.log(resp.data);

            if (resp.code == 200) {
                $.ajax({
                    method: "POST",
                    contentType: "application/json",
                    url: "http://localhost:8081/Backend_war_exploded/customer/register",
                    data: JSON.stringify({
                        "custId": cid,
                        "custName": cname,
                        "custAddress": caddress,
                        "custContact": ccontact,
                        "custNIC": cnic,
                        "custEmail": cemaiil,
                        "regDate": cregdate,
                        "nicImage":resp.data
                    })
                });
            } else {
                alert("Please Upload Your NIC/Driving Lisence")
            }
        }


    });
})
*/



/*.............................................*/
/*
$('#regDate').onload(function () {
    var today = new Date();
    $('#regDate').val(today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2))
});*/

/*..............customer login...............................*/
$('#signUpLink').click(function () {
    $('#bookingPge').css('display','none')
    $('#custRegisterPge').css('display','block');

});
$('#forgotPassCust').click(function () {
    $('#bookingPge').css('display','none')
    $('#custRegisterPge').css('display','block');

});

/*$('#custLogin').click(function () {
    $('#bookingPge').css('display','none')
    $('#bookingOrderPage').css('display','block');
});*/

//validation............................................
/*
let regCustId=/^(C)[0-9]{1,}$/;
let regCustId=/^(C)[0-9]{1,}$/;
let regCustId=/^(C)[0-9]{1,}$/;
let regCustId=/^(C)[0-9]{1,}$/;
let regCustId=/^(C)[0-9]{1,}$/;
let regCustId=/^(C)[0-9]{1,}$/;
let regCustId=/^(C)[0-9]{1,}$/;
let regCustId=/^(C)[0-9]{1,}$/;
let regCustId=/^(C)[0-9]{1,}$/;

$('#custId').on("keyup",function (event) {
    if(event.keyCode==13){
        if(regCustId.test($('#custId').val())){
            $('#custId').css('border','2px solid green');
            $("#lblCid").text("Customer ID");
        }else{
            $("#cid").css('border','2px solid red');
            $("#lblCid").text('Your Input Data Format is Wrong (C00-001)');
        }


    }else {
        alert("Please press enter to continue")
    }
})
*/

//search customer
/*$('#custId').on("keyup",function (event) {
    let inputCustId=$('#custId').val();

    if(event.keyCode===13){
        $.ajax({
            method:"GET",
            url:"http://localhost:8081/Backend_war_exploded/customer/"+inputCustId,
            async:true,
            success:function (resp) {
                console.log(resp.data);
                if(resp.data.custId==inputCustId) {

                    $('#custId').val(resp.data.custId);
                    $('#custName').val(resp.data.custName);
                    $('#custAddress').val(resp.data.custAddress);
                    $('#custContact').val(resp.data.custContact);
                    $('#custNIC').val(resp.data.custNIC);
                    $('#custEmail').val(resp.data.custEmail);
                    $('#regDate').val(resp.data.regDate);
                   // $('#imgNIC').val(resp.data.);
                    /!*$('#custId').val(resp.data.custId);
                    $('#custId').val(resp.data.custId);*!/

                }else {
                    alert("Invalid Customer ID...")
                }
            }

        });

    }
});*/


