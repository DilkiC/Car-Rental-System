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
        url:"http://localhost:8081/Backend_war_exploded/caritem/addcar",
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
                alert("Added Successfully")
            } else{
                alert(" Failed....Bad request.....")

            }
        }
    });

});

//search car...............................................................

$('#carId').on("keyup",function (event) {
    let id=$('#carId').val();
    if(event.keyCode===13){
        $.ajax({
            method:"GET",
            url:"http://localhost:8081/Backend_war_exploded/caritem/searchcar/"+id,
            async:true,
            success:function (resp) {
                console.log(resp.data);
                if(resp.data.carId==id){
                    $('#carBrand').val(resp.data.carBrand);
                    $('#carType').val(resp.data.carType);
                    $('#carColor').val(resp.data.carColor);
                    $('#transType').val(resp.data.transType);
                    $('#fuelType').val(resp.data.fuelType);
                    $('#noPass').val(resp.data.noPass);
                    $('#dailyRate').val(resp.data.dailyRate);
                    $('#freeKmDay').val(resp.data.freeKmDay);
                    $('#monthRate').val(resp.data.monthRate);
                    $('#freeKmMonth').val(resp.data.freeKmMonth);
                    $('#priceExtraKm').val(resp.data.priceExtraKm);
                }
                else{
                    alert(" Wrong Car Id.....")
                }
            }
        });
    }
})



//update car............................................................
$('#updateCarBtnAdmin').click(function () {
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
        method:"PUT",
        url:"http://localhost:8081/Backend_war_exploded/caritem/updatecar",
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
                alert("Added Successfully")
            } else{
                alert(" Failed....Bad request.....")

            }
        }
    });

});

//delete car............
$('#deleteCarBtnAdmin').click(function () {
    let id=$('#carId').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8081/Backend_war_exploded/caritem?"+id,
        contentType:"application/json",
        success:function (resp) {
            console.log(resp.data);
        }
    })


});

//get all car....................................
getAllCars();
function getAllCars() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/Backend_war_exploded/caritem",
        success:function (resp) {
            console.log(resp);
            $('#displayCarsTbl>tbody').empty();

            for (let car of resp.data){
                let carId=car.carId;
                let carBrand=car.carBrand;
                let carType=car.carType;
                let carColor=car.carColor;
                let transType=car.transType;
                let fuelType=car.fuelType;
                let noPass=car.noPass;
                let dailyRate=car.dailyRate;
                let freeKmDay=car.freeKmDay;
                let monthRate=car.monthRate;
                let freeKmMonth=car.freeKmMonth;
                let priceExtraKm=car.priceExtraKm;

                var row = `<tr><td>${carId}</td><td>${carBrand}</td><td>${carType}</td><td>${carColor}</td><td>${transType}</td>
                <td>${fuelType}</td><td>${noPass}</td><td>${dailyRate}</td><td>${freeKmDay}</td><td>${monthRate}</td>
                <td>${freeKmMonth}</td><td>${priceExtraKm}</td></tr>`;
                $('#displayCarsTbl>tbody').append(row);
            }
        }

    });

}