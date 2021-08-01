//...............get all vehicles.................

getAllCars();
function getAllCars() {
    $.ajax({
        method:"GET",
        url:"http://localhost:8081/CarRentalNew_war_exploded/caritem",
        success:function (resp) {
            console.log(resp);
            $('#vehicleTbl>tbody').empty();

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
                $('#vehicleTbl>tbody').append(row);
            }
        }

    });

}
