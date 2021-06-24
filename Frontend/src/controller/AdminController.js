//...................admin  login...................

/*$('#adminLoginBtn').click(function () {
    $('#adminPage').css('display','none')
    $('#adminManagePage').css('display','block');
});*/

/*
$('#signUpAdminLink').click(function () {
    $('#adminPage').css('display','none')
    $('#custRegisterPge').css('display','block');

});*/

//........................admin manage dashboard.......................
hideAllAdmin();
function hideAllAdmin() {
    $('#addCarPage,#returnCarPage,#addDriverPage,#manageCustBookingPage,#paymentPage,#adminHomePage').css('display','none');

}
//$('#adminHomePage').css('display','block');//****

$('#addCarLink').click(function () {
    hideAllAdmin();
    $('#addCarPage').css('display','block');
});

$('#paymentLink').click(function () {
    hideAllAdmin();
    $('#paymentPage').css('display','block');
});
$('#addDriverLink').click(function () {
hideAllAdmin();
$('#addDriverPage').css('display','block');
});

$('#manageCustBookingLink').click(function () {
hideAllAdmin();
$('#manageCustBookingPage').css('display','block');
});


//......................................manage customer booking........................................
//getting bid
$('#bId').val(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/booking/getLastId",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#bId').val(resp.data);

        }

    })
)
//getting cid

function setCustId(){
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/customer/custId",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#custId').val(resp.data);

        }

    })
}

$('#custId').val(
    setCustId()
)
//getting carid
$('#carId').val(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/caritem/getId",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#carId').val(resp.data);

        }

    })
)
//getting did
$('#dId').val(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/driver/getId",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#dId').val(resp.data);

        }

    })
)




//get all bookings.................
getAllCustBookings();
function getAllCustBookings() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/booking",
        success:function (resp) {
            console.log(resp);
            $('#custBookTable>tbody').empty();

            for (let book of resp.data){
                    let bookId=book.bookId;
                    let custId=book.custId;
                    let bookDate=book.bookDate;
                    let carBrand=book.carBrand;
                    let carId=book.carId;
                    let pickDate=book.pickDate;
                    let pickTime=book.pickTime;
                    let returnDate=book.returnDate;
                    let returnTime=book.returnTime;
                    let venue=book.venue;
                    let driverId=book.driverId;
                    let carType=book.carType;
                    let lossPrice=book.lossPrice;
                    let slip=book.bankSlip;

                let bankslip="<img style='width: 100px; height: 100px' src='assets/bankslipUploded/" + slip + "'>"

                var row = `<tr><td>${bookId}</td><td>${custId}</td><td>${bookDate}</td><td>${carBrand}</td><td>${carId}</td>
                <td>${pickDate}</td><td>${pickTime}</td><td>${returnDate}</td><td>${returnTime}</td><td>${venue}</td>
                <td>${driverId}</td><td>${carType}</td><td>${lossPrice}</td><td>${bankslip}</td></tr>`;
                $('#custBookTable>tbody').append(row);
            }
        }

    });

}

//get search customer details........

$('#searchCustId').on("keyup",function (event) {
    let inputCustId=$('#searchCustId').val();

    if(event.keyCode===13){
        $.ajax({
            method:"GET",
            url:"http://localhost:8081/Backend_war_exploded/customer/"+inputCustId,
            async:true,
            success:function (resp) {
                console.log(resp.data);
                if(resp.data.custId==inputCustId) {

                    $('#searchCustDetailTable>tbody').empty();
                    var row = `<tr><td>${resp.data.custId}</td><td>${resp.data.custName}</td><td>${resp.data.custAddress}</td><td>${resp.data.custContact}</td><td>${resp.data.custNIC}</td>
                    <td>${resp.data.custEmail}" </td><td>${resp.data.regDate}</td><td>${resp.data.password}</td><td>${resp.data.nicImage}</td></tr>`;
                    $('#searchCustDetailTable>tbody').append(row);

                }else {
                    alert("Invalid Customer ID...")
                }
            }

        });

    }
});

//..........payemnts...........................................................................
//load bid s according to the cust id...
$('#searchCustIdForBooking').on("keyup",function (event) {
    let inputCid=$('#searchCustIdForBooking').val();

    if(event.keyCode===13){
        $.ajax({
            method:"GET",
            url:"http://localhost:8081/Backend_war_exploded/booking/searchcustid/"+inputCid,
            async:true,
            success:function (resp) {
                console.log(resp.data);
                    $('#searchCustBookingDetailtable>tbody').empty();

                    for (let book of resp.data) {
                        let bookId = book.bookId;
                        let custId = book.custId;
                        let bookDate = book.bookDate;
                        let carBrand = book.carBrand;
                        let carId = book.carId;
                        let pickDate = book.pickDate;
                        let pickTime = book.pickTime;
                        let returnDate = book.returnDate;
                        let returnTime = book.returnTime;
                        let venue = book.venue;
                        let driverId = book.driverId;
                        let carType = book.carType;
                        let lossPrice = book.lossPrice;
                        let bankSlip = book.bankslip;

                        let bankslip = "<img style='width: 100px; height: 100px' src='assets/bankslipUploded/" + bankSlip + "'>"

                        var row = `<tr><td>${bookId}</td><td>${custId}</td><td>${carId}</td><td>${driverId}</td><td>${bookDate}</td>
                        <td>${carBrand}</td><td>${pickDate}</td><td>${pickTime}</td><td>${returnDate}</td><td>${returnTime}</td>
                        <td>${venue}</td><td>${carType}</td><td>${lossPrice}</td><td>${bankslip}</td><td><button id="tblselectbtn" class="btn bg-secondary rounded tblselectbtn">Select</button></td></tr>`;
                        $('#searchCustBookingDetailtable>tbody').append(row);
                    }
            }

        });

    }
});

