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

                let bankslip="<img style='width: 100px; height: 100px' src='assets/uploading/dl/" + slip + "'>"

                var row = `<tr><td>${bookId}</td><td>${custId}</td><td>${carId}</td><td>${driverId}</td><td>${bookDate}</td>
                <td>${carBrand}</td><td>${pickDate}</td><td>${pickTime}</td><td>${returnDate}</td><td>${returnTime}</td>
                <td>${venue}</td><td>${carType}</td><td>${lossPrice}</td><td>${bankslip}</td></tr>`;
                $('#requestTbl>tbody').append(row);
            }
        }

    });

}
