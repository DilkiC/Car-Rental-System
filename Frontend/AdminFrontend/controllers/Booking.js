//get all bookings.................
getAllCustBookings();
function getAllCustBookings() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/CarRentalNew_war_exploded/booking",
        success:function (resp) {
            console.log(resp);
            $('#requestTbl>tbody').empty();

            for (let book of resp.data){
                let bookId=book.bookId;
                let custId=book.cid;
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

                let image="<img style='width: 200px; height: 80px' src='assets/uploading/bankSlip/" + slip + "'>"

                var row = `<tr><td>${bookId}</td><td>${custId}</td><td>${carId}</td><td>${driverId}</td><td>${bookDate}</td>
                <td>${carBrand}</td><td>${pickDate}</td><td>${pickTime}</td><td>${returnDate}</td><td>${returnTime}</td>
                <td>${venue}</td><td>${carType}</td><td>${lossPrice}</td><td>${image}</td></tr>`;
                $('#requestTbl>tbody').append(row);
            }
        }

    });

}

/*...........search customers......*/
$('#searchCustId').on("keyup",function (event) {
    let inputCustId=$('#searchCustId').val();

    if(event.keyCode===13){
        $.ajax({
            method:"GET",
            url:"http://localhost:8081/CarRentalNew_war_exploded/customer/"+inputCustId,
            async:true,
            success:function (resp) {
                console.log(resp.data);
                if(resp.data.cid==inputCustId) {

                    $('#searchCustTbl>tbody').empty();
                    var row = `<tr><td>${resp.data.cid}</td><td>${resp.data.name}</td><td>${resp.data.email}</td><td>${resp.data.contact}</td>
                    </tr>`;
                    $('#searchCustTbl>tbody').append(row);

                }else {
                    alert("Invalid Customer ID...")
                }
            }

        });

    }
});

