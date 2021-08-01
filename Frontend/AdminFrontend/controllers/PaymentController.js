//load bid s according to the cust id...
$('#searchCustIdForBooking').on("keyup",function (event) {
    let inputCid=$('#searchCustIdForBooking').val();

    if(event.keyCode===13){
        $.ajax({
            method:"GET",
            url:"http://localhost:8081/CarRentalNew_war_exploded/booking/searchcustid/"+inputCid,
            async:true,
            success:function (resp) {
                console.log(resp.data);
                $('#searchCustBookingDetailtable>tbody').empty();

                for (let book of resp.data) {
                    let bookId = book.bookId;
                    let custId = book.cid;
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
                    let slip = book.bankSlip;

                    let bankslip = "<img style='width: 100px; height: 100px' src='assets/bankslipUploded/" + slip + "'>"

                    var row = `<tr><td>${bookId}</td><td>${custId}</td><td>${carId}</td><td>${driverId}</td><td>${bookDate}</td>
                        <td>${carBrand}</td><td>${pickDate}</td><td>${pickTime}</td><td>${returnDate}</td><td>${returnTime}</td>
                        <td>${venue}</td><td>${carType}</td><td>${lossPrice}</td><td>${bankslip}</td></tr>`;
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
        url:"http://localhost:8081/CarRentalNew_war_exploded/payment",
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
            if(col4cartype=="NoDriver"){
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
        url:"http://localhost:8081/CarRentalNew_war_exploded/payment/add",
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

