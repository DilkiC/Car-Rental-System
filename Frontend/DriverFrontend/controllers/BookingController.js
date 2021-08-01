
/*..setloss price according to the car type.*/
$('#cmbcartype').click(function () {
    var selectcartype=$('#cmbcartype').val();
    if(selectcartype=="General"){
        $('#lossPrice').val(10000);
    }else if(selectcartype=="Premium"){
        $('#lossPrice').val(15000);
    }else{
        $('#lossPrice').val(20000);
    }

});

//...................add booking.......................
$('#bookBtn').click(function () {
    let option=$("input[name='flexRadioDefault']:checked").val()
    if(option==1){
        withDriverBooking();
    }else if(option==2){
        withoutDriverBooking();
    }else {
        alert("Please select whether Do you want a dirver or not")
    }
});

//without a driver...................................
function withoutDriverBooking() {

    let bookId=$('#boookId2').text();
    let bookDate=$('#bookDate2').text();
    let carBrand=$('#cmbcarBrand').val();
    let pickDate=$('#pickDate').val();
    let pickTime=$('#pickTime').val();
    let returnDate=$('#returnDate').val();
    let returnTime=$('#returnTime').val();
    let venue=$('#venue').val();
    let carType=$('#cmbcartype').val(); //c
    let lossPrice=$('#lossPrice').val();
    //let bankSlip=$('#bankSlip').val();
    let custId=$('#custId2').text();
    let carId=$('#cmbcarId').val();
    let driverId="NoDriver"

    let formData=new FormData();
    for(let file of document.getElementById('bankSlipFile').files){
        formData.append("file",file);
    }
    formData.append("bid",bookId);  //name-->backend controller passing parameter

    //...................................................................................

    $.ajax({
        method: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8081/CarRentalNew_war_exploded/booking/uploadBankImage",
        async: true,
        data: formData,
        success: function (resp) {
            console.log(resp.data);
            if (resp.code == 200) {
                $.ajax({
                    method: "POST",
                    contentType: "application/json",
                    url:"http://localhost:8081/CarRentalNew_war_exploded/booking/addbooking",
                    data: JSON.stringify({
                        bookId:bookId,
                        cid:custId,
                        bookDate:bookDate,
                        carBrand:carBrand,
                        carId:carId,
                        pickDate:pickDate,
                        pickTime:pickTime,
                        returnDate:returnDate,
                        returnTime:returnTime,
                        venue:venue,
                        driverId:driverId,
                        carType:carType,
                        lossPrice:lossPrice,
                        bankSlip:resp.data
                    }),
                    success:function (resp) {
                        if(resp.code==200){
                            alert("Done");
                        }
                    }

                });
            } else {
                alert("Please Upload a NID")
            }

        }
    });

    //..................................................................................


}
//.with driver booking..........................................................
function withDriverBooking(){
    chooseRandomDriver();
}
function chooseRandomDriver() {
    var availableDrivers=[];
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/CarRentalNew_war_exploded/driver",
        success:function (resp) {
            for (let did of resp.data){
                availableDrivers.push(did);
            }
            console.log(availableDrivers.length);   //4
            //availableDrivers.shift(0);  //D0
            //console.log(availableDrivers.length);   //3
            //console.log(availableDrivers);      // d1,d2,d3

            var randomDriver = Math.floor(Math.random() * availableDrivers.length);
            var driver=(availableDrivers[randomDriver]);
            sendRequestWithRandomDriver(driver);

        }
    })

}function sendRequestWithRandomDriver(driver) {
    let bookId=$('#boookId2').text();
    console.log(bookId);
    let bookDate=$('#bookDate2').text();
    let carBrand=$('#cmbcarBrand').val();
    let pickDate=$('#pickDate').val();
    let pickTime=$('#pickTime').val();
    let returnDate=$('#returnDate').val();
    let returnTime=$('#returnTime').val();
    let venue=$('#venue').val();
    let carType=$('#cmbcartype').val();
    let lossPrice=$('#lossPrice').val();
    //let bankSlip=$('#bankSlip').val();
    let custId=$('#custId2').text();
    let carId=$('#cmbcarId').val();
    let driverId=driver.driverId;
    console.log(driverId);



    let formData=new FormData();
    for(let file of document.getElementById('bankSlipFile').files){
        formData.append("file",file);
    }
    formData.append("bid",bookId);  //name-->backend controller passing parameter

    //...................................................................................

    $.ajax({
        method: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8081/CarRentalNew_war_exploded/booking/uploadBankImage",
        async: true,
        data: formData,
        success: function (resp) {
            console.log(resp.data);
            if (resp.code == 200) {
                $.ajax({
                    method: "POST",
                    contentType: "application/json",
                    url:"http://localhost:8081/CarRentalNew_war_exploded/booking/addbooking",
                    data: JSON.stringify({
                        bookId:bookId,
                        cid:custId,
                        bookDate:bookDate,
                        carBrand:carBrand,
                        carId:carId,
                        pickDate:pickDate,
                        pickTime:pickTime,
                        returnDate:returnDate,
                        returnTime:returnTime,
                        venue:venue,
                        driverId:driverId,
                        carType:carType,
                        lossPrice:lossPrice,
                        bankSlip:resp.data
                    }),
                    success:function (resp2) {
                        if(resp2.code==200){
                            alert("Done");
                        }
                    }

                });
            } else {
                alert("Please Upload a NID")
            }

        }
    });
}

