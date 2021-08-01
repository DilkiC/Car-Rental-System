/*........getting last car id...........*/
function getLastId(){
    $('#carId').val(
        $.ajax({
            method:"GET",
            url:"http://localhost:8081/CarRentalNew_war_exploded/caritem/getId",
            contentType: "application/json",
            async:true,
            success:function (resp) {
                console.log(resp.data);
                $('#carId').val(resp.data);

            }

        })
    )
}
getLastId();

//..........clear ....................
function clear(){
    $('#carId').val(null);
    $('#carBrand').val(null);
    $('#carType').val(null);
    $('#carColor').val(null);
    $('#transType').val(null);
    $('#fuelType').val(null);
    $('#noPass').val(null);
    $('#dailyRate').val(null);
    $('#freeKmDay').val(null);
    $('#monthRate').val(null);
    $('#freeKmMonth').val(null);
    $('#priceExtraKm').val(null);
}

//.........................add a car............................................
$('#addCarBtnAdmin').click(function () {
    let id=$('#carId').val();
    let brand=$('#carBrand').val();
    let type=$('#carType').val();
    let color=$('#carColor').val();
    let transType=$('#transType').val();
    let fuelType=$('#fuelType').val();
    let noPass=$('#noPass').val();
    let dailyrate=$('#dailyRate').val();
    let freeDay=$('#freeKmDay').val();
    let monthrate=$('#monthRate').val();
    let freeMonth=$('#freeKmMonth').val();
    let extraPrice=$('#priceExtraKm').val();

    $.ajax({
        method:"POST",
        url:"http://localhost:8081/CarRentalNew_war_exploded/caritem/addcar",
        contentType:"application/json",
        async:true,
        data:JSON.stringify({
            carId:id,
            carBrand:brand,
            carType:type,
            carColor:color,
            transType:transType,
            fuelType:fuelType,
            noPass:noPass,
            dailyRate:dailyrate,
            freeKmDay:freeDay,
            monthRate:monthrate,
            freeKmMonth:freeMonth,
            priceExtraKm:extraPrice
        }),
        success:function (data) {
            console.log(data);
            if(data.code==200){
                alert("Added Successfully");
                clear();
                getLastId();
            } else{
                alert(" Failed....Bad request.....")

            }
        }
    });

});