//getting pid
$('#lblreturnid').text(
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/payment",
        contentType: "application/json",
        async:true,
        success:function (resp) {
            console.log(resp.data);
            $('#lblreturnid').text(resp.data);

        }

    })
)

//setting bid,loss,datediff,carrentalcost,extracost..........
$(document).ready(function () {
    $(document).on('click','#searchCustBookingDetailtable tbody tr',function () {
        var currentRow=$(this).closest("tr");
        var col1bid=currentRow.find("td:eq(0)").text();
        var col13loss=currentRow.find("td:eq(12)").text();
        //var col12cartype=currentRow.find("td:eq(11").text();

        //console.log(col1bid);
        $('#lblbookid').text(col1bid);
        $('#lbllossDamage').text(col13loss);

        var col7pickdate=currentRow.find("td:eq(6)").text();
        var col9returndate=currentRow.find("td:eq(8)").text();

        var returnDate=new Date(col9returndate);
        var pickDate=new Date(col7pickdate);
        var datediff=returnDate-pickDate; //miliseconds
        var days=datediff/1000/60/60/24; //miliseconds converts to days
        //console.log(datediff);
        //console.log(Math.round(days));
        $('#lbldateDiff').text(Math.round(days));



        //......................car rental..........
        var col12cartype=currentRow.find("td:eq(11)").text();
        console.log(col12cartype);
        var datediff = $('#lbldateDiff').text();

        if((col12cartype == "General") && (datediff < 30)) {
            var carrental = datediff * 2500;
            $('#lblcarRentalCost').text(carrental);
        } else if ((col12cartype == "General") && (datediff >= 30)) {
            var carrental = datediff * 64000;
            $('#lblcarRentalCost').text(carrental);
        } else if ((col12cartype == "Premium") && (datediff < 30)) {
            var carrental = datediff * 5500;
            $('#lblcarRentalCost').text(carrental);
        } else if ((col12cartype == "Premium") && (datediff >= 30)) {
            var carrental = datediff * 120000;
            $('#lblcarRentalCost').text(carrental);
        } else if ((col12cartype == "Luxury") && (datediff < 30)) {
            var carrental = datediff * 10000;
            $('#lblcarRentalCost').text(carrental);
        } else {
            var carrental = datediff * 200000;
            $('#lblcarRentalCost').text(carrental);
        }

        //extrakm cost............................
        $('#enterExtraKm').on("keyup",function (event) {
            if (event.keyCode === 13) {
                var extrakm=$('#enterExtraKm').val();

                if((col12cartype=="General") && (extrakm>=100)){
                    var extracost=extrakm*30;
                    $('#lblextrakmcost').text(extracost);
                }else if(col12cartype=="Premium" && (extrakm>=100)){
                    var extracost=extrakm*50;
                    $('#lblextrakmcost').text(extracost);
                }else if(col12cartype=="Luxury" && (extrakm>=100)){
                    var extracost=extrakm*100;
                    $('#lblextrakmcost').text(extracost);
                }else{
                    $('#lblextrakmcost').text(0);
                }
            }

            //drivercost.................................................................
            var col4cartype=currentRow.find("td:eq(3)").text();
            if(col4cartype=="D0"){
                $('#lbldrivercost').text(0);
            }else {
                $('#lbldrivercost').text( ($('#lbldateDiff').text())*1000 );
            }

            //net total....................................................
            var nettotal=( parseInt($('#lblcarRentalCost').text()) ) + ( parseInt($('#lblextrakmcost').text())) + ( parseInt($('#lbldrivercost').text()));
            $('#lblnettotal').text(nettotal);

            var loss=$('#lbllossDamage').text();
            if(loss>nettotal){
                var finalnet=loss-nettotal;
                $('#lblreturn').text(finalnet);
                $('#lblpay').text(0);
            }else if(loss<nettotal){
                var finalnet=nettotal-loss;
                $('#lblpay').text(finalnet);
                $('#lblreturn').text(0);
            }else {
                $('#lblpay').text(0);
                $('#lblreturn').text(0);
            }

        });

    })
})
///////////////////////////add payment/////////////////////////////
$('#addpayBtnAdmin').click(function () {
    let pid =$('#lblreturnid').text();
    let bookid =$('#lblbookid').text();
    let pdate =$('#lblreturndate').text();
    let total=$('#lblnettotal').text();

    $.ajax({
        method:"POST",
        url:"http://localhost:8081/Backend_war_exploded/payment/add",
        contentType:"application/json",
        async:true,
        data:JSON.stringify({
            pid:pid,
            bookId:bookid,
            pDate:pdate,
            total:total
        }),
        success:function (data) {
            console.log(data);
            if(data.code==200){
                alert("Payment Done successfully")
            }else{
                alert(" Failed....Try again")
            }
        }
    });

});




